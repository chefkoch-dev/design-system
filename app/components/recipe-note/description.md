*since v11.0.0*

Recipe Note zum Darstellen einer Rezept Notiz. 

Die Logik zum Ein- und Ausklappen muss hinzugefügt werden, indem die Klassen für die Textkürzung (`.ds-trunc` in Verbindung mit z.B. `.ds-trunc-3`) hinzugefügt bzw. entfernt werden.

### Usage
    
    Via Shortlink
    @import "~chefkoch-design-system/components/recipe-note";
  
    Original Location
    @import "~chefkoch-design-system/app/components/recipe-note/recipe-note";

    Dependencies
    @import "~chefkoch-design-system/components/dsy-base";
    @import "~chefkoch-design-system/components/icons";

    Dependecies for truncated text
    @import "~chefkoch-design-system/components/text-truncation-utilities" (wenn Text truncated dargestellt werden soll)
