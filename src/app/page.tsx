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
        <Link href="/notes">
          <h1 className="text-lg lg:px-0 px-4">
            notes
          </h1>
        </Link>
      </div>

      <div className="py-1 px-5 shrink">
        <p className="lg:w-50">
          hi! my name is kenny gu, and i&apos;m a junior at harvard college studying statistics, math, and computer science. i&apos;m interested in a variety of things, including – but certainly not limited to – machine learning, probability, electoral politics, accessibility in education, and causal inference.
        </p>
        <p>
          i&apos;m mostly creating this website/blog for myself: to keep track of things i&apos;m learning and maybe jot down some words on things i&apos;m thinking about. i&apos;m not sure how often i&apos;ll update this, but i&apos;ll try to keep it somewhat regular.
        </p>
      </div>
    </main>
  )
}
