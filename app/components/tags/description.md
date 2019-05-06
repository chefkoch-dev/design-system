Tags können entweder als Link fungieren oder als Filter des Contents. 

### Darstellung & Code
Sie können als Liste in der Kontextspalte oder als (AMP-)Carousel im Content dargestellt werden.

⚠ Die Tags bedienen sich per `@extend` der Styles der ds-utility Klasse `.ds-list-plain`. Bei der Darstellung als Liste statt Carousel werden zusätzlich die Styles der ds-utility Klasse `.ds-list-cloud` hinzugefügt. Daher ist es notwendig, die entsprechenden List Utilities im Projekt zu importieren. Siehe [List Utilities](/#group-utilities-component-list-utilities).

#### Liste
Die Darstellung als Liste erfordert im Code den Aufbau einer Liste mittels `<ul class="ds-tags">` & `<li>`. Darin befinden sich die einzelnen Tags als `<a class="ds-tag" ...>`.

#### Carousel 
Die Darstellung als Carousel benötigt auf dem Elterncontainer zusätzlich die Klasse `.ds-tags-carousel`, also `<amp-carousel class="ds-tags-carousel" ...>`, bzw. `<div class="ds-tags-carousel" ...>` bei nicht-AMP Modulaufbau.

### Styles
- Basis Styling: Hintergrundfarbe `$background-white`, Schriftfarbe `$color-text` und eine 1px border `$color-corporate-green`. 
- active Zustand: Border-Color `$color-corporate-green`, Schriftfarbe `$color-text-inverted`.
- hover/focus Zustand: Hintergrundfarbe und die Border-Color `$color-corporate-green-dark`, Schriftfarbe `$color-text-inverted`.
- Unabhängig von der Platzierung (Content oder Kontext) ist die Schriftgröße immer 14px.
- Die Höhe der Tags ist festgelegt auf 32px inkl. Border. 
- Abstände zwischen den Tags (horizontal & vertikal) sind eine `$unit`.

F 14px / H 32px / M 8    

<small>F: Fontsize / H: Height / M: Margin</small>

### Usage  
    
    Via Shortlink
    @import "~chefkoch-design-system/components/tags";
    
    Original Location
    @import "~chefkoch-design-system/app/components/tags/tags";
    
    ⚠ Dependencies
    List-Utilities
    @import "~chefkoch-design-system/components/list-utilities
