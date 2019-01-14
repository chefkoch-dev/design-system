Recipe Meta ist eine Komponente bezogen auf ein Rezept und steht in Kombination mit der Rezept Headline, den Rating Stars und dem Ausschnitt des Rezepttexts.
Inhalte dieser Komponente sind die Zubereitungszeit, der Schwierigkeitsgrad und das Erstelldatum innerhalb eines `<small>`-Tags.

- Die Formatierung der Texte ist vorgegeben. Beispielsweise "min." oder die Bezeichnungen "einfach", "normal" und "pfiffig".
- Die Text-/Iconfarbe ist vorgegeben `$color-grey-dark`.
- Die Textgröße kann je nach Einsatz zwischen 12 und 16px variieren und wird im Projekt entsprechend gesetzt.
- Bei den Icons handelt es sich um funktionale Icons, demnach kommen diese aus der gewählten Iconfont. Zubereitungszeit: `access_time`, Schwierigkeitsgrad: `signal_cellular_alt` (um 90° gedreht), Datum: `date_range`.
- Die größe der Icons ist vorgegeben.
- Das Datumsformat für Tag und Monat ist vorgegeben. Die Jahresangabe kann bei zu wenig Platz im Viewport komplett wegfallen oder auf die letzten 2 Ziffern verkürzt werden.

__NOTE:__ Es dürfen in dieser Komponente, nur jene Icons und Bezeichnungen verwendet werden, die hier dokumentiert sind. 

__Usage__  
    
    Via Shortlink
    @import "~chefkoch-design-system/components/recipe-meta";
    
    Original Location
    @import "~chefkoch-design-system/app/components/recipe/recipe-meta";

