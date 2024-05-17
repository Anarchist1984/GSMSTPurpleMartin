'use client'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "../../firebase"; // Assuming db is your Firestore instance
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Loading from "../../loading";
import { Suspense } from "react";

export default function SignIn() {
  const router = useRouter();
  
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Check if the document already exists in Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // If the document exists, check approval status and role
        const userData = userDoc.data();
        const { status, role } = userData;

        if (status === "approved") {
          // Redirect based on user's role
          switch (role) {
            case "admin":
              router.push("accounts/admin/dashboard");
              break;
            case "team leader":
              router.push("accounts//team-leader/dashboard");
              break;
            default:
              router.push("accounts/user/dashboard");
          }
        } else {
          // If not approved, redirect to a pending approval page
          router.push("/accounts/pending-approval");
        }
      } else {
        // If the document doesn't exist, create it
        await setDoc(userDocRef, {
          email: user.email,
          first: null,
          last: null,
          status: "pending", // Assuming the default status is pending for new users
          role: "user", // Assuming the default role is user for new users
          class: null,
        });

        // Redirect user to the onboarding page for new users
        router.push("/accounts/onboarding");
      }
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return (
    <Suspense fallback={<Loading/>}>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login or Signup</h1>
              <p className="text-balance text-muted-foreground">
                Sign in With Google To Access an Account
              </p>
            </div>
            <div className="grid gap-4">
              <Button variant="outline" className="w-full" onClick={signInWithGoogle}>
                Login with Google
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <Image
            src="/placeholder.svg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </Suspense>
  );
}
