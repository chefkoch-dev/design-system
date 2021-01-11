*since v9.11.0*

Responsive Utility Klassen für die Anwendung einheitlicher Spacings. 

FÜr die Anwendung vertikaler Spacings durch Margins oder Paddings stehen Utility Klasssen der Form ``.ds-{property}-{size}`` bzw. ``.ds-{property}-{breakpoint}-{size}`` bereit. ``{property}`` kann enthalten:

* ``mt`` - margin-top
* ``mb`` - margin-bottom
* ``mv`` - margin-top und margin-bottom
* ``pt`` - padding-top
* ``pb`` - padding-bottom
* ``pv`` - padding-top und padding-bottom

``{breakpoint}`` kann enthalten:

* ``xxs`` - ab 360px
* ``xs`` - ab 480px
* ``s`` - ab 600px
* ``m`` - ab 1196px

``{size}`` kann die Werte `0,1,2,4,6,8,12,16` enthalten. (siehe auch [Vertical Spacings](#group-spacings-component-vertical)).

Da diese Klassen die Variablen und Mixins aus der Spacings Komponente verwenden, muss die `spacings` Komponente im Projekt importiert werden.
### Usage  
    
    Via Shortlink
    @import "~chefkoch-design-system/components/spacing-utilities";
    
    Original Location
    @import "~chefkoch-design-system/app/components/utilities/spacing-utilities";

    ⚠ Dependencies
    Spacings
    @import "~chefkoch-design-system/components/spacings

<hr class="ds-hr" />
<br/>

Zieh dein Browserfenster groß und klein, um im nachfolgenden Beispiel die Veränderungen nachzuverfolgen