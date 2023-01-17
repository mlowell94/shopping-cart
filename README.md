# Shopping Cart

A shopping site mock-up built as an exercise in React Router (among other things). Themed after Resident Evil 4 with images borrowed from [evilresource.com](evilresource.com). 

## Background

I've used React Router for a few months, so I decided to spend a bit of extra time on implementing animations (namely parallax movement relative to the mouse, and animating transitions between components).

### Features

* Transitions between components
* Parallax movement of the product image on the shop page

### Challenges

I found the biggest challenge to be animating transitions between components. Specifically I found animating transitions between nested routes to be difficult. Currently, there is no animation between the shop route and other routes. Attempting to animate the whole component on route change meant that it would also animate when the nested route changes (I wanted the sidebar for the shop to stay in place while the shop component was mounted, regardless of nested route). I believe I could circumvent this by adding another AnimatePresence within the shop component, but I need to take some time to test it.

### Notable Takeaways

* Learned how to push apps created with React Router to github
* Learned how to better navigate documentation to pull out information relevant to the project
