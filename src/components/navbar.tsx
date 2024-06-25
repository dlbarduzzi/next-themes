import Link from "next/link"

import { Container } from "./container"
import { Logo, LogoSm } from "./logo"

import { cn } from "@/lib/utils"

export async function Navbar() {
  return (
    <nav className={cn("border-b border-b-gray-200 bg-white")}>
      <Container>
        <div className="flex h-16 items-center justify-between gap-x-4">
          <div className="flex items-center">
            <Link
              href="/"
              className={cn(
                "focus-visible:outline focus-visible:outline-2",
                "focus-visible:outline-offset-4 focus-visible:outline-gray-900"
              )}
            >
              <Logo className="hidden sm:block" />
              <LogoSm className="sm:hidden" />
              <span className="sr-only">Link to homepage.</span>
            </Link>
          </div>
          <ul className="flex items-center">
            <li>Themes</li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}
