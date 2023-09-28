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
        <span className="font-bold">Wednesday, Sept 27:&nbsp;</span>
          From Stat 286: learned about <Link href="https://www.jstor.org/stable/25054228" className="accented hover:underline">Wantchekon (2003)</Link>, which analyzes a experiment in the 2001 Benin presidential election. Essentially, the experiment involved randomizing campaign strategies by village, finding that clientalism was a winning strategy in the election. The punch line for 286 is that accounting for clustering and stratifcation in SE calculation matters.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Tuesday, Sept 26:&nbsp;</span>
          Talked about random features models, where the kernel is some function averaged over a weight distribution. For an appropriate function choice, we get something that appears to be a neural network with random weights. There&apos;s also a connection to the idea that infinite width neural networks are equivalent to Gaussian processes.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Monday, Sept 25:&nbsp;</span>
          From Stat 211: learned about the asymptotic Cramer-Rao lower bound. Under some conditions, if an estimator is asymptotically unbiased (the normalized difference converges to a centered Gaussian), then the variance of that Gaussian can be bounded by roughly the same bound from the standard CRLB.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Sunday, Sept 24:&nbsp;</span>
          Learned that, given limited local memory, we can use outer products of parts of the rows/columns of two matrices to compute blocks of a matrix. There&apos;s a clever way to choose the order of computations to maximize arithmetic intensity.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Saturday, Sept 23:&nbsp;</span>
          Was a little concerned about an apple that had been sitting out for a while and was tinted red inside, but I learned that some apples can be red inside because of the <Link href="https://www.salon.com/2021/11/25/red-fleshed-apples-the-science-behind-an-uncommon-and-much-desired-apple-breed/" className="accented hover:underline">presence of anthocyanins</Link>. Hopefully that&apos;s the red color and not some kind of poison...
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Friday, Sept 22:&nbsp;</span>
          Learned that Harvard Stadium is the &quot;nation&apos;s oldest permanent concrete structure dedicated to intercollegiate athletics&quot;, according to <Link href="https://en.wikipedia.org/wiki/Harvard_Stadium" className="accented hover:underline">Wikipedia</Link>.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Thursday, Sept 21:&nbsp;</span>
          Continued discussing Chow-Liu for Ising models in 6.S896. We&apos;ve seen in the past the <InlineMath math="N = O(n \log n / \epsilon^2)"/> samples is sufficient to learn the Ising models in TV to <InlineMath math="\epsilon)"/>. Koehler shows that this is also necessary.
        </p>
        
        <p className="lg:w-50">
        <span className="font-bold">Wednesday, Sept 20:&nbsp;</span>
          Learned about the sum-of-squares method in CS 224. Roughly, the method involves taking an inefficient algorithm with a simple-ish proof of correctness and maximizing over pseudo-distributions to get a more efficient algorithm.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Tuesday, Sept 19:&nbsp;</span>
          From 6.791: implicit regularization gives us a way of thinking of gradient descent as a regularizer. There&apos;s a really neat way of rewriting the weights from gradient descent and the weights from ridge regression using SVD; effectively, both gradient descent and ridge regression (for earlier iterations and larger regularization terms) filter out smallest singular values, thus avoiding instability.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Monday, Sept 18:&nbsp;</span>
          From CS 242: there are specialized AI accelerator chips used to perform efficient NN structured pruning. N:M sparsity accelerators, like NVIDIA&apos;s A100 Sparse Tensor Core, keep at most N nonzero weights per every M continuous weights.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Sunday, Sept 17:&nbsp;</span>
          Learned that sprained ankles can take anywhere from two weeks to six months to heal well. Hoping to get back to running soon!
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Saturday, Sept 16:&nbsp;</span>
          Learned about surrogate outcomes from Stat 286 problem set: in a lot of applications, waiting for long-term outcomes is cumbersome or infeasible; instead, the average treatment effect on some surrogate outcome variable is the same as the ATE of interest if the long-term outcome is independent of the treatment given the surrogate outcome.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Friday, Sept 15:&nbsp;</span>
          From helping a friend with a problem: consider the Fibonacci-like sequence that begins with <InlineMath math="1, \varphi, \dots" />. Then, the ratio between consecutive terms is <InlineMath math="\varphi"/>, the golden ratio.
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