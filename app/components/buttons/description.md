*updated in v10.0.0*

Buttons haben eine Höhe und Mindestbreite von 40px, um die Mindestanforderungen für Klickflächen auf mobilen Geräten zu gewärleisten. Buttons sollten _immer_ einzeilig sein. Ein Button wird mit der Basis-Klasse `.ds-btn` angelegt. Zusätzlich wird immer mindestens eine Modifierklasse benötigt.
Der Text der Buttons ist in einem `<span>` mit Klasse `.ds-btn__label` gewrapped. Icons werden mit der Klasse `.ds-btn__icon` versehen.

### Code  
Auch wenn Buttons mit Hilfe von der Klasse `.ds-btn` als `<button>`, `<a>` oder `<input type="button">` gebaut werden können, sollte semantisch immer die korrekte Auszeichnung verwendet werden. Die semantisch korrekte Auszeichnung ist `<button>`.

### Variationen
Folgende Modifierklassen verändern die Farbgebung der regulären Buttons:

* `.ds-btn--primary` (siehe [Primary](#group-buttons-component-primary))
* `.ds-btn--secondary` (siehe [Secondary](#group-buttons-component-secondary))
* `.ds-btn--tertiary` (siehe [Tertiary](#group-buttons-component-tertiary))
* `.ds-btn--conversion` (siehe [Conversion](#group-buttons-component-conversion))
* `.ds-btn--danger` (siehe [Danger](#group-buttons-component-danger))

Darüberhinaus gibt es Varianten von Buttons, die durch folgende Modifierklassen definiert sind:

* `.ds-btn--dual-color` immer in Verbindung mit `.ds-btn--circle` (siehe [Menü Buttons](#group-buttons-component-menu))
* `.ds-btn--tile` in Kombination mit `.ds-btn--tile-action`, `.ds-btn--tile-list` oder `.ds-btn--tile-card` (siehe [Tile Action Buttons](#group-buttons-component-tile-action))
* `.ds-btn--view-toggle` (siehe [View Toggle](#group-buttons-component-view-toggle))

### Verwendung einzelner Buttons 

Für jeden Button muss die Basis-Komponente und die gewünschte Variante importiert werden.

    Via Shortlink
    @import "~chefkoch-design-system/components/button";
    
    Original Location
    @import "~chefkoch-design-system/app/components/buttons/button";

### Verwendung aller Buttons

Ebenso kann man alle Buttons einmalig importieren. Hiermit ist der Import der Basisklasse nicht nötig:

    Via Shortlink
    @import "~chefkoch-design-system/components/buttons";
    
    Original Location
    @import "~chefkoch-design-system/app/components/buttons/buttons";

    Dependencies
    @import "~chefkoch-design-system/components/icons";