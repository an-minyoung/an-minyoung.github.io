---
layout: post
title:  Computing Logic Funcitons using Perceptrons
date:   2019-11-20
description: Using layered perceptrons to compute logic functions
---
<p>
  <a href=""></a><div class=""></div>
  <a href="https://github.com/alexanderhay2020/alexanderhay2020.github.io/blob/master/assets/py/perceptron.py"><div class="color-button">GitHub</div></a>
  <a href="https://github.com/alexanderhay2020/alexanderhay2020.github.io/blob/master/assets/pdf/perceptron.pdf"><div class="color-button">Report</div></a>
</p>

### Emulated Neurons
Neural networks are built on units called neurons, and for this exercise a special neuron called a perceptron is used.
Perceptrons are special in that they can represent fundamental logic functions: AND, OR, NAND, NOR. Though
a perceptron can’t represent XAND or XOR, layered perceptrons can, thus all logic functions can potentially be
built using a layered network structure.

<p>
    <img src="/assets/img/nn_01.png" width="511" height="286" alt/>
    <br>
    <a href="https://medium.com/@lucaspereira0612/solving-xor-with-a-single-perceptron-34539f395182"><em>images</em></a><em> showing perceptrons' logic structure</em>
</p>

Perceptrons work by multiplying a vector of inputs by a weight vector and passing the sum of that input-weight vectors through an activation function. For this exercise I used the sigmoid function, but there are many others. Weights are [nxm] matrices, where n is the dimension of the input and m is the dimension of the output.
<p>
    <img src="/assets/img/perceptron.jpg" alt/>
    <br>
    <!-- <a href="https://missinglink.ai/guides/neural-network-concepts/neural-network-bias-bias-neuron-overfitting-underfitting/"><em>image</em></a> -->
    <em> image showing perceptron model</em>
</p>

<br>

Here is a sketch algorithm to implement a perceptron node:

$$
\sigma = \frac{1}{1+e^{\Sigma (x_iw_i )}}
$$
<br>
<br>
$$
\epsilon=y-\sigma
$$
