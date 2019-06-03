Mit `box-shadows` markieren wir Elemente, mit denen der User interagieren kann. Beispiele hierfür sind z.B. Buttons & Cards.  

Wir unterscheiden dabei drei states:
- resting (base styles)
- lifted (:hover & :focus)
- pressed (:active)

Die Basisfarbe für shadows ist `$color-shadow-base` (schwarz), deren Opazität über den Alpha Kanal geregelt wird.  
Der shadow an sich verläuft immer komplett um das Element herum, hat oben jedoch etwas weniger Itensität als unten. Die Position des shadows ist daher sowohl im Design als auch im Code `0 1px` (0 vertikale Achse, 1px horizontale Achse). Es wird lediglich das Blurring und die Opazität modifiziert.

### Usage

    Enthalten in  
    Modul Button, file: "~chefkoch-design-system/components/buttons/_settings.button";
    Modul Card, file: "~chefkoch-design-system/components/card/_settings.card"
    Module in Social-Media, file: "~chefkoch-design-system/components/social-media/_settings.social-media";
    
    Original Location
    @import "~chefkoch-design-system/app/components/shadows/box-shadow";


### Code  
Das DSY bietet ein mixin für an, welches resting, lifted und pressed state abdeckt. `@mixin box-shadow($opacityResting, $opacityLifted)`. Die Variablen stehen für opacity Werte (0–1)

- __Resting state__  
`$opacityResting` beschreibt die Opazität der Farbe im _resting_ state. Fixwert ist `0.3`, kann aber nach Material Design Regeln angepasst werden. Das dazugehörige Blurring ist auf `4px` festgelegt.  
- __Lifted state__  
`$opacityLifted` beschreibt die Opazität der Farbe im _lifted_ state und kann ebenfalls variiert werden, Fixwert ist `0.5`. Das Blurring ist auf `8px` festgelegt.
- Standardimplementierung wäre `@include ds-box-shadow(0.3, 0.5);`


- __Pressed state__  
Im pressed state wird der shadow komplett weggenommen.
