'use client'
import { Suspense } from "react"
import Loading from "@/app/loading"
import { UserProvider } from "@/app/userContext"

export default function AccountsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <main>
            <Suspense fallback={<Loading />}>
            <UserProvider>
            {children}
            </UserProvider>
            </Suspense>
        </main>
  )
}
// Need to add links for account support
