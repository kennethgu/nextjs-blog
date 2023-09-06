import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <main className="flex lg:flex-row flex-col py-24 lg:w-3/5 md:w-1/2 w-3/4 text-left mx-auto lowercase">
      <Navbar />

      <div className="py-1 px-5 shrink">
        <p className="lg:w-50">
          Hi! My name is Kenny Gu, and I&apos;m a junior at Harvard College studying statistics, math, and computer science. I&apos;m interested in a variety of things, including – but certainly not limited to – machine learning, probability, electoral politics, accessibility in education, and causal inference.
        </p>
        <p>
          I&apos;m mostly creating this website/blog for myself (or so I tell myself): to keep track of things I&apos;m learning and maybe jot down some words on things I&apos;m thinking about. not sure how often I&apos;ll update this, but I&apos;ll try to keep it somewhat regular.
        </p>
      </div>
    </main>
  )
}
