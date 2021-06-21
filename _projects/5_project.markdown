---
layout: page
title: Environment Sensor with Display
description: An Arduino Project
# img: /assets/img/pneumatic_actuator/fig_01.png
---

<!-- <p>
  <a href=""></a><div class=""></div>
  <a href="https://github.com/alexanderhay2020/499_pneumatic"><div class="color-button">GitHub</div></a>
  <a href="https://youtu.be/s4PYeK4FzfA"><div class="color-button">YouTube</div></a>
  <a href="/assets/pdf/manual.pdf"><div class="color-button">Manual</div></a>
  <a href="https://drive.google.com/drive/folders/13laoiJDyfBOlWCCcYVfk1w05I2iibtdy?usp=sharing"><div class="color-button">Solidworks</div></a>
</p> -->

Initially developed as a automation tool for gardening, this device monitors qualities of air, light, and soil in its environment.

------
## Abstract

The purpose of this device is to monitor its environment. It measures air pressure, temperature, humidity, volatile organic compounds (VOCs), ambient light luminosity, crude spectral analysis, and soil moisture. The exterior shell is 3D printed PLA, folded into its final shape. It's controlled, and powered, using an Arduino Nano Sense BLE.

### Peripheral Overview

The device takes advantage of several sensors, external and onboard, and a screen to display the information on. Below is a description of each:

