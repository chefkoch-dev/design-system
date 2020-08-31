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
Styling of seccondary button changed. It exists a new class ".ds-btn-secondary--active" in order to stay in active mode.
This can be used if the button triggers a dropdown menu and has to stay in active mode for a short time.