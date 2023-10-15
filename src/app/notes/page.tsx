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

        <Link href="/notes/sept">
          <p className="accented hover:underline underline-offset-4">
            September
          </p>
        </Link>

        <p className="lg:w-50">
        <span className="font-bold">Saturday, October 14:&nbsp;</span>
          Learned that you can sometimes get the moon to perfectly cast a shadow on a model of the moon and earth during a solar eclipse – it was a little too partial in Boston to make the model work right, but the little crescent in the sky was still pretty cool.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Friday, October 13:&nbsp;</span>
          Learned about the Ottawa ankle rules, which help determine when X-rays are indicated for ankle injuries. tl;dr I got an ankle X-ray.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Thursday, October 12:&nbsp;</span>
          Recall that low temperatures are useful for propagating information down a binary Ising tree. On the other hand, using Glauber dynamics to sample from the Ising model is more efficient at high temperatures. There's a similar phase transition when considering the mixing time with respect to some distance (e.g., TV distance).
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Wednesday, October 11:&nbsp;</span>
          From 211: the randomized Neyman-Pearson lemma yields a <InlineMath math="MP_\alpha"/> test even when the likelihood ratio is not continuous (e.g., for discrete distributions).
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Tuesday, October 10:&nbsp;</span>
          Learned about relating quadratic forms to operator norms of the associated matrices. Seems like it should&apos;ve been less surprising in retrospect but nice to know for the future.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Monday, October 9:&nbsp;</span>
          Learned how to prove Cauchy-Schwarz, Holder, and a couple other inequalities using SoS proof system – thanks 224 pset!
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Sunday, October 8:&nbsp;</span>
          If a matrix <InlineMath math="A"/> is PSD, then the Frobenius inner product <InlineMath math="\langle A,B \rangle \geq 0"/> for all PSD matrices <InlineMath math="B"/>.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Saturday, October 7:&nbsp;</span>
          Learned that the derivative with respect to different parameters of the log partition function of an Ising model yields the expected value of either each node or each edge.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Friday, October 6:&nbsp;</span>
          Learned that the pseudodistribution positivity condition corresponds to the PSD-ness of a moment matrix.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Thursday, October 5:&nbsp;</span>
          From 6.S896: suppose we have a binary tree, with each node taking a value in <InlineMath math="\{\pm 1\}"/>, where each node takes its parent&apos;s value with probability <InlineMath math="1 - p"/> and otherwise switches. We might be interested in extracting the root value given the nodes at level <InlineMath math="h"/>. This turns out to be a problem with a sharp phase transition: for <InlineMath math="p < (2 - \sqrt{2})/4"/>, this problem is solvable (i.e., the TV distance remains bounded from <InlineMath math="0"/>). Otherwise, the TV distance goes to zero and the problem is thus unsolvable.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Wednesday, October 4:&nbsp;</span>
          Consider the problem where we receive samples <InlineMath math="x_1, \dots, x_n"/> from <InlineMath math="\mathcal{N}(\mu, \text{Id})"/> according to a <InlineMath math="\eta"/> strong contamination model. Then, it is info-theoretically impossible to determine <InlineMath math="\mu"/> better than <InlineMath math="O(\eta)"/>.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Tuesday, October 3:&nbsp;</span>
          A nice formalization of a concept I already kind of knew: from 6.7910, given some class of functions <InlineMath math="\mathcal{F}"/> and a loss function <InlineMath math="L"/>, we call <InlineMath math="\mathcal{H} \subset \mathcal{F}"/> a universal hypothesis space if <InlineMath math="\min_{f \in \mathcal{F}} L(f) = \inf_{h \in \mathcal{H}} L(h)" />. For instance, we might consider the set of all polynomials as a subset of the set of all smooth functions on some compact set.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Monday, October 2:&nbsp;</span>
          From 286: consider a multiple linear regression model with centered covariates of the form 
          <BlockMath math="Y_i = \alpha + \beta T_i + \mathbf{\gamma}^\top \tilde{\mathbf{X}}_i + \epsilon_i" />
          where <InlineMath math="\tilde{\mathbf{X}}"/> are centered covariates. There&apos;s an efficiency gain from including covariates if the model is correctly specified relative to the difference-in-means estimator, and while the gain can be lost if the model is incorrect, in most cases the efficiency improves. If we fully interact the model:
          <BlockMath math="Y_i = \alpha + \beta T_i + \mathbf{\gamma}^\top \tilde{\mathbf{X}}_i + \mathbf{\delta}^\top T_i \tilde{\mathbf{X}}_i + \epsilon_i" />
          then <InlineMath math="\hat{\beta}"/> is at least as efficient as the difference-in-means estimator.
        </p>
        
        <p className="lg:w-50">
        <span className="font-bold">Sunday, October 1:&nbsp;</span>
          Learned about the general product rule, which is so clean! For <InlineMath math="f_i"/> differentiable, we have that 
          <BlockMath math="\frac{d}{dx} \left[\prod_i f_i(x)\right] = \left(\sum_i \frac{f_i ' (x)}{f_i (x)} \right) \prod_i f_i(x) " />
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