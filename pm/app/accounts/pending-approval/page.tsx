'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/app/loading";


export default function SignIn() {
  return (
    <Suspense fallback={<Loading/>}>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Pending Approval</h1>
              <p className="text-balance text-muted-foreground">
                Hey there looks like you haven't been approved yet, check back later or ask your administrator to approve you
              </p>
            </div>
            <div className="grid gap-4">
              <Button variant="outline" className="w-full">
                <Link href="/accounts">Go back to Sign In</Link>
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
