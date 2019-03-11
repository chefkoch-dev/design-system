### Usage  
    
    Via Shortlink
    @import "~chefkoch-design-system/components/text-truncation-utilities";
    
    Original Location
    @import "~chefkoch-design-system/app/components/utilities/text-truncation-utilities";

Es sollte auf dem zu beschneidenden Element immer die Klasse `.ds-trunc` gesetzt werden. Um zu spezifizieren, auf wieviele Zeilen begrenzt wird, sollte noch zusätzlich die Klasse `.ds-trunc-<anzahl_der_zeilen>` (z.B. `.ds-trunc-2`) gesetzt werden. Aktuell werden maximal drei Zeilen unterstützt.


### Einschränkungen

Leider ist multiline-truncation von den Browserherstellern ein stiefmütterlich behandeltes Thema. Es gab eine Implementierung, die auf einem alten Flexbox-Modell fußt. Diese verwenden wir hier. Das bedeutet, dass es [nicht in allen Browsern funktioniert](https://caniuse.com/#feat=css-line-clamp) (z.B. Firefox). Um weitere Probleme zu minimieren, sollte diese Klasse vom Browser möglichst spät ausgewertet werden (d.h. sollte möglichst spät im CSS auftauchen).

