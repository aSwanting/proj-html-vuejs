# Don Peppe's Pizza

### Things to note

- Color Palette given with assignment contained many obsolete colors, assumption is it was generated and not chosen. Ended up manually picking colors from image.
- Missing magnifying glass icon shown in example, spent some time searching for an adequate one.
- Not having the font, again spent a decent amount of time searching for a suitable font. I assume in a serious project the font style would be provided by the designer.

#### Header

- Took some time to elaborate a good data structure from which to populate the various header elements. Not sure if I may have gone overboard.
- Positioning the icons, at first tried using flex, then absolute. Added active class to nav-menu to show icon.
- Positioned logo by using each menu voice an order based on index, logo then gets order from number of menu voices / 2, to always be centered (assuming menu voices are even).
- Counter for cart items added conditionally, count from data.
