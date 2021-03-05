*since v11.0.0*

Text Toggle zum Darstellen einer Rezept Notiz oder Sammlungsbeschreibung. 

Die Logik zum Ein- und Ausklappen muss hinzugefügt werden, indem die Klassen für die Textkürzung (`.ds-trunc` in Verbindung mit z.B. `.ds-trunc-3`) hinzugefügt bzw. entfernt werden.

### Usage
    
    Via Shortlink
    @import "~chefkoch-design-system/components/text-toggle";
  
    Original Location
    @import "~chefkoch-design-system/app/components/text-toggle/text-toggle";

    Dependencies
    @import "~chefkoch-design-system/components/dsy-base";
    @import "~chefkoch-design-system/components/icons";

    Dependecies for truncated text
    @import "~chefkoch-design-system/components/text-truncation-utilities" (wenn Text truncated dargestellt werden soll)
