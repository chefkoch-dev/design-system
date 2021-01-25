# Changelog

## V: 8.0.2 - 9.0.0

###Colors:
The color variable names and codes completely changed.
On the left side are the old variables - on the right side the new color names.
```
$color-black --> $color-olive
$color-grey-dark --> $color-chia
$color-grey-medium --> $color-pepper
$color-grey-light --> $color-pepper
$color-sand --> $color-garlic
$color-red --> $color-watermelon
$color-red-dark --> $color-chili
$color-yellow --> $color-mirabelle
$color-yellow-dark --> $color-mirabelle-dark
```

###Typography:
The biggest change is the fontfamily. It changed from Helvetica to Source Sans Pro/Serif. Fontsizes, Fontweights, Lineheight and headings changed as well.
We added the new fontfamily in the index.html.
Every headline can be written in two different fontfamily types: Sans or Serif.
The default headlines are styled in Serif. If you want a Sans headline you need to add the modifier "-sans" like ".ds-h2-sans".
All of the headlines are differently styled now.

## V: 9.0.2 - 9.1.0

#### New component added: 
The Add Button. The ".ds-btn.ds-btn-add.ds-btn-icon" class should be used mobile view only. For desktop view one should
use the ".ds-btn.ds-btn-primary.ds-btn-icon" class to display an add button.
#### Change of primary button: 
The hover and active state changed to a different color.
#### Change of buttons: 
The border radius of "ds-btn" changed. It equals 22px now.

## V: 9.1.0 - 9.2.0

#### New component added:
The mobile Action-Menu: This action menu does not fully function. It is the basis for any mobile implementation
for an action-menu. This menu does not include animations or an open and close mechanism. In order to work as an actual
dialog one need to add these styles to "ds-action-menu": 
`
position: fixed; top: 0; left: 0; z-index: 1000002;
`
## V: 9.2.4 - 9.3.4

#### New component added: 
The View Toggle Button. It can be used to display a card or list view of items.

## V: 9.3.6 - 9.3.7

#### Typography changed: 
Removal of unused classes: "ds-h*-sans". Added utility class "ds-text-sans" in order to achieve headlines
in Source Sans Pro.

## V: 9.3.9 - 9.3.10

#### Secondary Button changed: 
Styling of the seccondary button changed. It exists a new class ".ds-btn-secondary--active" in order to stay in active mode.
This can be used if the button triggers a dropdown menu and has to stay in active mode for a short time.

## V: 9.3.10 - 9.3.11

#### Secondary Button changed: 
Styling of the seccondary button changed. The border color of the default secondary button changed and the fontsize of all buttons changed to 18px.
Also the class ".ds-btn-secondary--active" was added. With this class one gets the hover state from the secondary
button as a current state. Plus the class ".ds-btn-secondary--soft" was added in order to change the border color to a lighter green.

### Dropdown Menu added for Desktop:
A Dropdown Menu was added. With the class ".ds-menu-dropdown" one gets the default dropdown which opens from the left. With
the classes ".ds-dropdown-menu--right" and ".ds-dropdown-menu--fill-right" one gets a dropdown menu opening from the right.

## V: 9.3.11 - 9.3.12

#### View Toggle Bugfix
Just a simple bugfix for the view toggle pattern in safari browser.

## V: 9.3.13 - 9.4.0

#### Mobile Buttons
Introduce mobile Buttons for primary, secondary and tertiary. Delete unneccesary add button instead. This button equals the primary mobile button.

## V: 9.4.0 - 9.4.1

#### Mobile Buttons inactive
Inactive mobile buttons added. 

### Fix of styling for dropdownMenu

## V: 9.4.1 - 9.4.2

#### Update buttons fontweight and radius

## V: 9.4.2 - 9.4.3

#### Change import of google sans font to Source Sans Pro

## V: 9.4.3 - 9.5.0

#### Introduce notifications
Implementation of a first notification type: The Toast

## V: 9.5.0 - 9.5.1

#### Update secondary Button

## V: 9.5.1 - 9.5.2

#### Fix Button height

## V: 9.5.2 - 9.5.3

