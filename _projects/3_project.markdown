---
layout: page
title: Using Shape Memory Alloy Acutators
description: Winter Project - 2020
img: /assets/img/Figure_3-3.jpg
---

<p>
  <a href=""></a><div class=""></div>
  <a href="https://github.com/alexanderhay2020/499"><div class="color-button">GitHub</div></a>
  <a href=""><div class="color-button">YouTube</div></a>
</p>

For my winter project I wanted to experiment with shape memory alloys (SMA). The goal was to mimic human muscle contraction with a Nitinol wire that contracts when a current is passed through.

## Introduction

SMAs operate because of the unique crystalline structure of the alloy. The actuators used in this project are made with Nitinol, an SMA of equal parts Nickel and Titanium. These alloys have a transition temperature and easily deform when below this temperature. The crystalline structure shifts but does not suffer permanent damage (C->A). Once the wire is heated above the transition temperature the crystals undergo a phase change and revert back to their original structure, with a large force (A->B). When the wire cools again the phase change reverses and the wire can be deformed again (B->C).

<p>
    <img src="/assets/img/Figure_3-2.jpg" width="50%;" height="50%;" alt/>
    <br>
    <em>Diagram showing how SMAs atomic structure deforms</em>
</p>

As a wire, this deformation manifests as a change of length in the wire. For the actuators to actuate, a current is passed through the wire. The internal resistance of the wire heats it up above its transition temperature, instigating the phase change and *contraction* and creating a pulling force.

## The Actuator

For this project I've chosen the Miga T220 SMA linear actuator. Actuation parallels human muscle, where muscles exert a pulling force when activated, just as the nitinol contracts when a current is passed through. The T220 also as onboard MOSFET switching and protection circuit, which cuts power to SMA wire when the output stage reached the End-of-Stroke contact.

<p>
    <img src="/assets/img/Figure_3-3.jpg" width="50%;" height="50%;" alt/>
    <br>
    <em>Miga T220 SMA Linear Actuator</em>
</p>

## Design and Fabrication

Over the length of the project there were three major design iterations with incremental tweaks in between. Solidworks was used for modeling the parts, Ultimaker3 3D printer and custom laser cutter for fabrication.

### Version 1

The first version came about as a platform to initially test the components and become familiar with them. It also served as a means for incorporating 3D printers as a tool to use during design.

### Version 2

The second version was a transition piece, redesigned to be cut from a sheet of plastic or wood on a laser cutter. The focus on this was assembling a frame for the apparatus and mounting the actuators.

### Version 3

The third iteration focused on the hinge mechanism and working through bugs from changing fabrication processes. This iteration honed the final design, reduced part count, and ended with a working proof of concept.

### Version 4

The fourth and final version focused on the linkage connecting the actuator to the hinge (like a tendon) and ironing out smaller details.



<p>
    <img src="/assets/img/Figure_3-1.jpg" width="50%;" height="50%;" alt/>
    <br>
    <em>Design iterations of the actuator mount</em>
</p>
