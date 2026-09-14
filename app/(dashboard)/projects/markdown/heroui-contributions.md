---
title: HeroUI contributions
description: Improving large-list rendering in the open-source component library.
---
# HeroUI contributions

Before joining HeroUI, I contributed to its open-source component library, previously called NextUI. My work focused on list virtualization in Select, Autocomplete and Listbox.

[Release notes](https://www.heroui.com/blog/v2.6.0) · [Select contribution](https://github.com/heroui-inc/heroui/pull/4094) · [Autocomplete contribution](https://github.com/heroui-inc/heroui/pull/4203) · [Listbox contribution](https://github.com/heroui-inc/heroui/pull/4206)

## The problem with a large list

A dropdown may contain thousands of choices, even though only a small part of the list is visible. Rendering all those rows adds work before the user can interact with the component.

Virtualization renders the visible rows and a small surrounding buffer. As the user scrolls, that rendered range changes. For example, a list containing 10,000 entries does not need 10,000 visible row elements at once.

## The contribution

I worked on applying that approach to the library’s list components and used browser performance measurements to investigate responsiveness. The goal was to make large datasets practical within existing components, while preserving the interaction users expect from a selection control.

This is more than displaying fewer rows. A component still needs to track the selected item and the active option when some items are outside the visible range. The pull requests show the implementation and review discussion, and the release notes document the public release.

## From open source to product work

This work preceded my full-time role at HeroUI. I later helped build [HeroUI Chat](/projects/heroui-chat), where the same component library was part of the interface-building product.
