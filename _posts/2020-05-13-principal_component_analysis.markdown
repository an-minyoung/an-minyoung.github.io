---
layout: post
title:  Principal Component Analysis
date:   2020-05-13
description: Using PCA to determine number of presynaptic inputs of a cell
---

<p>
  <a href=""></a><div class=""></div>
  <a href="https://github.com/alexanderhay2020/408/blob/master/hw/hw5/homework5.m"><div class="color-button">GitHub</div></a>
</p>

### Neuron Anatomy

Neurons generally have four functional regions; input, integration, conduction, and output. Inputs are generated current flowing in and out of the cell. Inputs are aggregated, and if triggered, generate an action potential and releasing neurotransmitters. In this exercise I examine the intracellular activity of a cell and determine how many presynaptic cells are providing an input, as well as the activity level of each input.

<div class="img_row">
  <img class="col three" src="/assets/img/pca/cells.png">
</div>
<div class="col three caption">
  Figure 1: General functional regions of the neuron
</div>

### Radial Basis Functions
A Radial Basis Function (RBFs) is a function whose value depends the distance between a query point and a fixed point. For this exercise I used the Gaussian Function:


$$
h(x)=exp(-\frac{(x-c^2)}{r^2})
$$


* *x* is the query point
* *c* is some fixed point, 0 if distance is measured from origin
* *h(x)* is the RBF

By using multiple RBFs you can approximate a function. By multiplying the RBF by some weight, summing a network of RBFs can approximate a function:

$$
f(x) = \sum_{j=1}^{m}  w_j h_j(x)
$$

* *h(x)* is the RBF
* *w* is the weight for the RBF
* *j* in the index for *m* samples of x

The weight vector can be found using linear regression, ultimately leading to this equation:

$$
 \overrightarrow{w} = (H^TH)^{-1}H^T\overrightarrow{y}
$$

* *H* is the *design matrix* of *h(x)*, or a *nxm* matrix of *n* samples and *m* RBFs
* *y* is f(x) vectorized

In this exercise we have the following dataset:
* *x* is drawn from a uniform random distribution, from *-10 < n < 10; n=1,000*
* *y = 2x + e*;  e is a normally distributed noise vector, $μ = 1, σ = 0$
* Use 48 RBFs, between -12 and 12 @ every 0.5 along the x axis

[Fig. 1](https://alexanderhay2020.github.io/alexanderhay2020.github.io//assets/img/Figure_1.png) - Dataset visualized

[Fig. 2](https://alexanderhay2020.github.io/alexanderhay2020.github.io//assets/img/Figure_2.png) - 48 RBFs plotted

[Fig. 3](https://alexanderhay2020.github.io/alexanderhay2020.github.io//assets/img/Figure_3.png) - Function approximation

[Fig. 4](https://alexanderhay2020.github.io/alexanderhay2020.github.io//assets/img/Figure_4.png) - Error analysis


<div class="img_row">
    <img class="col one first" src="{{ site.baseurl }}/assets/img/Figure_1.png">
    <img class="col one" src="{{ site.baseurl }}/assets/img/Figure_2.png">
</div>

<div class="img_row">
    <img class="col one first" src="{{ site.baseurl }}/assets/img/Figure_3.png">
    <img class="col one" src="{{ site.baseurl }}/assets/img/Figure_4.png">
</div>

Modeling photoreceptor response provides insight to how information is gathered and processed at the cellular level. It's the network of these cone cells that provide the stimulus we interpret as color.
