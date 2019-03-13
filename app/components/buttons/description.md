Buttons haben eine Höhe und Mindestbreite von 40px, um die Mindestanforderungen für Klickflächen auf mobilen Geräten zu gewärleisten. Buttons sollten _immer_ einzeilig sein.
Der Text der Buttons ist in einem `<span>` gewrapped.

### Code  
Auch wenn Buttons mit Hilfe von der Klasse `.ds-btn` als `<button>`, `<a>` oder `<input type="button">` gebaut werden können, sollte semantisch immer die korrekte Auszeichnung verwendet werden. Die semantisch korrekte Auszeichnung ist `<button>`.

### Usecases  
Buttons gibt es für mehrere usecases:
`primary`, `secondary` & `tertiary`

### Utilities  
#### Für alle Buttons:  
- `.ds-btn-icon` für Buttons mit Icon (siehe [Buttons/Icon Button](#group-buttons-component-icon))  
- `.ds-btn-inactive` setzt den Button inaktiv. (siehe [Buttons/Inaktiv/Deaktiviert](#group-buttons-component-deactivated))

### Styles  
Helvetica Neue Regular, allcaps  
F 14px / L 40px / M 16

### Usage (Basis für alle Button Varianten) 
    
    Via Shortlink
    @import "~chefkoch-design-system/components/button";
    
    Original Location
    @import "~chefkoch-design-system/app/components/buttons/settings.button";
