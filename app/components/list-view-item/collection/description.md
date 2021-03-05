*since v12.0.0*

Das Sammlungslistenelement benötigt die Modifierklasse `.ds-list-view-item--collection`. Diese Klasse bestimmt die Höhe des Listenelement abhängit vom Seitenverhältnis des Sammlungsbildes (16:9).

Optional ist die Spalte, welche die Beschreibung enthält. Ist die Beschreibung vorhanden, so verläuft diese über maximal 3 Zeilen. Bei einer Bildschirmbreite von weniger als 1196px, wird nur maximal eine Zeile angezeigt. Unter 600px wird die Bescheibung nicht angezeigt.
Die Logik zum Auf- und Einklappen muss explizit hinzugefügt werden (siehe dazu auch [Recipe Card / Kochbuch](group-recipe-card-component-cookbook)).


### Usage  
    
    Via Shortlink 
    @import "~chefkoch-design-system/components/list-view-item-collection";
    
    Original Location
    @import "~chefkoch-design-system/app/components/list-view-item/list-view-item-collection";