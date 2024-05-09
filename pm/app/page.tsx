import Link from "next/link";

export default function Home(){
  return(
    <div className="flex justify-center items-center h-screen">
      <div className="m-4">
        <Link href="/accounts/admin/dashboard">
          <div className="block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Admin Role</div>
        </Link>
      </div>
      <div className="m-4">
        <Link href="/accounts/team-leader/dashboard">
          <div className="block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Team Leader Role</div>
        </Link>
      </div>
      <div className="m-4">
        <Link href="/accounts/user/dashboard">
          <div className="block px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">User Role</div>
        </Link>
      </div>
      <div className="m-4">
        <Link href="/accounts/signin">
          <div className="block px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">Sign In</div>
        </Link>
      </div>
    </div>
  )
}
