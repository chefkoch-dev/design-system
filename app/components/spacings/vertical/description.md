Die kleinste Einheit für vertikale Spacings beträgt `4px`. Das Spacingsystem definiert Variablen in der Form `$spacing-{multiplier}`. `multiplier` steht dabei für den Multiplikator mit dem die Basis-Einheit multipliziert wird. Dieser kann die Werte `1`, `2`, `4`, `6`, `8`, `12` und `16` annehmen. Es ist ebenso möglich auf die Werte über die map `$spacings` per `map-get()` zuzugreifen.

Darüberhinaus steht folgendes Mixin zur Verfügung, um die Erstellung von Attributen zu vereinfachen, die vertikale Spacings verwenden: ``@mixin v-spacer($attr, $m)``. Wobei `$attr` den Name das CSS Attributs und `$m` einen Wert aus der o.a. Liste von Multiplier darstellt. 

Beispielsweise generiert golgender Code

```
@include v-spacer('margin-bottom', 1);
```

den CSS Output:

```
margin-bottom: 4px;
```
