import Link from "next/link"
import {  LockIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="space-y-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-emerald-400 italic">Balance</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto">
            Trouve un équilibre dans ta vie quotidienne.
            <br/>Une application designé autour de ça
          </p>
          <div className="space-y-4">
            <p className="text-muted-foreground">Coming soon to iOS and Android</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Join waitlist
                <LockIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Learn more
                <LockIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      {/* <footer className="border-t py-6 md:py-0">
        <div className="container  m-auto flex flex-col md:flex-row items-center justify-between gap-4 md:h-14">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Balance. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
