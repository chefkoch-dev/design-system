Mit Hilfe von Toasts können notifications angezeigt werden.

### Usage  

Das DSY dient an dieser Stelle nur zum stylen des Toasts und übernimmt neben der Animation auch keine 
"Overlay" Funktion. Damit der Toast auch als Toast funktioniert, müssen auf dem Container ".ds-notifications-toast--container" 
folgende Spezifikationen vorgenommen werden:
```
  position: fixed;
  z-index: <number>;

```
an ".ds-notifications-toast" muss folgendes hinzugefügt werden:   
```
    position: absolute;
```
    Via Shortlink
    @import "~chefkoch-design-system/components/toast";
    
    Original Location
    @import "~chefkoch-design-system/app/components/notifications/toast";
  
