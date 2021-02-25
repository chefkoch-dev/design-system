Das Rezeptlistenelement benötigt die Modifierklasse `.ds-list-view-item--recipe`. Diese Klasse bestimmt die Höhe des Listenelement abhängit vom Seitenverhältnis des Rezeptbildes (4:3).

Enthält das Rezept kein Bild, so wird dem Element mit der Klasse `.ds-list-view-item__image-wrap` die Klasse ` .ds-list-view-item__image-wrap--no-image` hinzugefügt. 

Optional ist die Spalte, welche die Notiz enthält. Ist die Notiz vorhanden, so verläuft diese über maximal 3 Zeilen. Bei einer Bildschirmbreite von weniger als 600px, wird nur maximal eine Zeile angezeigt. Die Logik zum Auf- und Einklappen muss explizit hinzugefügt werden (siehe dazu auch [Recipe Card / Kochbuch](group-recipe-card-component-cookbook)).