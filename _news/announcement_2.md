---
layout: post
title:  Function Approximation Using Radial Basis Functions
date:   2020-01-15
inline: false
description: Using radial basis functions to approximate a linear mapping
---

### Color Specific Photoreceptors - Cones
Inside the retina are cone cells, photosensitive cells that differentiate color. Humans have 3 different types of cones; (S)mall, (M)edium, and (L)arge, corresponding to the length of the wavelength that excites it. The excitement amplitudes of each type of cone is perceived to us as color, and [the color perceived is the sum of each cone response](https://alexanderhay2020.github.io/alexanderhay2020.github.io//assets/img/Figure_5.gif).

<div class="img_row">
    <img class="col three" src="{{ site.baseurl }}/assets/img/figure_5.gif">
</div>
<div class="col three caption">
    The color perceived is the sum of each cone response
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
* *y = 2x + e*;  e is a normally distributed noise vector, μ = 1, σ = 0
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
    <img class="col one " src="{{ site.baseurl }}/assets/img/Figure_4.png">
</div>

Modeling photoreceptor response provides insight to how information is gathered and processed at the cellular level, and it's the network of these cone cells that provide the stimulus we interpret as color. Techniques like this are already in use in glasses for correcting colorblindness.

<!--
***

Jean shorts raw denim Vice normcore, art party High Life PBR skateboard stumptown vinyl kitsch. Four loko meh 8-bit, tousled banh mi tilde forage Schlitz dreamcatcher twee 3 wolf moon. Chambray asymmetrical paleo salvia, sartorial umami four loko master cleanse drinking vinegar brunch. <a href="https://www.pinterest.com" target="blank">Pinterest</a> DIY authentic Schlitz, hoodie Intelligentsia butcher trust fund brunch shabby chic Kickstarter forage flexitarian. Direct trade <a href="https://en.wikipedia.org/wiki/Cold-pressed_juice" target="blank">cold-pressed</a> meggings stumptown plaid, pop-up taxidermy. Hoodie XOXO fingerstache scenester Echo Park. Plaid ugh Wes Anderson, freegan pug selvage fanny pack leggings pickled food truck DIY irony Banksy.

#### Hipster list
<ul>
    <li>brunch</li>
    <li>fixie</li>
    <li>raybans</li>
    <li>messenger bag</li>
</ul>

Hoodie Thundercats retro, tote bag 8-bit Godard craft beer gastropub. Truffaut Tumblr taxidermy, raw denim Kickstarter sartorial dreamcatcher. Quinoa chambray slow-carb salvia readymade, bicycle rights 90's yr typewriter selfies letterpress cardigan vegan.

***

Pug heirloom High Life vinyl swag, single-origin coffee four dollar toast taxidermy reprehenderit fap distillery master cleanse locavore. Est anim sapiente leggings Brooklyn ea. Thundercats locavore excepteur veniam eiusmod. Raw denim Truffaut Schlitz, migas sapiente Portland VHS twee Bushwick Marfa typewriter retro id keytar.

> We do not grow absolutely, chronologically. We grow sometimes in one dimension, and not in another, unevenly. We grow partially. We are relative. We are mature in one realm, childish in another.
> —Anais Nin

Fap aliqua qui, scenester pug Echo Park polaroid irony shabby chic ex cardigan church-key Odd Future accusamus. Blog stumptown sartorial squid, gastropub duis aesthetic Truffaut vero. Pinterest tilde twee, odio mumblecore jean shorts lumbersexual. -->
