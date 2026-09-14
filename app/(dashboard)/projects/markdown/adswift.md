---
title: AdSwift
description: Digital advertising displays, content management and audience measurement.
image: /projects/adswift.png
---
# AdSwift

AdSwift was an outdoor advertising project I co-founded. We explored how digital displays could deliver more relevant advertisements and give advertisers a clearer picture of where and when an audience was nearby.

My work covered the product, engineering and early partnerships. The project included an in-car advertising concept, alongside related work on display management and engagement measurement documented in SUTD UROP Report #1509.

## The problem

An advertisement can be displayed without telling us whether anyone had an opportunity to see it. We also need a way to update the content across multiple screens without visiting each device.

These became two connected parts of the project: managing what a display shows, and collecting signals about its surroundings.

## Delivering and managing content

We developed an advertisement delivery service using Android tablets and cloud services. The product explored choosing advertisements using context such as location, time and weather.

For example, a screen travelling through one area in the morning may have different useful content from the same screen elsewhere in the evening. The system needs to connect that context to the content selected for the display.

The related content-management work used a server to publish media updates and a display client to fetch and show them. A web interface let the operator manage content from one place. This separated the operator’s workflow from the device running the advertisement.

## Measuring the surroundings

We explored computer vision and Bluetooth detection on Jetson Nano and Raspberry Pi devices. The computer vision work examined people near a display. Bluetooth detection recorded nearby discoverable devices over time, providing another signal that could be plotted in an analytics dashboard.

These measurements have different meanings. A detected Bluetooth device is not proof that a person saw an advertisement, and one person may carry multiple devices. The useful output is an estimate of nearby activity, with those limits kept visible.

For example, a time-series chart can show that detected activity rose around lunchtime. It cannot, on its own, establish how many people read the screen or whether the advertisement caused a purchase.

## My role

I worked with the team on the advertisement delivery product, technical development and early discussions with advertisers and drivers. That meant connecting the display software and analytics to a practical pilot, rather than treating the dashboard as the entire product.

The project brought together device software, backend services and a web interface. It also raised an important product question: what can the data actually support? Distinguishing nearby activity from verified views was as important as collecting the measurements.
