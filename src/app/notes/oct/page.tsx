import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../../components/navbar'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex';

function Oct() {
  return (
    <>
    <Head>
      <meta name="robots" content="noindex"></meta>
    </Head>
    <main className="flex lg:flex-row flex-col py-24 lg:w-3/5 md:w-1/2 w-3/4 text-left mx-auto">
      <Navbar />

      <div className="py-1 px-5 shrink">
      <Link href="/notes">
          <p className="accented hover:underline underline-offset-4">
            &#8592; back to this month&apos;s notes
          </p>
        </Link>

        <p className="lg:w-50">
        <span className="font-bold">Tuesday, October 31:&nbsp;</span>
          From 6.S896: for a Gaussian distribution, we can estimate the mean <InlineMath math="\mu"/> by the empirical mean <InlineMath math="\hat{\mu}"/>. A relatively straightforward proof using concentration tools shows
          <BlockMath math="\|\hat{\mu} - \mu\| \leq \sqrt{\frac{\text{Tr } \Sigma}{n}} + \sqrt{\frac{2\|\Sigma\|_{\text{op}} \log(1/\delta)}{n}}"/>
          with probability <InlineMath math="\geq 1-\delta"/>. In fact, this holds for any sub-Gaussian distribution. But in general, the existence of <InlineMath math="\Sigma"/> is not enough for the naive empirical mean to achieve a similar bound. However, this performance is achievable by a different estimator! The <Link href="https://arxiv.org/abs/1702.00482" className="accented hover:underline">Lugosi-Mendelson estimator</Link> from 2017 achieves this bound using a median-of-means approach: split the observations into appropriately sized buckets, take the empirical mean of each bucket, and output the &quot;median&quot; of the buckets.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Monday, October 30:&nbsp;</span>
          From 286: learned from <Link href="https://doi.org/10.1080/07350015.2017.1366909" className="accented hover:underline">Gelman and Imbens (2018)</Link> paper featured on pset that the use of higher-order polynomials in regression discontinuity designs leads to bias on the order of the degree --- that is, higher-order polynomials lead to lower bias --- but variance increases dramatically, making them undesirable in most settings
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Sunday, October 29:&nbsp;</span>
          Learned that the inverse of a doubly stochastic matrix with nonnegative entries is a doubly stochastic matrix. Makes intuitive sense if we think about such a matrix as a transition matrix for a reversible Markov chain.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Saturday, October 28:&nbsp;</span>
          Learned about Alice Roosevelt&apos;s life as the eldest daughter of Teddy Roosevelt: her rebellious adolescence, tumultuous marriage to Longworth, relationship with Borah, and behind-the-scenes impact on American politics. White House Princess was such a beautiful show :&apos;)
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Friday, October 27:&nbsp;</span>
          Learned that caffeinated gum is a thing. Spooky.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Thursday, October 26:&nbsp;</span>
          FOOSH (fall on outstretched hand) is a leading cause of wrist sprains. tl;dr I have now sprained two ankles and one wrist since the beginning of junior year.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Wednesday, October 25:&nbsp;</span>
          From 224: from <Link href="https://arxiv.org/abs/2009.13512" className="accented hover:underline">Chen, Klivans, and Meka (2020)</Link>, Filtered PCA gets around traditional CSQ lower bounds to make learning deep ReLU networks fixed-parameter tractable!
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Tuesday, October 24:&nbsp;</span>
          From 6.7910: <Link href="https://arxiv.org/abs/1804.10200" className="accented hover:underline">Cooper (2018)</Link> demonstrates that for overparameterized neural networks (say <InlineMath math="n"/> parameters, <InlineMath math="d"/> parameters), the locus of global minima typically forms a <InlineMath math="n-d"/> dimensional submanifold.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Monday, October 23:&nbsp;</span>
          Was already familiar with Stein&apos;s identity in one dimension but was unaware of the higher dimensional generalization. From 224, letting <InlineMath math="\gamma"/> be the density of <InlineMath math="\mathcal{N}(0,I_d)"/>, if <InlineMath math="S_\ell(\mathbf{x}) = \frac{(-1)^{\ell}}{\gamma(x)} \nabla^{(\ell)} \gamma(x)"/>, then Stein&apos;s identity applies to nice functions <InlineMath math="f"/> as
          <BlockMath math="\mathbb{E}[f(\mathbf{x}) \cdot S_\ell(\mathbf{x})] = \mathbb{E}[\nabla^{(\ell)} f(\mathbf{x})]"/>
          which provides a way to learn MLPs using tensor methods.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Sunday, October 22:&nbsp;</span>
          Kal Penn looked familiar but didn&apos;t know that he was Kutner in House, Kevin in HIMYM, Seth Wright in Designated Survivor, and was a member of the Obama administration
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Saturday, October 21:&nbsp;</span>
          Learns that the first Sweetest Day was created as a collaboration between confectioners in Cleveland, OH!
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Friday, October 20:&nbsp;</span>
          Learned that a landlubber is someone who doesn&apos;t know how to sail a boat
        </p>
        
        <p className="lg:w-50">
        <span className="font-bold">Thursday, October 19:&nbsp;</span>
          Learned about the Schur product theorem: the Hadamard product of two PSD is PSD.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Wednesday, October 18:&nbsp;</span>
          From 211: consider testing the hypothesis <InlineMath math="H_0 : \theta = \theta_0"/> against <InlineMath math="H_1 : \theta \neq \theta_0"/>. Under regularity conditions, given i.i.d. samples from <InlineMath math="f_\theta"/>, the likelihood ratio statistic under <InlineMath math="H_0"/> has some nice asymptotic properties. That is, 
          <BlockMath math="2 \log \Lambda_n \overset{d}{\to} \chi_1^2"/>
          More generally, Wilks&apos; theorem considers the LR test statistic under <InlineMath math="H_0 : \theta \in \Theta_0"/> against <InlineMath math="H_1 : \theta \in \Theta_1"/>. Then, under regularity conditions,
          <BlockMath math="2 \log \Lambda_n \overset{d}{\to} \chi^2_{\dim \Theta_1 - \dim \Theta_0}"/>
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Tuesday, October 17:&nbsp;</span>
          From 6.S896: in a DAG, we say that two subsets <InlineMath math="A,B"/> are <InlineMath math="d"/>-separated by another subset <InlineMath math="S"/> any path between <InlineMath math="A,B"/> is blocked by <InlineMath math="S"/>. In the context of Bayes net, if <InlineMath math="A,B"/> are not <InlineMath math="d"/>-separated by <InlineMath math="S"/> then, there&apos;s a distribution that factorizes according to the DAG such that <InlineMath math="x_A,x_B"/> are dependent given <InlineMath math="S"/>.
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Monday, October 16:&nbsp;</span>
          From 224: Massart noise, where we assign some <InlineMath math="\eta(x) \leq \eta"/> probability of coruption for each point (i.e., corruption can depend on covariates), might seem like an easier problem compared to random classification noise, but the additional structure makes it harder. The LeakyReLU-based algorithm for RCN no longer works, but there&apos;s a neat algorithm called the FilterTron that gets around this new barrier
        </p>

        <p className="lg:w-50">
        <span className="font-bold">Sunday, October 15:&nbsp;</span>
          Learned that Coke Zero and Diet Coke are both zero calorie, zero sugar formulations of Coke! Difference is that Coke Zero tries intentionally to replicate the taste of regular Coke; Diet Coke makes no such promises
        </p>

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
          Recall that low temperatures are useful for propagating information down a binary Ising tree. On the other hand, using Glauber dynamics to sample from the Ising model is more efficient at high temperatures. There&apos;s a similar phase transition when considering the mixing time with respect to some distance (e.g., TV distance).
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
      </div>
    </main>
    </>
  )
}

export default Oct;