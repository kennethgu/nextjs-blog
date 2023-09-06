import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="flex lg:flex-col flex-row top-0 py-1 px-5">
        <Link href="/">
          <h1 className="text-lg accented font-bold lg:w-40">
            Kenny Gu
          </h1>
        </Link>
        <Link href="/notes">
          <h1 className="text-lg lg:px-0 px-4 hover:underline underline-offset-4">
            notes
          </h1>
        </Link>
      </div>
    )
}