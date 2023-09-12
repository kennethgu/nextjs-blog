import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <meta name="robots" content="noindex"></meta>
    </Head>
    <main className="flex lg:flex-row flex-col py-24 lg:w-3/5 md:w-1/2 w-3/4 text-left mx-auto">
      <Navbar />

      <div className="py-1 px-5 shrink">
        <p>
          Hoping to use this page to note one thing I learned each day! Keep me accountable :)
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Monday, Sept 11:&nbsp;</span>
          Learned about <Link href="http://people.csail.mit.edu/moitra/docs/Tensors.pdf" className="accented hover:underline">tensor decomposition</Link> in 224 today – specifically Jennrich&apos;s algorithm, which uses tensor contraction and nice properties of pseudoinverses and eigenvalues.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Sunday, Sept 10:&nbsp;</span>
          Read a really awesome <Link href="https://www.nytimes.com/2023/09/08/t-magazine/vanilla-spice-blandness.html?smid=url-share" className="accented hover:underline">NYT article</Link> about vanilla flavors: how vanilla went from exciting to bland, how fertilization was first adapted to the vanilla orchid by a 12 y/o enslaved child named Edmond Albius, how vanillin seems to be a universally enjoyed smell.
        </p>

        <p className="lg:w-50">
          <span className="font-bold">Saturday, Sept 9:&nbsp;</span>
          Learned that <Link className="accented hover:underline" href="https://abcbirds.org/blog/flamingo-flight/">flamingos can fly</Link>! Some species even migrate long distances for the winter and can fly up to 40 mph.
        </p>

        <p className="lg:w-50">
          <span className="font-bold">Friday, Sept 8:&nbsp;</span>
          From Tom Goldstein&apos;s ML Foundations talk: inspired by the idea of type-I and type-II thinking in humans, we can train a <Link className="accented hover:underline" href="https://arxiv.org/abs/2106.04537">&quot;thinking net&quot;</Link> as an analog of slow thinking. Without skip connections, though, the network &quot;overthinks&quot; after too many steps. Thinking nets can be trained on smaller problems (e.g., 9x9 mazes) and still succeed on larger problems (e.g., 100x100 mazes).
        </p>

        <p className="lg:w-50">
          <span className="font-bold">Thursday, Sept 7:&nbsp;</span>
          First day of MIT classes! From 6.S898: consider polling a population to determine the fraction of voters who support a proposition. Assuming i.i.d. queries, estimating p to within &epsilon; requires &Omega;(1/&epsilon;^2) queries. Proving the lower bound involves Le Cam&apos;s two point method, tensorization, and Pinsker&apos;s inequality.
        </p>

        <p className="lg:w-50">
          <span className="font-bold">Wednedsay, Sept 6:&nbsp;</span>
          First real day of junior year classes! Learned about the diffraction limit in 224 today and <Link className="accented hover:underline" href='https://doi.org/10.48550/arXiv.2004.07659'>algorithmic bounds</Link> for distinguishing k Airy disks with some minimum separation &Delta;. Roughly, there&apos;s a phase transition at a certain &Delta; where the sample complexity changes from exponential to polynomial in k. Proving the theorem (at least in one dimension) involves Fourier transforms and a clever construction and manipulation of matrices.
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
    </>
  )
}