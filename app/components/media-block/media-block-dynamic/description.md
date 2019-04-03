Sofern sich die Ausrichtung jedoch __bei einem Breakpoint verändern soll__, stehen für diesen Zweck __@mixins__ bereit, welche auf `.ds-mb` geschrieben werden:

Horizontale Ausrichtung:
- `@include ds-fd-row;`
- `@include ds-mb-padding("left", $unitMultiplier);`

Vertikale Ausrichtung:
- `@include ds-fd-col;`
- `@include ds-mb-padding("top", $unitMultiplier);`

Das Mixin `ds-fd-row` schreibt flex-direction: row; und equivalent dazu schreibt das Mixin `ds-fd-col` flex-direction:column; auf das Modul.  
Das Mixin `ds-mb-padding` regelt den Abstand zwischen den Kindern.  
Die Bezeichnungen `"top"` und `"left"` bestimmen die Position. Der Wert `$unitMultiplier` gibt an, mit welchem Multiplikator unsere `$unit` multipliziert wird.  
Beispiel: 1, 1.5, 2

