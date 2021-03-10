*since v12.3.0*

Das Verhalten der Elemenete innerhalb von List View Items wird anhang von Media Queries bestimmt. Innerhalb von Modalen/Dialogen hat man jedoch meist weniger Platz. Hier treten die Media Queries an ihre Grenzen, da sich ihre Definition an anderen Containerbreiten oritientiert. Dialoge sind jedoch in der Regel schmaler, als für die jeweilige Media Query definiert. Element oder Container queries wären hier wünschenswert. Da diese jedoch nicht ohne Einsatz von Javascript bereitgestellt werden können, wird durch eine zusäztliche Modifierklasse `.ds-list-view-item--dialog` das Verhalten der List View Items innerhalb Dialogen für Sammlungskacheln und Rezeptlisten (in zukfünftiger Version) definiert. 

### Usage  
    
    Via Shortlink 
    @import "~chefkoch-design-system/components/list-view-item-dialog";
    
    Original Location
    @import "~chefkoch-design-system/app/components/list-view-item/list-view-item-dialog";