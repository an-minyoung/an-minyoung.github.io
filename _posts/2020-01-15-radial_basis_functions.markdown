---
layout: post
title:  Function Approximation Using Radial Basis Functions
date:   2020-01-15
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
\sum_{j=1}^{m}  w_j h_j(x)
$$

* *h(x)* is the RBF
* *w* is the weight for the RBF
* *j* in the index for *m* RBFs
