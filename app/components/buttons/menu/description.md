*since v10.0.0*

__⚠️ NEEDS DESCRIPTION__

Buttons, die vor allem In Navigation oder Menüs verwendet werden erhalten eine zusätliche Farbgebung. Diese Buttons haben lediglich ein Icon und unterscheiden sich im Gegensatz zu regulären Buttons, die nur ein Icon haben (siehe z.B [Primary Button Icon Only](#group-buttons-component-primary)), durch Ihre Größe (40px x 40px vs 44px x 44px).

### Modifier
* `.ds-btn--dual-color` in Verbindung mit `.ds-btn--round`  und `.ds-btn--size-s`

### Darstellungsformen
Menü Buttons werden nur als Icon Buttons verwendet. Ein Label ist nicht vorgesehen

### Active
Um ein Button als aktiv (z.B. für die Darstellung eines aktiven Menüpunktes) zu kennzeichnen wird die State Klasse `.ds-is-active` dem Button hinzugefügt.
### Disabled
Der Button erhält das Styling für disabled per `disabled` Attribut. Explizit kann der Style durch die State-Klasse `.ds-is-disabled` erzeugt werden.

### Usage  
    
    Via Shortlink 
    @import "~chefkoch-design-system/components/button-icon";
    
    Original Location
    @import "~chefkoch-design-system/app/components/buttons/button-menu";
