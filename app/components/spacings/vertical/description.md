Die kleinste Einheit für vertikale Spacings beträgt `4px`. Das Spacingsystem definiert Variablen in der Form `$v-spacing-{size}`. `size` steht dabei für die Größe. Intern entspricht dies einem Multiplikator mit dem die Basis-Einheit multipliziert wird. Aktuell definiert das Design System die unten angegebenen Abstände, die sich aus der Multiplikation ergeben. Damit kann `size` die Werte `0,1,2,4,6,8,12,16` annehmen. 

Es ist ebenso möglich auf die Werte über die Sass map `$v-spacings` per `map-get()` zuzugreifen.

Darüberhinaus steht das Mixin ``@mixin v-spacer($attr, $size, $important: false)`` zur Verfügung, um die Erstellung von Attributen zu vereinfachen, die vertikale Spacings verwenden.  
Wobei `$attr` den Name das CSS Attributs und `$size` einen Wert aus der o.a. Liste von Multiplier darstellt. Der optionale Parameter `$important` gibt an, ob der Regel `!important` hinzugefügt werden soll.

Beispielsweise generiert folgender Code

```
@include v-spacer('margin-bottom', 1);
```

folgendes CSS:

```
margin-bottom: 4px;
```

Folgene Tabelle zeigt die verfügbaren Abstände und ihre dazugehörigen Variablen.