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

        <p className="lg:w-50">
        <span className="font-bold">Thursday, Sept 14:&nbsp;</span>
          Learned about undirected graphical models in 6.S896 today. Consider an undirected graph <InlineMath math="G = (V,E)"/>. Associating vertices with random variables, consider a density <InlineMath math="p(x_V)"/> such that edges exist between vertices <InlineMath math="(i,j)"/> for <InlineMath math="i \neq j" /> if and only if the corresponding r.v.s are conditionally dependent given the other r.v.s. <Link href="https://en.wikipedia.org/wiki/Hammersley–Clifford_theorem" className="accented hover:underline">Hammersley-Clifford (1971)</Link> proves that if the density is strictly positive for all possible values of <InlineMath math="x_V"/>, the previous property implies that we can factor <InlineMath math="p"/> into clique potentials (functions depending only on each clique).
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Wednesday, Sept 13:&nbsp;</span>
          Spent some (more) time in Stat 286 picking apart the subtle but important difference between causes of effects and effects of causes. The former – interpreted as retrospective – is far more difficult to reason about. Consider the example from <Link href="https://www.jstor.org/stable/23317768" className="accented hover:underline">Geddes (1990)</Link>: is village autonomy necessary and sufficient for revolution? In the limited cases we can analyze (e.g., China, Russia, France, Britain, Germany), this appears to be the case, but we can&apos;t observe the counterfactuals and can&apos;t estimate the probability of causal necessity and probability of causal sufficiency.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Tuesday, Sept 12:&nbsp;</span>
          Consider the following problem from 6.S896: given some <InlineMath math="X_1, \dots, X_n \sim \mathcal{N}(\mu, \Sigma)"/> i.i.d., find a distribution <InlineMath math="D" /> such that <InlineMath math="\text{TV}(D, \mathcal{N}(\mu, \Sigma)) < \epsilon"/>. Then, <InlineMath math="n = O(d^2 / \epsilon^2)" /> samples suffice, and the algorithm runs in <InlineMath math="poly(n)" /> time. We simply output the Gaussian distribution with the empirical mean and covariance. The proof leverages the triangle inequality and nice properties of the KL divergence between Gaussians.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Monday, Sept 11:&nbsp;</span>
          Learned about <Link href="http://people.csail.mit.edu/moitra/docs/Tensors.pdf" className="accented hover:underline">tensor decomposition</Link> in CS 224 today – specifically Jennrich&apos;s algorithm, which uses tensor contraction and nice properties of pseudoinverses and eigenvalues.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Sunday, Sept 10:&nbsp;</span>
          Read a really interesting <Link href="https://www.nytimes.com/2023/09/08/t-magazine/vanilla-spice-blandness.html?smid=url-share" className="accented hover:underline">NYT article</Link> about vanilla flavors: how vanilla went from exciting to bland, how fertilization was first adapted to the vanilla orchid by a 12 y/o enslaved child named Edmond Albius, how vanillin seems to be a universally enjoyed smell.
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
          First day of MIT classes! From 6.S898: consider polling a population to determine the fraction of voters who support a proposition. Assuming i.i.d. queries, estimating <InlineMath math="p" /> to within <InlineMath math="\epsilon" /> requires <InlineMath math="\Omega(1/\epsilon^2)" /> queries. Proving the lower bound involves Le Cam&apos;s two point method, tensorization, and Pinsker&apos;s inequality.
        </p>

        <p className="lg:w-50">
          <span className="font-bold">Wednedsay, Sept 6:&nbsp;</span>
          First real day of junior year classes! Learned about the diffraction limit in CS 224 today and <Link className="accented hover:underline" href='https://doi.org/10.48550/arXiv.2004.07659'>algorithmic bounds</Link> for distinguishing <InlineMath math="k" /> Airy disks with some minimum separation <InlineMath math="\Delta" />. Roughly, there&apos;s a phase transition at a certain <InlineMath math="\Delta" /> where the sample complexity changes from exponential to polynomial in <InlineMath math="k" />. Proving the theorem (at least in one dimension) involves Fourier transforms and a clever construction and manipulation of matrices.
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