* [BME680 Air Quality Sensor](https://learn.adafruit.com/adafruit-bme680-humidity-temperature-barometic-pressure-voc-gas/overview)
  - Temperature, pressure, humidity, VOCs
  - I2C/SPI
  - Requires calibration

* [TSL2591 HDR Light Sensor](https://learn.adafruit.com/adafruit-tsl2591)
  - Luminosity
  - I2C
  - Contains IR diodes

* [GUVA UV Sensor](https://www.adafruit.com/product/1918)
  - UVB/UVA (240-370nm)
  - Analog

* [ADPS9960 Light Sensor](https://www.adafruit.com/product/3595)
  - RGB color sensing
  - Onboard Arduino Sense
  - Contains IR detectors

* [DFRobot Soil Sensor](https://wiki.dfrobot.com/Capacitive_Soil_Moisture_Sensor_SKU_SEN0193)
  - Capacitive moisture sensing
  - Analog
  - Requires calibration

* [ST7789 1.54" TFT Display](https://wiki.dfrobot.com/1.54%20Inches%20240_240_IPS_TFT_LCD_Display_with_MicroSD_Card_Breakout_SKU_DFR0649)
  - 240x240 pixels
  - SPI communication

### Enclosure

I decided to work with a folding assembly technique. This makes mounting the sensors easy in a small space while also simplifying the design. Below is an early shot of the foldable layout.

<p>
    <center><img src="/assets/img/enviro_sensor/temp_CAD.png" width="80%;" height="100%;" alt/>
    <br>
    <em>Figure 1: Early iteration of the layout, more recent photos will be posted</em></center>
</p>

## Control

A few libraries need to be included for the sensors to operate. I found Adafruit's display library easier to use than DFRobot's. 

`#include <SPI.h>              // Arduino SPI library
#include <Wire.h>

#include <Adafruit_Sensor.h>  // Core sensor library
#include <Adafruit_GFX.h>     // Core graphics library
#include <Arduino_HTS221.h>   // Onboard temp / humidity sensor library
#include <Arduino_APDS9960.h> // Onboard light sensor library
#include <Arduino_LPS22HB.h>  // Onboard pressure sensor library

#include <Adafruit_ST7789.h>  // ST7789 driver library
#include "Adafruit_BME680.h"  // BME680 sensor library
#include "Adafruit_TSL2591.h" // TSL2591 sensor library`


### Touch Sensory Perception

The dermis contains four mechanoreceptors, each with their own specialization<sup>[1]</sup>: Meissner Corpuscles for surface textures, Ruffini Corpuscles that react to skin stretch, and Pacinian Corpuscles are sensitive to vibrations and tool use.

Merkel cells are sensitive to deep, static touches, and low vibrations (0-100Hz). They have a small receptive field and transduce detailed information about the surface they’re interacting with. Merkel cells signal the static aspect of a touch stimulus, such as pressure, whereas the terminal portions of the Merkel afferents in these complexes transduce the dynamic aspects of stimuli.[1]

<p>
    <center><img src="/assets/img/pneumatic_actuator/receptors.png" width="100%;" height="100%;" alt/>
    <br>
    <em>Figure 2: Receptors in the fingertip and the information they transduce Source: Purves, Neuroscience, 6th ed.</em></center>
</p>

### Stroke Overview
Strokes are caused by a disruption of blood flow to the brain, either by a clot in the blood vessel (ischemic stroke) or by a rupture (hemorrhagic stroke). Without oxygen or nutrients supplied by the blood stream cells begin to die. The scope of the damage is in part determined by the arterial network; neighboring branches of blood vessels may still be able to serve the affected area, limiting the potential damage. The same sort of stroke event can produce different effects between individuals.

<p>
    <center><img src="/assets/img/pneumatic_actuator/ct.png" alt/>
    <br>
    <em>Figure 3: CT scan of individual who expereinced stuttering as the result of a stroke in the left parietal lobe. Source: <a href="https://www.researchgate.net/figure/CT-scan-of-brain-showed-a-cortical-infarct-on-left-parietal-lobe-involving-Brodmann-area_fig1_7678181">Sahin et al. 2005</a></em></center>
</p>

------
## Apparatus

### Pneumatic Actuator
To create the sensory signal I developed a small pneumatic piston that presses on the finger. Pneumatic systems use air as a working fluid. The piston is 3D printed using PLA polymer and is attached to an air compressor for pneumatic action. System is controlled using a PIC32 microcontroller and communicates serially with a computer. Two varaints of the piston were developed: a pneumatic return and a spring return. More information about the design can be found [here](https://github.com/alexanderhay2020/499_pneumatic).

<p>
    <center><img src="/assets/img/pneumatic_actuator/gif/demo_test.gif" width="80%;" height="50%;" alt/>
    <br>
    <em>Figure 4: User demo of the pneumatic actuator</em></center>
</p>

### Control

Air is directed in and out of the piston using a solenoid controlled by the PIC. The solenoid has three (3) positions; allowing airflow to the cylinder, allowing airflow from the cylinder, and a neutral position that restricts all airflow.

<p>
  <center>
    <a href="https://www.lunchboxsessions.com/materials/flow-directional-control-valves/directional-control-valve-simulation"><img src="/assets/img/pneumatic_actuator/gif/left-open.gif" width="40%;" height="100%;" style="margin-right:50px;"></a>
    <a href="https://www.lunchboxsessions.com/materials/flow-directional-control-valves/directional-control-valve-simulation"><img src="/assets/img/pneumatic_actuator/gif/right-open.gif" width="40%;" height="100%;"></a>
    <br>
    <em>Figure 5: Solenoid directing airflow. Graphic source: lunchboxsessions.com</em>
  </center>
</p>

From there air is passed to a pressure regulator controlled by the PIC. Adjusting the pressure changes the speed and force in which the piston actuates.

The PIC32 is a 32 bit, general purpose, microcontroller. It acts as the brains of the system, listening to the pressure sensors and directing the pressure regulator. It can also recognize when the probe has touched the fingertip. Real time system information is displayed on the screen and transmitted serially to a listening computer.

<p>
  <center>
    <img src="/assets/img/pneumatic_actuator/gif/mri_sideXside_left.gif" width="40%;" height="100%;"  style="margin-right:50px;">
    <img src="/assets/img/pneumatic_actuator/gif/mri_sideXside_right.gif" width="40%;" height="100%;">
    <br>
    <em>Figure 6: Actuating piston</em>
  </center>
</p>

<!-- More information can be found on my [Github](https://github.com/alexanderhay2020/499_pneumatic) page -->

------
## Discussion & Future Work

During development I made it a priority that the device was MRI-compatible, which influenced many of the design considerations and challenges. The decision to use a pneumatic system made it so there is no interference from the apparatus during the MR imaging process. However, air is a compressible fluid which makes it difficult to control. A hydraulic system was considered to address that but was never implemented due to concerns about leakage.

That said, leakage still proved to be a nuisance throughout the project. Pistons of various sizes were printed in an effort to dial in the tolerances, but ultimately will require better surface finishing. In addition to O-Rings, piston rod rings were incorporated into the design to alleviate the issue. Though not unsuccessful, it was not utilized in the final design.

The control loop has two pressure sensors and one touch sensor. An optical linear encoder using fiber optic cables was considered, which would've provided more certain feedback of the piston, but ultimately was shelved due to time constraints.

Future work with this project will primarily focus on characterization of the actuator, as well as making each element more robust and providing the framework for which development can continue. The two largest lessons were in time management, setting realistic expectations and goals, and project management, learning how to juggle multiple facets of a project and navigating the way forward.

Knowing if/when the piston engages with the finger is also important. The controller currently takes advantage of the CTMU module on the PIC32. For it to work, the surface that the fingertip engages with must be conductive (and MRI-compatible, ie. aluminum foil) for it to work. Studies examining the heating effects of MRI scanning have shown that no significant heating occurs with nonferromagnetic materials.<sup>[[2]](https://onlinelibrary.wiley.com/doi/abs/10.1002/mrm.1910070302?sid=nlm%3Apubmed)</sup> This means the individual won't risk burning their finger. And because the peripheral is non-moving, there's no risk of interference during imaging<sup>[[3]](https://pubmed.ncbi.nlm.nih.gov/18982643/)</sup>.

## More Information

More information and details specific to the project, please see my Github link [here](https://github.com/alexanderhay2020/499_pneumatic).

## References

[1] Purves, D., Augustine, G., Fitzpatrick, D., Hall, W., LaMantia, A., Mooney, R., Platt, M. and White, L., 2018. Neuroscience. 6th ed.

[2] Kandel, E. R., 2013. Principles of Neural Science. 5th ed.

[3] Buchli R, Boesiger P, Meier D. Heating effects of metallic implants by MRI examinations. Magn Reson Med. 1988;7(3):255-261. doi:10.1002/mrm.1910070302

[4] Fischer GS, Krieger A, Iordachita I, Csoma C, Whitcomb LL, Gabor F. MRI compatibility of robot actuation techniques--a comparative study. Med Image Comput Comput Assist Interv. 2008;11(Pt 2):509-517. doi:10.1007/978-3-540-85990-1_61
