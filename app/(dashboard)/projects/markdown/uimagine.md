---
title: UImagine
description: A personal product for turning descriptions and screenshots into editable interfaces.
image: /uimagine.png
---
# UImagine

UImagine grew out of a workflow I kept repeating: think through an interface, find suitable components, read the documentation, and then turn the design into code. I built it to shorten the path between describing an idea and seeing a working interface.

[View UImagine on Product Hunt](https://www.producthunt.com/products/uimagine-io)

## What it does

A user can describe a page or provide a screenshot. UImagine generates the interface and shows a preview alongside the code. From there, the user can select a specific part of the page and ask for a change.

For example, after generating a hotel booking page, the next request might be to change the search form or replace one card. That is a different problem from generating the whole page again: the editor needs to identify the selected element and preserve the surrounding work.

## What I built

I worked on the product and its implementation as a founder and software engineer. The application combined generation, code transformation, live previews and visual editing.

Generated code needed to fit the actual component libraries. I used Babel to inspect and change its structure, including imports and component properties. Babel represents code as a tree, so changes can target a particular element instead of relying only on text replacement.

I also built a preview workflow using Vite. Generated code and its dependencies were bundled for display inside an isolated frame. Messages between the preview and the editor identified the element a user selected, making it possible to connect a visual action back to the code being edited.

## The product work

The work extended beyond generation. I worked with the team on the interface, translated feedback into features, and iterated on the path from the first prompt to an editable result.

The public Product Hunt page includes the original demonstration, screenshots and discussion with users. It remains the reference for this project, so the link here goes to that launch rather than relying on the former product domain.

![UImagine interface](/uimagine2.png)
