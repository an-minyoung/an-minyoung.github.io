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

For my winter project I wanted to experiment shape memory alloys (SMA). I first heard about them as "Muscles Wires" from a book my dad recently gave me. He ran a small bookstore online and set it aside when it came through his inventory.

## Introduction

SMAs operate because of the crystalline structure of the alloy. The actuators used in this project are made with Nitinol, a SMA of equal parts Nickel and Titanium. These alloys have a transition temperature and easily deform when below this temperature. The crystalline structure shifts but does not suffer permanent damage (C->A). Once the wire is heated above the transition temperature the crystals undergo a phase change and revert back to their original structure, with a large force (A->B). When the wire cools again the phase change reverses and the wire can be deformed again (B->C).

<div class="img_row">
    <img class="col three" src="{{ site.baseurl }}/assets/img/Figure_3-2.jpg">
</div>
<div class="col three caption">
    Diagram showing how SMAs atomic structure deforms
</div>

As a wire this deformation manifests as a change of length in the wire. For the actuators to actuate, a current is passed through the wire. The internal resistance of the wire heats it up above its transition temperature, instigating the phase change and *contracts* and creating a pulling force.

## The Actuator

For this project I've chosen the Miga T220 SMA linear actuator. Actuation parallels human muscle, where muscles exert a pulling force when activated, just as the nitinol contracts when a current is passed through. The T220 also as onboard on-­‐board MOSFET	switching	and protection	circuit, which cuts	power	to SMA wire when the output stage reached the End-of-Stroke contact.

<p>
    <img src="/assets/img/Figure_3-3.jpg" width="50%;" height="50%;" alt/>
    <br>
    <em>Miga T220 SMA Linear Actuator</em>
</p>

## The Design

Designing the apparatus took an iterative approach. Solidworks was used for modeling the parts, Cura took the part files and converted them into gcode for the Ultimaker 3D printers.

<p>
    <img src="/assets/img/Figure_3-1.jpg" width="50%;" height="50%;" alt/>
    <br>
    <em>Design iterations of the actuator mount</em>
</p>
