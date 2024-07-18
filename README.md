# Jane Doe landing page

A simple portfolio landing page for an imaginary person.

This project is part of the [Build and Deploy Your Portfolio](https://scrimba.com/learn/portfolio) course on [Scrimba](https://scrimba.com).

## Implementation

* Responsive.
* Accessible + screen reader friendly.
* Open and close navigation icons are created with CSS only.
* Mobile first approach.

While my implementation follows the course content loosely, it isn't an exact match of the design or the implementation shown in the course. I created the project from scratch and made some intentional changes with the aim of improving upon the provided design. Here's a non-exhaustive list:

* The background image in the 'what i do' section was made darker so that the foreground text is easier to read.
* `aria-*` attributes have been added throughout the page. The original page on Scrimba only had one on the hamburger button.
* When the mobile nav menu is open, it's no longer possible to use the tab key to navigate to focusable elements outside the menu.
* The site now has a max width to avoid issues with elements positioned too far to the left or right. Paragraphs also have a max width to avoid issues with very long lines.
* The animation of the hamburger icon during the toggling of the mobile nav menu was too complicated and has now been simplified. Also, its size has been increased to make it easier to click.
* The 'My Work' section now has a max width and is aligned with the rest of the sections. Additionally, it has been redesigned to improve accessibility.
* The massive size of the links in the mobile nav menu has been reduced.

## Dependencies

The project is written in HTML, CSS, JavaScript.

The following dependencies require an online connection:

* [:focus-visible](https://github.com/WICG/focus-visible) polyfill.
* [Font awesome](https://fontawesome.com/) icons.

## Run locally

Download the 'src' folder and open 'index.html' in the browser.

## Screenshots

See [screenshots](screenshots/).

For comparison purposes, I've added extra screenshots that show the original Scrimba implementation.
