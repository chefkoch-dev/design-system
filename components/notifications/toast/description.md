Mit Hilfe von Toasts können notifications angezeigt werden.

### Usage  

Das DSY dient an dieser Stelle nur zum stylen des Toasts und übernimmt neben der Animation auch keine 
Positionierung. Damit der Toast auch als Toast funktioniert und beispielsweise unten links angeordnet werden soll, muss ein äußerer Container gebaut werden und 
folgende Spezifikationen vorgenommen werden:
```
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0 16px;;

```
```
    Via Shortlink
    @import "~chefkoch-design-system/components/toast";
    
    Original Location
    @import "~chefkoch-design-system/app/components/notifications/toast";
  
