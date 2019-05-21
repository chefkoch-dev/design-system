### Usage  
    
    Enthalten in
    @import "~chefkoch-design-system/components/flexbox-grid";

### Grundsätzlicher Seitenaufbau &bdquo;Oh so flexible!&rdquo;
Chefkoch verwendet im grundsätzlichen Seitenaufbau (innerhalb von `.ds-container`) nicht das Grid an sich sondern floated nach links. Deshalb wird an dieser Stelle auch nicht die Klasse `.ds-grid` gesetzt.  
Content Elemente floaten nach links, Kontext Elemente orientieren sich nach rechts. So können Kontext Elemente oder Ads für die mobilen Ansichten zwischen den Content Elementen stehen und dennoch auf der Desktop Ansicht rechts oben an der Seite. Ganz à la mobile first.

Dies wird durch die altbewährte Technik __float + margin__ erreicht. Hier ein Beispiel:  
Content Elemente bekommen neben der Grid-Klasse `.ds-col-m-8` auch die Klasse `.ds-grid-float`, welches ein `float: left` setzt. Kontext Elemente bekommen mit der Grid-Klasse `.ds-col-m-off-8` eine entsprechend große `margin-left` und 
werden nach rechts gedrückt. Damit hat das Content Element genügend Platz, um links daneben zu floaten.

### Floats first!
Das Content Element, welches zuerst zu sehen sein soll, sollte nicht nur aus UX, SEO & Screenreader Sicht als erstes stehen, sondern auch wegen dem Float. Elemente die floaten sorgen dafür, dass kleinere Elemente neben ihnen stehen, sofern ausreichend Platz vorhanden ist.

### Klingt kompliziert? Nah, alles gut.

#### &bdquo;Hilfe, das Grid funktioniert nicht.&rdquo;
Wird im HTML ein Kontext Element (welches standardmäßig nicht floated) als aller erstes, also __vor__ das erste floatende Content Element gesetzt, wird aufgrund seiner `margin-left` die __gesamte Breite__ des Containers von diesem Element beansprucht. Das hat zur Folge, dass das Content-Element nicht daneben floaten kann und erst darunter positioniert wird.

#### &bdquo;Ich will das aber so.&rdquo;
Okay. Importiere einfach zusätzlich folgende Styles
    
    Via Shortlink
    @import "~chefkoch-design-system/components/flexbox-grid-rebel";
    
    Original Location
    @import "~chefkoch-design-system/app/components/grid/flexbox-grid-rebel";

setze auf dieses einzelne Kontext Element folgendes Klasse: `.ds-grid-rebel` und entferne die Offset-Klasse.  
Um alle eventualitäten auszuschließen, gib dem nächsten Kontext Element die Klasse `.ds-grid-rebel-sibling`.

#### &bdquo;Ich will aber gar nicht floaten.&rdquo;
Kein Problem. Machs wie oben im Beispiel unter Grid Base und setze einfach die Klasse `.ds-grid` unmittelbar nach oder auf denselben Container mit `.ds-container`. Beachte hierbei aber, dass du deine Elemente linear im HTML stehen haben musst. 

#### &bdquo;Ich will floaten, aber nicht alles.&rdquo;
Dafür kannst du die Klasse `.ds-clear` auf das nächste Element setzen. Damit wird das Floaten neutralisiert und du kannst linear weitermachen.

