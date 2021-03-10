Die Pagination besteht aus verlinkten vor- und zurück Pfeilen und Seitennummern.  

### Aufbau 
- Innerhalb der Pfeile werden immer maximal 6 Slots vergeben.  
- Bis zur aktiven 4. Seite sind alle Slots mit Seitennummern befüllt.  
- Ab Seite 5 wird der zweite Slot für die Zusammenfassung von Seiten genutzt. Der erste Slot bleibt immer Seite 1. Die übrigen vier Slots werden mit den folgenden Seitennummern aufgefüllt, wobei die aktive Seite (aktives item) immer mittig steht.  
- Die letzte Seite wird nicht angezeigt.

### Aktives Item  
- Das aktive Item wird rund mit Hintergrund in `$color-corporate-green` und Schriftfarbe `$color-text-inverted` dargestellt. 
- Bei :hover / :focus ändert sich der Hintergrund zu `$color-corporate-green-dark`.

### Standard Item  
- Seitennummern Links werden als Text only in der Farbe `$color-corporate-green-dark` dargestellt. 
- Bei :hover / :focus färbt sich der Text zu `$color-text-inverted` und bekommt einen runden Hintergrund in der Farbe `$color-corporate-green-dark`.

### Pfeile
- Pfeile werden standardmäßig als Icon only in der Farbe `$color-corporate-green-dark` dargestellt. 
- Bei :hover / :focus färbt sich das Icon zu `$color-text-inverted` und bekommt einen runden Hintergrund in der Farbe `$color-corporate-green-dark`. 
- Ist Seite 1 aktiv, ist der zurück-Pfeil inaktiv. 
- Ist die letzte Seite aktiv, wird der vor-Pfeil inaktiv. 
- Inaktive Pfeile sind nicht verlinkt und werden in `$color-grey-light` dargestellt.
