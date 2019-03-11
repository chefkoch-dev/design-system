Die Pagination besteht aus verlinkten vor- und zurück Pfeilen und Seitennummern.  

### Aufbau 
- Innerhalb der Pfeile werden immer maximal 6 Slots vergeben.  
- Bis zur aktiven 4. Seite sind alle Slots mit Seitennummern befüllt.  
- Ab Seite 5 wird der zweite Slot für die Zusammenfassung von Seiten genutzt. Der erste Slot bleibt immer Seite 1. Die übrigen vier Slots werden mit den folgenden Seitennummern aufgefüllt, wobei die aktive Seite (aktives item) immer mittig steht.  
- Die letzte Seite wird nicht angezeigt.

### Aktives Item  
- Im Beispiel ist die aktive Seite die Seite 1. Dieser Link wird rund mit Hintergrund `$color-corporate-green` und Schriftfarbe `$color-white` dargestellt. 
- Bei :hover / :focus ändert sich der Hintergrund zu `$color-corporate-green-dark`.

### Standard Item  
- Seitennummern Links werden als Text only in der Farbe `$color-grey-medium` dargestellt. 
- Bei :hover / :focus färbt sich der Text zu `$color-corporate-green-dark` und bekommt eine underline.

### Pfeile
- Pfeile werden standardmäßig als Icon only in der Farbe `$color-grey-medium` dargestellt. 
- Bei :hover / :focus bekommt dieser einen runden Hintergrund, welcher sich einfärbt in `$color-corporate-green-dark`. Die Iconfarbe wird dann `$color-white`.  
- Ist Seite 1 aktiv, ist der zurück-Pfeil inaktiv. 
- Ist die letzte Seite aktiv, wird der vor-Pfeil inaktiv. 
- Inaktive Pfeile sind nicht verlinkt und werden in `$color-grey-light` dargestellt.
