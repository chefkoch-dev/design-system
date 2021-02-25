*updated in v10.0.0*

Hat man mehrere Buttons, welche in einer Zeile stehen sollen, oder auch nur einen, der rechtsbündig sein soll, gibt es dafür die `.ds-btn-box` als Wrapper. 
Die Buttons in einer `.ds-btn-box` sind standardmäßig mittels `justify-content: flex-end;` rechtsbündig ausgerichtet.  

Horizontaler Abstand wird geliefert. Für eventuellen vertikalen Abstand (nach unten) muss dieser im Projekt individuell für den entsprechenden Button im entsprechenden Viewport gesetzt werden, die dies sehr stark von der Textlänge des Buttons abhängt.

Sollen zwei Buttons jeweils am äußeren Rand des Containers platziert werden, steht die Klasse `.ds-btn-box--space-between` zur Verfügung.
### Usage  
    
    Enthalten in der Basis für Buttons
    @import "~chefkoch-design-system/components/button";
