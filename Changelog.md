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

## V: 9.15.0 - 9.16.0

### Buttons
* Conversion Button added `.ds-btn-conversion`

## V: 9.16.0 - 9.16.1

### Teaser Link
* Fixed shortlink

## V: 9.16.1 - 9.16.2

### Recipe Card
* Docs and Markup are updated

## V: 9.16.2 - 9.16.3

### Include CK Icons
* Fix include of ck icons

## V: 9.16.3 - 9.16.4

### Safari Button and Dropdown Fix
* Fix ds-btn for Safari, needs margin: 0
* Adds modifier to DropdownMenu for use with bigger buttons

## V: 9.16.4 - 9.16.5

### Recipe Card
* Removes class `.ds-recipe-card-wrapper`, because wrapping elements should take care of correct margin-bottom.
* Updates markup examples without `.ds-recipe-card-wrapper`;

## V: 9.16.5 - 9.17.0

### Recipe Card
* Rename class `.ds-recipe-card__image` to `.ds-recipe-card__image-wrap`, because class `.ds-recipe-card__image` is now used on nested image.
* Move `.ds-teaser-link__image` class to img Tag holding class `.ds-recipe-card__image`

### Teaser Link
* Zoom effect on hover is applied to img tag holding the image, not background image anymore. Move class `.ds-recipe-teaser__image` to child element (e.g. an img tag)
* Adds class `.ds-teaser-link__image-wrap`. Use this class as container for image with class `.ds-recipe-teaser__image`.

## V: 9.17.0 - 9.17.1

Adds file `globals.scss` holding all relevant variables, mixins and functions of DSY. Import through `components/globals`.

## V: 9.17.1 - 9.17.2

Fixes a the problem, when recipe cards are used in a slider, absolute positioned buttons disappear while sliding.


## V: 9.17.2 - 9.18.0
### Recipe Card
* Introduces modifier class `.ds-recipe-card__action--transform` in order to apply transform fix introduced in 9.17.2

## V: 9.18.0 - 9.18.1
### Teaser Link
Optimises CSS in order to prevent wrong scaling when image dimension are set on img attribute

## V: 9.18.1 - 9.19.0
### Notification - Toast
Remove unnecessary container in toast and fix styling.

## V: 9.19.0 - 10.0.0

Version 10.0.0 contains major update to buttons and related styles
### General 
* Docs that need more description are marked with __⚠️ NEEDS DESCRIPTION__

### Recipe Card
* Replace `.ds-is-disabled` with `.ds-recipe-card__button--active` for setting `.ds-recipe-card__button` in active state

### Dropdown Menu
* Replace `.ds-is-hidden` with `.ds-dropdown-menu--hidden` for hiding dropdown menu

### Buttons
* Added:
  * Modifier class `.ds-btn-box--space-between` 
  * Styles for Tile Action List and Tile Action Card Buttons
  * Styles for menu buttons, using icon only
  * Component `app/component/buttons/buttons` and shortlink `component/buttons` for importing all buttons 

* Updated:
  * `.ds-btn-primary` is now called `.ds-btn--primary`
  * `.ds-btn-secondary` is now called `.ds-btn--secondary`
  * `.ds-btn-tertiary` is now called `.ds-btn--tertiary`
  * `.ds-btn-delete` is now called `.ds-btn--danger`
  * `.ds-btn-conversion` is now called `.ds-btn--conversion`
  * `.ds-btn-view-toggle` is now called `.ds-btn--view-toggle`, also related classes have been updated, please see markup for View Toggle button
  * `.ds-btn-tile-action` has to be replaced with `.ds-btn--tile .ds-btn--tile-action .ds-btn--fluid` 
  * `.ds-btn-secondary--soft` has been removed and needs to be replace with class `.ds-btn-secondary--soft`
  * `.ds-btn-icon` class has been removed, make sure to add class `.ds-btn__icon` to all icons within buttons and - depending of the position of the icon - add `.ds-btn__icon--leading` or `.ds-btn__icon--trailing` to the icon
  * `@mixin btn-base` is now named `@mixin btn`
  * Instead of `.ds-btn-secondary--active` use `.ds-btn--active`
  * component `components/tile-action-button` is now named `components/button-tile-action`
  * component `components/button-icon` has been removed, icons in buttons are styled as en element of the block class `.ds-btn`
  * `.ds-icon--icon-only` is renamed to `.ds-icon--round`
  * component `components/button-inactive` was removed, disabled styles are now part of the styles of each button, if you need to set disabled styling to a button, use class `.ds-btn--disabled`
  * Inline Forms in order to work with new buttons
  * Add class `.ds-btn__label` to all spans within Button `.ds-btn` holding labels

