---
layout: post
title: JS development techniques applied to Glassdoor 
date:   2021-07-10
description: Using the console to access review information
---

## Glassdoor

My girlfriend is looking for a new position. As she goes through the process it became important to understand more about who we were reaching out to. Enter Glassdoor. This isn't a plug, that's just what they do. In order to read reviews, they ask that you submit a review of your own first. I wanted to test that.

### Site Navigation

Navigating Glassdoor is easy enough. There's a search bar, entering the company name and selecting the result will take you to their page. This is where the adventure begins.

<div class="img_row">
  <img class="col three" src="/assets/img/glassdoor/1.png">
</div>
<div class="col three caption">
  Figure 1: Lock screen presented to new users
</div>

As you can see navigation stops once this is presented. If the browser takes awhile to load sometimes you can scroll and peak at the other information, but once the lock loads that stops. Each link is also a separate page, which forces the browser to reload the lock.

If we open up the console we can look at what is creating the lock.

<div class="img_row">
  <img class="col one" src="/assets/img/glassdoor/highlight.gif">
</div>
<div class="col three caption">
  Figure 2: Identifying the lock elements
</div>

### Console Navigation

Hovering over the items we see "hardsellContainer", which sounds exactly like something we're looking for, containing the display lock elements. One of the elements is the container for the social media login options. Another element creates the shadowing effect, establishing the webpage as a background for the social media links. Because of the hierarchal nature of elements, deleting the parent element deletes any children elements.

<div class="img_row">
  <img class="col one" src="/assets/img/glassdoor/delete.gif">
</div>
<div class="col three caption">
  Figure 3: Deleting the lock elements
</div>

Deleting the lock elements allows us to see the company's information but still prevents us from scrolling. There's a few mechanisms that would prevent a page from scrolling, but a common one is the `overflow` property. If we inspect the main body of the page we see that the `overflow` property is set to `hidden`. Unchecking it should allow the user to scroll at will. If that's not the case, check the other elements for the `overflow` property to see if it was redefined.

<div class="img_row">
  <img class="col one" src="/assets/img/glassdoor/walmart.gif">
</div>
<div class="col three caption">
  Figure 4: Entire unlock process
</div>

## Discussion

I'm quite surprised at how easy it was to get around Glassdoor's security. Granted, it's not anything you can't already get for free (so long as you have a social media account), but that it's 4 clicks start-to-finish to circumvent a well presented security feature at a well-known company. It's also interesting to think about the of the barrier of entry to do this; a web browser you're already using, and its console. Anyone who has watched a 5 minute intro video into web design is already intimately familiar with the tools needed to do this. It sort of begs the question what other sites are like this, and how can they be circumvented. While there's entire fields dedicated to that, this is from the perspective of someone **not** in those fields.

I used Chrome for this, Firefox or Safari should work with some tweaks. 