import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/navbar'

export default function Home() {
  return (
    <main className="flex lg:flex-row flex-col py-24 lg:w-3/5 md:w-1/2 w-3/4 text-left mx-auto">
      <Navbar />

      <div className="py-1 px-5 shrink">
        <p>
          Hoping to use this page to note one thing I learned each day! Keep me accountable :)
        </p>

        <p className="lg:w-50">
          <span className="font-bold">Thursday, Sept 7:&nbsp;</span>
          First day of MIT classes! Consider polling a population to determine the fraction of voters who support a proposition. Assuming i.i.d. queries, estimating p to within &epsilon; requires &Omega;(1/&epsilon;^2) queries. Proving the lower bound involves Le Cam&apos;s two point method, tensorization, and Pinsker&apos;s inequality.
        </p>

        <p className="lg:w-50">
          <span className="font-bold">Wednedsay, Sept 6:&nbsp;</span>
          First real day of junior year classes! Learned about the diffraction limit in 224 today and <Link className="accented hover:underline" href='https://doi.org/10.48550/arXiv.2004.07659'>algorithmic bounds</Link> for distinguishing k Airy disks with some minimum separation. Proving the theorem (at least in one dimension) involves Fourier transforms and a clever construction and manipulation of matrices.
        </p>

        <p className="lg:w-50">
          <span className="font-bold">Tuesday, Sept 5:&nbsp;</span>
          Spent a little too much time trying to figure out how to use Next.js to create this website. Hoping that the steepest part of the learning curve is mostly over so that I can start spending more time on content/formatting.
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