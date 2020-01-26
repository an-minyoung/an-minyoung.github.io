---
layout: page
title: Using Baxter for Object Recognition and Manipulation
description: Embedded Systems Final Project
img: /assets/img/opencv.png
---

The goal for the project was to use Baxter to recognize a nerf gun, pick it up and fire it at a coffee mug. At each step Baxter asks the user for confirmation before moving to the next sequence in the task.

We made Baxter a high level state machine to navigate the task. The state machine (commander node) coordinated his left arm, right arm, cameras, and image processing. We determined that the left arm would find, pick up, and aim the gun, and the right arm would pull the trigger. 

[Here](https://youtu.be/2MRsNefNWmw) is a link to the final video showing Baxter in action.
