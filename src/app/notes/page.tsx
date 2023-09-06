import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/navbar'

export default function Home() {
  return (
    <main className="flex lg:flex-row flex-col py-24 lg:w-3/5 md:w-1/2 w-3/4 text-left mx-auto lowercase">
      <Navbar />

      <div className="py-1 px-5 shrink">
        <p>
          I&apos;m hoping to use this page to note at least one thing I learned each day! Keep me accountable :)
        </p>

        <p className="lg:w-50">
          <span className="font-bold">Tuesday, Sept 5:&nbsp;</span>
          Spent a little too much time trying to figure out how to use Next.js to create this website. Hoping that the steepest part of the learning curve is mostly over so that I can start spending more time on content/formatting
        </p>

        <Link href="/">
          <p className="accented hover:underline underline-offset-4">
            &#8592; back to home
          </p>
        </Link>
      </div>
    </main>
  )
}