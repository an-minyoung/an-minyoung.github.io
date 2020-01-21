---
layout: page
title: Object Recognition and Scene Detection
description: a project using OpenCV for vehicles
img: /assets/img/opencv.png
---

After I completed my internship I was hired as a product engineer for a small start-up in Omaha, NE in 2015. Our goal was to use an on-board camera for object detection and scene recognition for long-haul truckers.

Using the OpenCV library I was able to create a proof-of-concept program to identify stop signs. Data was collected using our own on board camera and car, driving around town for a few miles collecting data from different neighborhoods and angles. This is important for model training, as the model learns to focus on the sign itself and not background features. Cleaning data is a monotonous task, so I made a tool that cropped and saved images based on user input, frame by frame. Doing so allowed us to have our own dataset with a timestamp of the frame, pixel coordinates of the sign's dimensions and center, and an image of the sign itself.

OpenCV has a Haar Cascade classifier that I used for object recognition. The classifier works by loading in a training set of images (LISA annotated stop signs), and a set of negatives, or images that explicitly DO NOT contain stop signs. I used those other traffic signs for the set of negatives to avoid misclassification when implementing more classifiers. A validation set was also created from the same dataset.

Scene detection proved to be a much more complicated task because you can't rely on a single sign to convey context. The program had to know the difference between single a cone on the side of the road and hundreds along a construction site. And since not all construction sites are the same, it had to look out for multiple features like barricades and machinery. False positives were also a concern, such as recognizing the difference between a yellow traffic light a orange construction light.

Ultimately the program uses crude consensus of recognizing environment features, ranging from common construction patterns to colors present in the frame. With more machine learning experience under my belt I would implement a Kalman filter

[Here](https://youtu.be/ramZl7Sb27s) is a link to a quick video showing
