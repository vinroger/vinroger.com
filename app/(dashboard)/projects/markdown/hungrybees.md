---
title: Hungrybees
description: Helping students find nearby group food orders and share delivery costs.
image: /projects/hungrybees.png
---
# Hungrybees

Hungrybees is an Android application I built with a team at SUTD. It helps people find nearby group food orders, coordinate with one another and share delivery costs.

The problem was familiar on campus: someone wanted to order dinner, but delivery fees and minimum-order requirements made an individual order expensive. Other students nearby might want food too, without sharing the same schedule or group chat.

## How an order works

A student creates a group-order post with a restaurant, location and available places. Someone nearby can find that post, join the order and coordinate through chat. The app connects this process to a group-order link, so people can organise the purchase together.

![Hungrybees application screens](/projects/hungrybees2.png)

## My contribution

I led the engineering work and contributed across the Android application and backend. The app was written in Java, with a Spring Boot backend and a relational data model for users, order posts and messages.

These relationships matter to the product flow. A message belongs to a conversation, and an order needs to know who has joined it. Keeping those records connected allows the interface to show the right group, participants and discussion.

## Location, messages and notifications

Location-based discovery helps people find orders they can realistically join. The project used geospatial indexing to narrow nearby results instead of treating every stored order as equally relevant to the current location.

WebSockets supported the live chat, while Firebase Cloud Messaging delivered notifications. They serve different parts of the flow: chat updates an active conversation, while a push notification can draw attention to an update when the app is not open.

For example, someone can receive a notification about a group order, open the app, and then continue the discussion in chat.

<figure class="project-visual">
  <a href="/projects/rtree2.png" target="_blank" rel="noopener noreferrer" aria-label="Open image: Spatial grouping illustrated in the original project notes, alongside the nearby-search work."><img src="/projects/rtree2.png" alt="Spatial grouping illustrated in the original project notes, alongside the nearby-search work." width="300" height="300" loading="lazy" /></a>
  <figcaption>Spatial grouping illustrated in the original project notes, alongside the nearby-search work.</figcaption>
</figure>

## The outcome

The team received the Singtel and SUTD Best Project Award and the SUTD Computer Science Award in 2023. The photograph below is from the team’s award presentation.

![Hungrybees team at the SUTD award presentation](/projects/hungrybeeswin.png)

The project brought the mobile interface, nearby search, data model and messaging into one usable flow. Each piece had to support the same task: helping people coordinate an order.
