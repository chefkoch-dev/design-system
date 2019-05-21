Hat man mehrere Buttons, welche in einer Zeile stehen sollen, oder auch nur einen, der rechtsbündig sein soll, gibt es dafür die `.ds-btn-box` als Wrapper. 
Die Buttons in einer `.ds-btn-box` sind standardmäßig mittels `justify-content: flex-end;` rechtsbündig ausgerichtet.  

Horizontaler Abstand wird geliefert. Für eventuellen vertikalen Abstand (nach unten) muss dieser im Projekt individuell für den entsprechenden Button im entsprechenden Viewport gesetzt werden, die dies sehr stark von der Textlänge des Buttons abhängt.

⚠️ Es wird __nicht__ empfohlen, einen einzelnen Button manuell mit `display: flex;` und `justify-content: flex-end` rechtsbündig zu setzen. Dies führt dazu, dass die gesamte Breite des parents als Buttonfläche fungiert und man Flächen hovert, die optisch nicht zum Button gehören.

### Usage  
    
    Enthalten in der Basis für Buttons
    @import "~chefkoch-design-system/components/button";
