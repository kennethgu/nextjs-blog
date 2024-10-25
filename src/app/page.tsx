import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <main className="flex lg:flex-row flex-col py-24 xl:w-3/5 lg:w-4/5 md:w-3/5 w-3/4 text-left mx-auto">
      <Navbar />

      <div className="py-1 px-5 shrink">
        <img src="/hs.jpg" className="float-right lg:w-1/4 w-2/5 ml-3.5 rounded-md" />
        <p className="lg:w-50 text-justify">
        Hello! My name&apos;s Kenny, and I&apos;m a senior at Harvard College in <Link href="https://currier.harvard.edu" className="accented">Currier House</Link> studying statistics, math, and computer science. My research interests revolve (broadly) around high-dimensional statistics and probability theory: I&apos;m interested in developing performance guarantees for and improving the efficiency of statistical methods in high-dimensional settings.
        </p>
        <p className="text-justify">
        Outside of research, I also love thinking and talking about electoral politics/strategies (especially in my lovely home state of Michigan), education policy, pop culture, AI ethics, and the intersection(s) of these things! 
        </p>
        <p>
          email: <span className="italic">kgu [at] college [dot] harvard [dot] edu</span>
        </p>
        {/* <p>
          I&apos;m mostly creating this website/blog for myself (or so I tell myself): to keep track of things I&apos;m learning and maybe jot down some words on things I&apos;m thinking about. Not sure how often I&apos;ll update this, but I&apos;ll try to keep it somewhat regular.
        </p> */}
      </div>
    </main>
  )
}
