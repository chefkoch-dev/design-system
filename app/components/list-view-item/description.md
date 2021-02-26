*since v11.0.0*

Neben der Kacheldarstellung (siehe z.B. [Recipe Card](#group-recipe-card)) werden Rezepte oder Sammlungen auch als Listenelemente dargestellt.

Dieses Element ist unterteilt in drei Haupteelemente `.ds-list-view-item__media`, `.ds-list-view-item__body` und `.ds-list-view-item__action`. Das Element mit der Klasse `.ds-list-view-item__body` enthält ein oder zwei Spalten (ausgezeichnet durch die Klasse `.ds-list-view-item__column`). 

Die Höhe des Listenelements hängt vom Seitenverhältnis des Bildes ab. Bei Rezeptlisten beträgt dieses Verhältnis 4:3. Bei Sammlungslisten 16:9.

Für einen Hovereffekt auf dem Listenelement kann die Modifierklasse `.ds-list-view-item--hover-bg` hinzugefügt werden.

Für ein List View Item muss die Basis-Komponente und die gewünschte Variante (Rezept und/oder Sammlung) importiert werden.

    Via Shortlink
    @import "~chefkoch-design-system/components/list-view-item";
    
    Original Location
    @import "~chefkoch-design-system/app/components/list-view-item/list-view-item";

    Dependencies
    @import "~chefkoch-design-system/components/dsy-base";
    @import "~chefkoch-design-system/components/button";
    @import "~chefkoch-design-system/components/color-utilities";
    @import "~chefkoch-design-system/components/dropdown-menu";
    @import "~chefkoch-design-system/components/icons";
    @import "~chefkoch-design-system/components/teaser-link";
    @import "~chefkoch-design-system/components/recipe-note";
    @import "~chefkoch-design-system/components/recipe-info";
    @import "~chefkoch-design-system/components/text-truncation-utilities";