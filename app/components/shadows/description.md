Mit `box-shadows` markieren wir Elemente, mit denen der User interagieren kann. Beispiele hierfür sind z.B. Buttons & Cards.  

Wir unterscheiden dabei drei states:
- resting (base styles)
- lifted (:hover & :focus)
- pressed (:active)

Die Basisfarbe für shadows ist `$color-shadow-base` (schwarz), deren Itensität über den Alpha Kanal geregelt wird.  
Der shadow an sich verläuft immer komplett um das Element herum. Die Position des shadows ist daher sowohl im Design als auch im Code `0 0`. Es wird lediglich das Blurring modifiziert.

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
`$opacityResting` beschreibt die Itensität der Farbe im _resting_ state. Fixwert ist `0.2`, kann aber nach Material Design Regeln angepasst werden. Das dazugehörige Blurring ist auf `2px` festgelegt.
- __Lifted state__  
`$opacityLifted` beschreibt die Itensität der Farbe im _lifted_ state und kann ebenfalls variiert werden, Fixwerte sind `0.3` oder `0.5`. Das Blurring ist auf `8px` festgelegt.


- __Pressed state__  
Im pressed state wird der shadow komplett weggenommen.
