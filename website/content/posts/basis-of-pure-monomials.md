+++
title = "Basis of pure monomials"
author = ["Douwe Hoekstra"]
publishDate = 2026-04-30T00:00:00+02:00
tags = ["math"]
draft = false
+++

For of my research projects, I needed to decompose a multivariate polynomial into a linear combination of so-called _pure_ monomials. These are monomials of the form \\(\lambda^r\\) where \\(\lambda\\) is some linear form. I had never read the proof that such a basis exists, but it turned out that the proof is quite neat, so I decided to write a short exposition of this proof here (mainly for my own reference). This is based on parts of the first two chapters of (<a href="#citeproc_bib_item_2">Reznick 1992</a>).

<!--more-->

Let us set the stage: We work over the real numbers. Then we can consider polynomials of degree \\(d\\) on \\(\mathbb{R}^n\\), the set of which we denote by \\(\mathrm{Pol}^d(\mathbb{R}^n)\\). Bourbaki (<a href="#citeproc_bib_item_1">2007</a>) tells us that we can identify \\(\mathrm{Pol}^d(\mathbb{R}^n) \cong \mathrm{Sym}^d((\mathbb{R}^n)^{\ast})\\), the \\(d\\)th symmetric tensor power of forms on \\(\mathbb{R}^n\\). From this we see that \\(\mathrm{Pol}^d(\mathbb{R}^n)\\) is a finite-dimensional vector space with dimension \\(\dim \mathrm{Pol}^d(\mathbb{R}^n) = \binom{n + d - 1}{d}\\) (See for example [this mathSE question](https://math.stackexchange.com/q/94036)). We have a standard basis \\(dx^1,\ldots,dx^n\\) of \\(\mathbb{R}^n\\) induced by the standard coordinates on \\(\mathbb{R}^n\\). Our first goal now is to obtain a more concrete expression for multivariate polynomials.

It is useful to use multi-indices to write expressions with polynomials. A multi-index is an \\(n\\)-tuple \\(\alpha \in \mathbb{N}^n\\) and it indicates the number of times each coordinate is chosen: So the \\(i\\)th coordinate is chosen \\(\alpha\_i\\) times. The _degree_ of the multi-index is \\(|\alpha| = \sum\_{i = 1}^n\alpha\_i\\) and its factorial is \\(\alpha! = \prod\_{i = 1}^n \alpha\_i!\\). We denote the set of all multi-indices in dimension \\(n\\) of degree \\(d\\) by

\begin{equation\*}
\mathcal{I}(n, d) = \\{ \alpha \in \mathbb{N}^n \mid |\alpha| = d \\}.
\end{equation\*}

Then the set \\(\\{dx^{\alpha} \mid \alpha \in \mathcal{I}(n, d)\\}\\) is a basis for \\(\mathrm{Pol}^d(\mathbb{R}^n)\\). We also introduce the following shorthand for the multinomial coefficient

\begin{equation\*}
c(\alpha) = \frac{|\alpha|!}{\alpha!}.
\end{equation\*}

Then any polynomial \\(p \in \mathrm{Pol}^d(\mathbb{R}^n)\\) can written as
\\[
p = \sum\_{\alpha \in \mathcal{I}(n, d)} c(\alpha) a(p;\alpha) dx^{\alpha},
\\]
for real numbers \\(a(p; \alpha)\\).

We now introduce an inner product on \\(\mathrm{Pol}^d(\mathbb{R}^n)\\). For all \\(p, q \in \mathrm{Pol}^d(\mathbb{R}^n)\\), we define
\\[
\langle p, q \rangle = \sum\_{\alpha \in \mathcal{I}(n, d)} c(\alpha)a(p;\alpha)a(q;\alpha).
\\]
This is a inner product since it can be seen as an \\(L^2\\)-inner product with respect to some weighted counting measure on \\(\mathcal{I}(n, d)\\).

For each vector \\(v \in \mathbb{R}^n\\), we get a degree \\(d\\) polynomial by the usual dot product on \\(\mathbb{R}^n\\). That is, for \\(x \in \mathbb{R}^n\\) we have
\\[
(v\cdot)^d(x) := (v \cdot x)^d = \left( \sum\_{i = 1}^n v^ix^i \right)^d = \sum\_{\alpha \in \mathcal{I}(n, d)} c(\alpha) v^{\alpha}x^{\alpha}.
\\]
This demonstrates that \\(a((v\cdot)^d; \alpha) = v^{\alpha}\\). Then we observe that for any polynomial \\(p \in \mathrm{Pol}^d(\mathbb{R}^n)\\), we have
\\[
\langle p, (v \cdot)^d \rangle = \sum\_{\alpha \in \mathcal{I}(n, d)} c(\alpha)a(p; \alpha)v^{\alpha} = p(v).
\\]

For a subset \\(A \subset \mathbb{R}^n\\) we define

\begin{equation\*}
\mathrm{span}\_d(A) = \left\\{ \sum\_k \lambda\_k (v\_k\cdot)^d \middle| v\_k \in A, \lambda\_k \in \mathbb{R} \right\\}.
\end{equation\*}

We can use the observation above to give an description of the orthogonal complement of \\(\mathrm{span}\_d(A)\\):

\begin{equation\*}
\mathrm{span}\_d(A)^{\perp} = \\{ p \in \mathrm{Pol}^d(\mathbb{R}^n) \mid \forall v \in A, p(v) = 0\\}.
\end{equation\*}

This is reminiscent of the vanishing ideal in algebraic geometry, which is \\(I(A) = \\{p \in \mathbb{R}[X\_{1},\ldots,X\_n] \mid \forall v \in A, p(v) = 0\\}\\). In fact, \\(\mathrm{span}\_d(A)^{\perp} = I(A) \cap \mathrm{Pol}^d(\mathbb{R}^n).\\)

{{% definition %}}
We say that a set \\(A \subset \mathbb{R}\\) is _\\(d\\)-independent_ if the set \\(\\{(v \cdot)^d \mid v \in A\\}\\) is linearly independent in \\(\mathrm{Pol}^d(\mathbb{R}^n)\\).
{{% /definition %}}

Then the first result is:

{{% theorem %}}
For all \\(n, d \geq 0\\), the space \\(\mathrm{Pol}^d(\mathbb{R}^n)\\) admits a \\(d\\)-independent spanning set \\(A \subset \mathbb{R}^n\\). That is, \\(\mathrm{Pol}^d(\mathbb{R}^n)\\) admits a basis of polynomials of the form \\((v \cdot)^d\\).
{{% /theorem %}}

{{% proof %}}
By the discussion above we have \\(\mathrm{span}\_d(\mathbb{R}^n)^{\perp} = I(\mathbb{R}^n) \cap \mathrm{Pol}^d(\mathbb{R}^n)\\). But the only polynomial that is zero on all of \\(\mathbb{R}^n\\) is the zero polynomial, so \\(I(\mathbb{R}^n) = 0\\), hence \\(\mathrm{span}\_d(\mathbb{R}^n)^{\perp} = 0\\). But then it follows that \\(\mathrm{span}\_d(\mathbb{R}^n) = \mathrm{Pol}^d(\mathbb{R}^n)\\) and so we can extract a basis from the set \\(\\{(v \cdot )^d \mid v \in \mathbb{R}^n\\}\\).
{{% /proof %}}

This proof is not really constructive[^fn:1], but luckily we can actually write down an explicit basis of this form. We have the following criterion to determine \\(d\\)-independence of a set.

{{% theorem title="Serret's theorem" %}}
The set \\(A \subset \\{\alpha\_1,\ldots,\alpha\_r\\} \subset \mathbb{R}^n\\) is \\(d\\)-independent if and only if there exist "dual forms": \\(\\{h\_1,\ldots,h\_r\\} \subset \mathrm{Pol}^d(\mathbb{R}^n)\\) such that \\(h\_j(\alpha\_k) = \delta\_{jk}\\).
{{% /theorem %}}

{{% proof %}}
\\((\Leftarrow)\\) Suppose that such \\(h\_j\\) exist and suppose that \\(q = \sum\_k \lambda\_k (\alpha\_k \cdot)^d - 0\\). Then using our observation about inner products with \\((v \cdot)^d\\) we get

\begin{equation\*}
0 = \langle q, h\_j \rangle = \left\langle \sum\_k \lambda\_k (\alpha\_k \cdot)^d, h\_j\right\rangle = \sum\_k \lambda\_k h\_j(\alpha\_k) = \lambda\_j
\end{equation\*}

for all \\(1 \leq j \leq r\\). So it follows that \\(A\\) is \\(d\\)-independent.

\\((\Rightarrow)\\) Suppose that \\(\\{\alpha\_1,\ldots,\alpha\_r\\}\\) are \\(d\\)-independent. Then the set \\(\\{(\alpha\_1\cdot)^d,\ldots,(\alpha\_r\cdot)^d\\}\\) is linearly independent in the inner product space \\(\mathrm{Pol}^d(\mathbb{R}^n)\\). So ?
{{% /proof %}}

Note that we can view the set \\(\mathcal{I}(n, d)\\) of multi-indices as a subset of \\(\mathbb{R}^n\\). The following theorem tells us that this set even induces a basis of \\(\mathrm{Pol}^d(\mathbb{R}^n)\\). The idea of the proof is to construct the dual forms for Serret's theorem explicitly.

{{% theorem title="Bierman's theorem" %}}
The set \\(\mathcal{I}(n, d) \subset \mathbb{R}^n\\) is a \\(d\\)-independent spanning set of \\(\mathrm{Pol}^d(\mathbb{R}^n)\\).
{{% /theorem %}}

{{% proof %}}
We first note that \\(|\mathcal{I}(n, d)| = \dim \mathrm{Pol}^d(\mathbb{R}^n)\\), so \\(\mathcal{I}(n, d)\\) has the correct cardinality. It remains to show that it \\(d\\)-independent.

Note that for \\(\alpha \not= \beta \in \mathcal{I}(n, d)\\) there exists a \\(1 \leq j \leq r\\) such that \\(\alpha\_j \leq \beta\_j\\) (We have an \\(r\\)-tuple of integers \\(\varepsilon = \alpha - \beta \not= 0\\) and \\(|\varepsilon| = 0\\), so it must contain at least one negative integer). So then the polynomial \\(\prod\_{k = 0}^{\beta\_j - 1}(x\_j - k)\\) evaluates to \\(0\\) on \\(\alpha\\) while it evaluates to something non-zero on \\(\beta\\). However, this polynomial is not homogeneous. For all \\(\alpha \in \mathcal{I}(n, d)\\) we have by definition \\(d = \alpha\_1 + \cdots \alpha\_n\\), so the homogeneous polynomial

\begin{equation\*}
\prod\_{k = 0}^{\beta\_j - 1}(dx\_j - k(x\_1 + \cdots + x\_n))
\end{equation\*}

is \\(d\\) times the previous polynomial on elements of \\(\mathcal{I}(n, d)\\). Then we define for each \\(\beta \in \mathcal{I}(n, d)\\)

\begin{equation\*}
h\_{\beta}(x) = \prod\_{j = 1}^n\prod\_{k = 0}^{\beta\_j - 1}(dx\_j - k(x\_1 + \cdots + x\_n)).
\end{equation\*}

This a homogeneous polynomial of degree \\(\beta\_1 + \cdots + \beta\_n = d\\) so \\(h\_{\beta} \in \mathrm{Pol}^d(\mathbb{R}^n)\\). Moreover, by the observation above, for all \\(\alpha \in \mathrm{Pol}^d(\mathbb{R}^n)\\), \\(\alpha \not= \beta\\), we have \\(h\_{\beta}(\alpha) = 0\\). Finally,

\begin{equation\*}
h\_{\beta}(\beta) = d^d\prod\_j^n \prod\_{k = 0}^{\beta\_j - 1}(\beta\_j - k) = d^d\prod\_{j = 1}^n\beta\_j! = d^d\beta! \not= 0.
\end{equation\*}

So by normalizing the \\(h\_{\beta}\\), we have found a set of dual forms and so by Serret's theorem it follows that \\(\mathcal{I}(n, d)\\) is \\(d\\)-independent.
{{% /proof %}}

## References

<div class="csl-bib-body">
  <div class="csl-entry"><a id="citeproc_bib_item_1"></a>Bourbaki, Nicolas. 2007. <i>Algèbre</i>. Réimpression inchangée de l'éd. de 1981. Eléments de Mathématique 2. Berlin: Springer.</div>
  <div class="csl-entry"><a id="citeproc_bib_item_2"></a>Reznick, Bruce. 1992. “Sums of Even Powers of Real Linear Forms.” <i>Memoirs of the American Mathematical Society</i> 96 (463). <a href="https://doi.org/10.1090/memo/0463">https://doi.org/10.1090/memo/0463</a>.</div>
</div>

[^fn:1]: One can argue that for finite-dimensional vector spaces, the existence of a basis is constructive. However, this is some algorithmic procedure that does not readily give a closed form for all basis elements at once.
