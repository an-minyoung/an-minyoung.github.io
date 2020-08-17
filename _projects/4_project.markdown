---
layout: page
title: MRI-compatible actuator for artificial tactile stimulation
description: 2020 Project
img: /assets/img/pneumatic_actuator/fig_01.png
---

<p>
  <a href=""></a><div class=""></div>
  <!-- <a href="https://github.com/alexanderhay2020/499"><div class="color-button">GitHub</div></a> -->
  <!-- <a href="https://youtu.be/f2VmKv2i89Y"><div class="color-button">YouTube</div></a> -->
</p>

Working with Dr. Netta Gurari in the Robotics and Sensorimotor Control Lab, our goal is to create and trace a sensory percept through the brain using fMRI.

<!-- <p>
  <center>
    <a href="https://youtu.be/f2VmKv2i89Y"><img src="/assets/img/winter_project/thumb.png" width="95%;" height="95%;"></a>
    <em> Demonstration video</em>
  </center>
</p> -->

## Introduction

### Stroke Overview
Strokes are caused by a disruption of blood flow to the brain, either by a clot in the blood vessel (Ischemic Stroke) or by a rupture (Hemorrhagic Stroke). Without oxygen or nutrients supplied by the blood stream cells begin to die. Any function lost or impairs is an indicator of where this damage occurs. The scope of the damage is in part determined by the arterial network; neighboring branches of blood vessels may still be able to serve the affected area, limiting the potential damage. Everyone's brain is different, the same sort of stroke event can produce different effects between individuals.

<!-- <p>
    <center><img src="/assets/img/Figure_3-2.jpg" width="50%;" height="50%;" alt/>
    <br>
    <em>Figure 1: MRI image shows affected tissue in the parietal lobe. This individual experienced stuttering in their speech following the stroke</em></center>
</p> -->


### Somatosensory Overview
The somatosenory system is the mechanism by which the body interprets touch, pressure, temperature, proprioception, and pain, through a route called the Dorsal Column-Medial Lemniscal pathway. Receptors in the body transduce sensory information and send it upstream to the Dorsal Root Ganglion in the spinal column. It travels up the spine, crosses in the medulla, passes through the midbrain, and finally terminates at the somatosensory cortex. The crossing in the medulla is why a stroke in the right hemisphere of the brain affects the left side of the body, and vice versa.

<!-- <p>
    <center><img src="/assets/img/winter_project/alpha_model.png" width="100%;" height="100%;" alt/>
    <br>
    <em>Figure 2: The Dorsal Column-Medial Lemniscal pathway</em></center>
</p> -->

## Apparatus

To create the sensory signal I developed a small piston that presses on the finger. The piston is 3D printed using PLA polymer and is attached to an air compressor for pneumatic action. It's controlled using a PIC32 microcontroller and a pressure sensor. Two variations of the piston were developed; a pneumatic return (how the piston resets itself) and a spring return. More information about the design can be found [here](https://github.com/alexanderhay2020/499/tree/master/summer_project/design).

<!-- <p>
    <center><img src="/assets/img/winter_project/assembly.gif" width="50%;" height="50%;" alt/>
    <br>
    <em>Apparatus exploded view</em></center>
</p> -->

## Controller

See my [GitHub](https://github.com/alexanderhay2020/499/summer_project) page.

## Discussion & Future Work

During development I made it a priority that the device was MRI-compatible, which influenced many of the design considerations and challenges. The decision to use a pneumatic system made it so there is no interference from the apparatus during the MR imaging process, however, air is a compressible fluid and makes it difficult to control. A hydraulic system was considered to address that but was never implemented due to concerns about leakage.

The control loop as it is currently only uses a pressure sensor to infer force applied by the piston, and is only feed-forward. To close the control loop an optical linear encoder using fiber optic cables was considered, but ultimately shelved due to time constraints.

Knowing if/when the piston engages with the finger is also important. The PIC32 microcontroller has a peripheral called the Charge Time Measurement Unit (CTMU), allowing for capacitive touch sensing. The surface the fingertip engages with must be conductive (and MRI-compatible, ie. aluminum foil) for it to work. Studies examining the heating effects of MRI scanning have shown that no significant heating occurs with nonferromagnetic materials.<sup>['[1]'](https://onlinelibrary.wiley.com/doi/abs/10.1002/mrm.1910070302?sid=nlm%3Apubmed)</sup> This means the individual won't risk burning their finger. And because the peripheral is non-moving, there's no risk of interference during imaging.

<!-- <p>
  <center>
    <img src="/assets/img/winter_project/img01.jpg" width="80%;" height="80%;" alt/>
    <br>
    <em>Complete assembly of project</em>
  </center>
</p> -->


## References

[1] Buchli R, Boesiger P, Meier D. Heating effects of metallic implants by MRI examinations. Magn Reson Med. 1988;7(3):255-261. doi:10.1002/mrm.1910070302