#### Fix Button height

## V: 9.5.4 - 9.5.5

#### Add styling for rounded material icons for tertiary button

## V: 9.5.5 - 9.6.0

#### Introduce Cancel Button

## V: 9.6.0 - 9.6.1

#### Bugfix for Inline-Form component

## V: 9.6.1 - 9.7.0

#### Capitalized tags
Since we manually capitalize the first letter of each word in most tags so far, `.ds-tag` get `text-transform: capitalize;` as CSS rule.

## V: 9.7.0 - 9.8.0

#### Use different headline styling for mobile and tablet

## V: 9.8.0 - 9.8.1

#### Increase node-sass package

## V: 9.10.2 - 9.11.0

### Add vertical spacing variables
### Introduce utility classes vor vertical margins and paddings

## V: 9.11.0 - 9.12.0

### Typography
* Add variables and styles for Category Text (`.ds-text-category`)
* Add Category Styles
* Remove unused variables `$font-subheading-1, $fontfamily-serif, $fontsize-marginalia, $fontweight-thin, $fontweight-extra-light, $fontweight-light, $fontweight-medium, $fontweight-extra-bold, $fontweight-black`

#### Deprecations: 
* Secondary Headings Docs and Styles (`.ds-h7, .ds-h7-top, .ds-h7-btm`)
* Heading 5 Styles  (`h5, .ds-h5`)
* Functions `headings` and `em`
* Small Text Docs

### Links
* Update copy link styles
* Add mixin `ds-base-link`
* Add Caption Link styles 
* Add Category Link styles
 
### Deprecations
* Class `.ds-text-small`. Use `.ds-text-caption` instead.
* Class `.ds-text-italic` as there is no italic variation in the new design

## V: 9.12.0 - 9.13.0

### Utils
* Add classes for styling text and background of type `.ds-text-{color}` and `.ds-bg-{color}`. For example `.ds-text-watermelon` or `.ds-bg-olive`.

## V: 9.13.0 - 9.14.0

### Typography
* Fix typo in font attribute for category text
* Correct letter-spacing for captions 
#### Deprecations:
* Aside style in Copy Text Docs

### Links
* Simplify Link styles and update links docs
* Rename mixin `ds-base-link` in `ds-text-link`
* Replace `.ds-category-link` with `.ds-text-link`
* Replace `.ds-caption-link`with `.ds-text-link`

#### Deprecations:
* Class `.ds-copy-link`. Use`.ds-text-link` instead.
* Mixin `ds-copy-link`. Use mixin `ds-text-link` instead.

## V: 9.14.0 - 9.15.0
This release mainly introduces the Recipe Card component. Along with this, other components are added (e.g. Teaser Link, Recipe Info), updated or deprecated (e.g. `.ds-recipe-meta`)

### Recipe Card
* This component is newly introduced
* Docs and markup examples are added

### Recipe Info
* Newly added component for recipe related infos
* Use this component for Rating and Meta Infos. Please see the examples

### Rating Stars
#### Deprecations
* Rating Stars docs are deprecated
* `.ds-rating` and related classes and mixins are deprecated. Please see Recipe Info

### Recipe
#### Deprecations
* Recipe Meta docs are deprecated
* class `.ds-recipe-meta` is deprecated. Please see Recipe Info

### Dropdown Menu
* Added state classe `.ds-is-hidden` for hiding dropdown menu
* Added `.dropdown-menu__action` and `.dropdown-menu__icon` for items with icon
* Renamed `.dropdown-menu--actions` in `.dropdown-menu__actions`
* Renamed `.dropdown-menu--action` in `.dropdown-menu__item`
* Updated docs

### Icons
* The icons component imports css for `.chefkoch-icons`
* Example code is updated

### Links
* Target links should be replace with Teaser link for new Cards and Teaser
#### Deprecations:
* Classes `.ds-tarket-link`, `.ds-mb` and mixin `ds-target-link`. Please use `.ds-teaser-link`.

### Teaser Link
* New component with hover behaviour for Links containing images and headlines (e.g. Recipe Card)

### Typography Utilities
* Added class `.ds-text-semi-bold`
