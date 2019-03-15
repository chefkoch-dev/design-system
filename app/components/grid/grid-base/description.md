- Das Grid besteht aus 12 Columns, 2 Seitenmargins und 11 Gutter, die sich gemäß der [Viewports Tabelle](#group-breakpoints-component-viewports) verhalten.  
- 12 Columns sind eine optimale Anzahl an Spalten, um größtmögliche Flexibilität zu gewärleisten. 
- Während der Content für mobile Viewports alle 12 columns beansprucht, kann ab der m-View eine Aufteilung von bspw. 8:4 stattfinden (8 columns Contentbereich, 4 columns Kontextbereich).

### Benutzung von xs, s und m 
<small>Stand 3/2019</small>  

Dadurch, dass wir verschiedene Gutter außerhalb und zwischen den Columns haben, ist es leider notwendig mindestens die grid-Klassen (col-xs und col-m) auf die entsprechenden container zu schreiben; auch wenn sich das Verhältnis der columns ansonsten nicht ändert.

Beispiel: immer volle Breite

- ![do](./app/images/yes.svg) DO: `<div class="ds-col-xs-12 ds-col-m-12">`  
- ![don't](./app/images/no.svg) DON'T `<div class="ds-col-xs-12">`

### Float

#### Grundsätzlicher Seitenaufbau &bdquo;Oh so flexible!&rdquo;
Chefkoch verwendet im grundsätzlichen Seitenaufbau (innerhalb von `.ds-container`) nicht das Grid an sich sondern floated nach links. Deshalb wird an dieser Stelle auch nicht die Klasse `.ds-grid` gesetzt.  
Content Elemente floaten nach links, Kontext Elemente orientieren sich nach rechts. So können Kontext Elemente oder Ads für die mobilen Ansichten zwischen den Content Elementen stehen und dennoch auf der Desktop Ansicht rechts oben an der Seite. Ganz à la mobile first.

Dies wird durch die altbewährte Technik __float + margin__ erreicht. Hier ein Beispiel:  
Content Elemente bekommen neben der Grid-Klasse `.ds-col-m-8` auch ein `float: left`, welches im Projekt selbst definiert wird. Kontext Elemente bekommen mit der Grid-Klasse `.ds-col-m-off-8` eine entsprechend große `margin-left` und werden nach rechts gedrückt. Damit hat das Content Element genügend Platz, um links daneben zu floaten.

#### Floats first!
Das Content Element, welches zuerst zu sehen sein soll, sollte nicht nur aus UX, SEO & Screenreader Sicht als erstes stehen, sondern auch wegen dem Float. Elemente die floaten sorgen dafür, dass kleinere Elemente neben ihnen stehen, sofern ausreichend Platz vorhanden ist.

#### &bdquo;Hilfe, das Grid funktioniert nicht.&rdquo;
Wird im HTML ein Kontext Element (welches standardmäßig nicht floated) als aller erstes, also __vor__ das erste floatende Content Element gesetzt, wird aufgrund seiner `margin-left` die __gesamte Breite__ des Containers von diesem Element beansprucht. Das hat zur Folge, dass das Content-Element nicht daneben floaten kann und erst darunter positioniert wird.

#### &bdquo;Ich will das aber so.&rdquo;
Okay. Setze auf dieses einzelne Kontext Element folgendes CSS: `float: right;` und entferne die Offset-Klasse. Boom! **micdrop*

#### &bdquo;Ich will aber gar nicht floaten.&rdquo;
Kein Problem. Setze einfach die Klasse `.ds-grid` unmittelbar nach oder auf denselben Container mit `.ds-container`. Beachte hierbei aber, dass du deine Elemente linear im HTML stehen haben musst. 

