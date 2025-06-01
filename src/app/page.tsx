import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <main className="flex lg:flex-row flex-col py-24 xl:w-3/5 lg:w-4/5 md:w-3/5 w-3/4 text-left mx-auto">
      <Navbar />

      <div className="py-1 px-5 shrink">
        <img src="/hs.jpg" className="float-right lg:w-1/4 w-2/5 ml-3.5 rounded-md" />
        <p className="text-justify">
        Hello! My name&apos;s Kenny, and I&apos;m a recent graduate of Harvard College, where I lived in <Link href="https://currier.harvard.edu" className="accented">Currier House</Link> and studied statistics, math, and computer science. My research interests revolve (broadly) around high-dimensional statistics and machine learning: I&apos;m interested in developing performance guarantees for and improving the efficiency of statistical and ML methods in high-dimensional settings.
        At Harvard, I&apos;ve been fortunate to be advised by <Link href="https://sites.harvard.edu/prs499/" className="accented">Prof. Pragya Sur</Link> and <Link href="https://sites.google.com/view/morganeaustern/home" className="accented">Prof. Morgane Austern</Link>. 
        </p>
        <p className="text-justify">
        This coming fall, I will begin my PhD in Statistics at <Link href="https://statistics.stanford.edu" className="accented">Stanford University</Link>.
        </p>
        <p className="text-justify">
        Outside of research, I also love thinking and talking about electoral politics/strategies (especially in my lovely home state of Michigan), education policy, pop culture, AI ethics, and the intersection(s) of these things! 
        </p>
        <p>
          email: <span className="italic">kgu [at] college [dot] harvard [dot] edu</span>
        </p>
      </div>
    </main>
  )
}