* Removed without replacement: 
  * `@mixin ds-btn-shadow`
  * class `.ds-btn-primary--mobile`
  * class `.ds-btn-secondary--mobile`
  * class `.ds-btn-tertiary--mobile`
  
## V: 10.0.0 - 10.0.1

### Buttons
* Sets line-height for `.ds-btn--flat` to a fixed value
* Better grid columns for tile button examples

## V: 10.0.1 - 10.0.2

### Buttons
* Add missing shortlink to button-danger
* Update changelog to version v10.0.0
* Distance between two buttons is 16px, not 8px

## V: 10.0.2 - 10.0.3

### Buttons
* Use correct styleing for `ds-btn--tile-card`

## V: 10.0.3 - 11.0.0
### Buttons
* Added
  * Added new Button `.ds-btn--action-menu` used in dropdown menu
### Dropdown Menu
Dropdown menu was refactored.

* Updated
  * The element that used class  `.ds-dropdown-menu` now uses class `.ds-dropdown-menu__actions-wrap`, please change this in your markup
  * Class `ds-dropdown-menu--button` has been renamed to `.ds-dropdown-menu__button`
  * Wrap `.ds-dropdown-menu__actions-wrap` and `.ds-dropdwon-menu__button` with one wrapping element using class `.ds-dropdown-menu`
  * Button for action menu has been refactored and now uses newly introduces button `.ds-btn--action-menu`. Please see example for classes to use. 
  * For menu opening to right and change of fill effect, please use class `.ds-dropdown-menu__actions-wrap--right`.

* Removed
  * Class `.ds-dropdown-menu--big-button`, please use `.ds-dropdown-menu__actions-wrap--big-button` on element with class `.ds-dropdown-menu__actions-wrap`
  * Class `.ds-dropdown-menu--hidden`, please use `.ds-dropdown-menu__actions-wrap--hidden` on element with class `.ds-dropdown-menu__actions-wrap`
  * Class `.ds-dropdown-menu--fill`, remove elements containing this class. Fill effect is handled with `:before` Pseudoselector
### List view Item
* This component is newly introduced (`.ds-list-view-item`) along with its representation for recipes lists (`.ds-list-view-item--recipe`)
* Docs and markup examples are added
### Recipe Badge
* Newly added component for recipe badge used in recipe card or recipe list item, e.g. for private Recipe (`.ds-recipe-badge`)
* Update any recipe card holding the private badge accordingly
### Recipe Note
* Newly added component for recipe note to be used in recipe card and recipe list items (`.ds-recipe-note`)
* Update any recipe-card holding recipe notes accordingly

### Recipe Card
* Updated
  * Please replace markup for recipe note with new component `.ds-recipe-note` (see example markup)
  * Please replace markup for recipe action button with new button `.ds-btn--action-menu`. 
* Removed
  * Class `.ds-recipe-card__button--active`
  * Class `.ds-recipe-card__note-icon`

## V: 11.0.0 - 12.0.0

### List view Item
* List item modifier for collections is new (`.ds-list-view-item--collection`) 
* Please see markup for implementation details
* Styles for recipe list view item are moved to seperate file. If using recipe list item, make sure to also import new component `components/list-view-item-recipe` along with `components/list-view-item`
* For background hover effect on a list view item, you have to explicitly set class `.ds-list-view-item--hover-bg`

### Text Toggle (former Recipe Note)
* Recipe Note has been renamed to a more generic name Text Toggle
* Replace all classes, modifiers and elements starting with `.ds-recipe-note` with `.ds-text-toggle`
* `components/recipe-note` was renamed to `components/text-toggle`
* `app/components/recipe-note/recipe-note` was renamed to `app/components/text-toggle/text-toggle`

## V: 12.0.0 - 12.1.0

### Collection Card
* Adds new component `.ds-collection-card`

### Teaser Link
* Adds `backface-visibility: hidden` to image element in order to avoid blurry images on zoom

## V: 12.1.0 - 12.2.0

### List view Item
* New class `.ds-list-view-item--hover-bg-from-m` for hover effect on desktop only
* Optimizations of spaces for mobile viewports for Recipes and Collections