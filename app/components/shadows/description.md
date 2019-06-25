Mit Shadows markieren wir Elemente, mit denen der User interagieren kann. Beispiele hierfür sind z.B. Buttons & Cards.  

Wir unterscheiden dabei drei states:
- resting (base styles)
- lifted (:hover & :focus)
- pressed (:active)

Die Basisfarbe für shadows ist `$color-shadow-base` (schwarz), deren Opazität über den Alpha Kanal geregelt wird.  
Der shadow an sich verläuft immer komplett um das Element herum. Die Position des shadows ist daher sowohl im Design als auch im Code `0 0` (0 vertikale Achse, 0 horizontale Achse). Es wird lediglich das Blurring und ggf. die Opazität modifiziert.

### Usage

    Enthalten in  
    Modul Button, file: "~chefkoch-design-system/components/buttons/_settings.button";
    Modul Card, file: "~chefkoch-design-system/components/card/_settings.card"
    Module in Social-Media, file: "~chefkoch-design-system/components/social-media/_settings.social-media";
    
    Original Location
    @import "~chefkoch-design-system/app/components/shadows/box-shadow";


### Code  
Das DSY bietet mixins an, welches resting, lifted und pressed state abdecken. Die Variablen stehen für opacity Werte (0–1).
- __Für verlinkte Elemente__  
`@mixin ds-box-shadow($opacityResting, $opacityLifted)` 

- __Für Icons IN verlnkten Elementen__  
Wird auf den Eltern-Link geschrieben  
`@mixin ds-icon-shadow($opacityResting, $opacityLifted)`

#### Resting state  
`$opacityResting` beschreibt die Opazität der Farbe im _resting_ state. Fixwert ist `0.3`, kann aber nach Material Design Regeln angepasst werden. Das dazugehörige Blurring ist auf `2px` festgelegt.  

#### Lifted state
`$opacityLifted` beschreibt die Opazität der Farbe im _lifted_ state und kann ebenfalls variiert werden, Fixwert ist `0.3`. Das Blurring ist auf `8px` festgelegt.

#### Standardimplementierung
`@include ds-[type]-shadow(0.3, 0.3);`

#### Pressed state
Im pressed state wird der shadow komplett weggenommen.
