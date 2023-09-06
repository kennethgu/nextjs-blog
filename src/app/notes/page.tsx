import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex lg:flex-row flex-col py-24 lg:w-3/5 md:w-1/2 w-3/4 text-left mx-auto">
      <div className="flex lg:flex-col flex-row top-0 py-1 px-5">
        <Link href="/">
          <h1 className="text-lg text-blue-800 font-bold lg:w-40">
            kenny gu
          </h1>
        </Link>
        <h1 className="text-lg lg:px-0 px-4">
          notes
        </h1>
      </div>

      <div className="py-1 px-5 shrink">
        <p className="border-b border-gray-300 w-auto rounded-xl border bg-gray-100 p-2">
          i&apos;m hoping to use this page to note at least one thing i learned each day! keep me accountable :)
        </p>

        <br></br>

        <p className="lg:w-50">
          <span className="font-bold">tuesday, sept 5:&nbsp;</span>
          spent a little too much time trying to figure out how to use Next.js to create this website. hoping that the steepest part of the learning curve is mostly over so that i can start spending more time on content/formatting
        </p>
      </div>
    </main>
  )
}