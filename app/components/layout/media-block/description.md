Das Modul Media-Block setzt sich zusammen aus einem Eltern-Block, und zwei Kind-Blöcken. 

Die Standard Nutzung für dieses Modul ist immer dann, wenn zum Beispiel ein grafisches Element neben einem Schriftlichen steht. Die Kombination dieser beiden Elementarten ist Voraussetzung für die Nutzung dieses Moduls.  

Ein Media-Block muss nicht zwingend horizontal ausgerichtet sein. Es kann auch vertikal ausgerichtet werden. Beispielsweise, wenn sich das Modul auf mobiler Ansicht anders verhält als in der Desktop Ansicht.

Das Media-Block Modul kann auch geschachtelt werden. So kann neben einem grafischen Element auch ein weiteres Media-Block Modul verwendet werden. Beispiel hierfür ist die klassische Kommentaransicht.

Hierzu ein paar gute Artikel  
- [Save hundreds of lines of code - Nicole Sullivan](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)
- [Beispiele - Philip Walton](https://philipwalton.github.io/solved-by-flexbox/demos/media-object/)  
- [Bootstrap 4 Dokumentation](https://getbootstrap.com/docs/4.0/layout/media-object/)

### Code  

Die Breite des Moduls ist abhängig von den Gridklassen des Elternelementes oder seiner eigenen Gridklassen.

Um das AMP CSS-Budget im Vorfeld nicht unnötig zu strapazieren, wird hier auf dynamisches standard styling verzichtet.  
Folgende Styles sind demnach im Projekt selbst zu definieren:
- `width` muss bei horizontaler Ausrichtung immer jeweils für `.ds-mb-left` und `.ds-mb-right` definiert werden. Empfehlung: in %.  
Die Breite von `.ds-mb-right` inkludiert den vordefinierten Abstand zwischen den beiden Kindern.
- Bei vertikaler Ausrichtung bestimmen die Gridklassen des/der Elternelement/e die Breite. Die Kinder sind demnach standardmäßig 100% breit.

### Statisch

Wenn die Ausrichtung des Moduls __breakpointübergreifend gleich__ bleibt, können folgende Klassen auf `.ds-mb` hinzugefügt werden. Der Abstand (padding) zwischen den beiden Kindern ist dann bereits gegeben.
- `.ds-mb-row` (horizontal)
- `.ds-mb-col` (vertikal)

### Dynamisch

Sofern sich die Ausrichtung jedoch __bei einem Breakpoint verändern soll__, stehen für diesen Zweck __@mixins__ bereit, welche auf `.ds-mb` geschrieben werden:

Horizontale Ausrichtung:
- `@include ds-fd-row;`
- `@include ds-mb-padding("left", $unitMultiplier);`

Vertikale Ausrichtung:
- `@include ds-fd-col;`
- `@include ds-mb-padding("top", $unitMultiplier);`


Das Mixin `ds-fd-row` schreibt flex-direction: row; und equivalent dazu schreibt das Mixin `ds-fd-col` flex-direction:column; auf das Modul.  
Das Mixin `ds-mb-padding` regelt den Abstand zwischen den Kindern.  
Die Bezeichnungen `"top"` und `"left"` bestimmen die Position. Der Wert `$unitMultiplier` gibt an, mit welchem Multiplikator unsere `$unit` multipliziert wird. Beispiel: 1, 1.5, 2

### Design

Das Media-Block Modul bietet an sich nur eine Basis. Es kann visuell modifiziert werden. Beispielsweise kann auf `.ds-mb` border, background und padding definiert werden.  
Siehe dazu weiter unten ein Beispiel

### Usage  
    
    Via Shortlink
    @import "~chefkoch-design-system/components/media-block";
    
    Original Location
    @import "~chefkoch-design-system/app/components/layout/media-block";

