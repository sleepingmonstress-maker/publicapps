# Israel Through Time — Mobile Stability Fix

This edition fixes the mobile panel/resource-closing bug.

Changes:
- mobile height-only viewport changes no longer rebuild the journey
- expanded study layers are remembered
- resource modals remain open through browser toolbar/viewport changes
- backdrop taps do not dismiss resources on phones
- modal scrolling, focus return and Escape-to-close are improved

Open `index.html` or deploy the entire folder.


## Whole-map button fix
The hero's **See the whole map** button now opens the phone-native Timeline view on screens up to 767 px. On larger screens it scrolls to the complete eight-lane comparison matrix.
