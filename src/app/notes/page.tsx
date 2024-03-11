import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/navbar'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex';

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

        <Link href="/notes/sept" className="accented hover:underline underline-offset-4">
            September
        </Link>
        &nbsp;
        <Link href="/notes/oct" className="accented hover:underline underline-offset-4">
            October
        </Link>

        <p className="lg:w-50">
        <span className="font-bold">Saturday, November 11:&nbsp;</span>
          
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Friday, November 10:&nbsp;</span>
          Some mammals (e.g., lemuriform primates) have <Link href="https://en.wikipedia.org/wiki/Toothcomb" className='accented hover:underline'>toothcombs</Link>, which are sets of teeth that resemble combs. Mostly used for grooming, but there&apos;s also some potential other functions like olfaction. Evolved independently through convergent evolution in different mammals!
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Thursday, November 9:&nbsp;</span>
          From 6.7910: two somewhat related observations about AI/ML research/innovation. Rich Sutton&apos;s <Link href='http://www.incompleteideas.net/IncIdeas/BitterLesson.html' className='accented hover:underline'>Bitter Lesson</Link> notes that humans often try to incorporate patterns they use and recognize when building architectures and algorithms, but most of the time methods relying on scaling compute perform best. Sara Hooker&apos;s <Link href="https://hardwarelottery.github.io" className='accented hover:underline'>Hardware Lottery</Link> notes that often the algorithms and research ideas that gain the most traction are those that are able to take advantage of the latest hardware, rather than the &quot;best&quot; ones.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Wednesday, November 8:&nbsp;</span>
          From 224: a class of functions has SQ dimension at least <InlineMath math="D"/> with respect to some distribution <InlineMath math="q"/> if there exist <InlineMath math="f_1, \dots, f_D"/> such that for all <InlineMath math="i,j"/>, <InlineMath math="\left|\mathbb{E}_{x \sim q}[f_i(x) f_j(x)] \right| \leq \frac{1}{D}"/> --- that is, <InlineMath math="D"/> roughly orthogonal functions. Kearns et al. (1994) uses SQ dimension to form SQ lower bounds: that is, learning from that class using samples from <InlineMath math="q"/> requires <InlineMath math="\Omega(D\tau^2)"/> samples, with tolerance <InlineMath math="\tau"/>.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Tuesday, November 7:&nbsp;</span>
          Learned that you can accidentally add a line to your Git config file somehow so that it fixes the origin remote for every repo on your laptop. One line. Sigh.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Monday, November 6:&nbsp;</span>
          From 224: consider the planted clique problem. Given a graph, can you determine with high probability whether it was generated by (a) generating an Erdos-Renyi graph <InlineMath math="G(n, 1/2)"/> or (b) generating an Erdos-Renyi graph <InlineMath math="G(n, 1/2)"/> and adding a random clique of size <InlineMath math="N"/>? This problem gets easier as <InlineMath math="N"/> grows, and we can improve our chance of successfully disguishing (a) and (b) if we spend more time examining the graph, but there are no known algorithms for efficiently solving the problem when <InlineMath math="N = o(\sqrt{n})"/>.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Sunday, November 5:&nbsp;</span>
          From the 224 pset: the Bohnenblust-Hille inequality states that for any <InlineMath math="f : \{\pm 1\}^n \to \R"/> of degree at most <InlineMath math="d"/>, there exists some constant <InlineMath math = "C_d"/> such that
          <BlockMath math="\left(\sum_{S \subseteq [n]} |\hat{f}[S]|^{\frac{2d}{d+1}} \right)^{\frac{d+1}{2d}} \leq C_d \cdot \|f\|_{\infty}."/>
          where <InlineMath math = "f(x) = \sum_{S \subseteq [n]} \hat{f}[S] x_S"/> is the Fourier expansion.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Saturday, November 4:&nbsp;</span>
          Learned about the <Link href="https://x.com/getjonwithit/status/1720832283026854098?s=20" className='accented hover:underline'>Rabin-Scott theorem</Link> from Twitter: while a DFA is a special case of an NFA, NFAs are equivalent to DFAs. Given an NFA, we can design a DFA with state space equal to the power set of the state space of the NFA and design our transition function appropriately. There seems to be a pretty neat parallel to the standard proof that a higher-order Markov chain can be converted to a first-order Markov chain.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Friday, November 3:&nbsp;</span>
          Learned a common reason for the Notes app crashing on Macs is an issue with syncing Mac notes with iCloud. Pretty sure this is what&apos;s going on with mine --- I don&apos;t use it enough to warrant spending time to figure out how to fix it without turning off syncing, but I use it just enough for it to be a little annoying
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Thursday, November 2:&nbsp;</span>
          From 6.S896: (one of) the punchline(s) for the Lugosi-Mendelson estimator is that finding such an estimator boils down to finding an element of a convex set, for which we can use the ellipsoid algorithm. If we know our convex set is contained in a ball of radius <InlineMath math="R"/> and contains a ball of radius <InlineMath math="r"/>, then finding a point in the convex set takes at most <InlineMath math="\text{poly}(d, \log (R/r))"/> calls to a separation oracle, which is a function that takes a point and returns a hyperplane that separates the point from the convex set.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Wednesday, November 1:&nbsp;</span>
          Kinda learned this last year but never really committed it to memory until I had to go over it during my 121 section today: for a boolean <InlineMath math="x"/>, we have <InlineMath math="\text{NAND}(\text{NAND}(x,x),x) = 1"/>. Needed it for part of the proof of Cook-Levin: specifically, reduction from NANDSAT to 3NAND.
        </p>


        <Link href="/" className="accented hover:underline underline-offset-4">
            &#8592; back to home
        </Link>
      </div>
    </main>
    </>
  )
}