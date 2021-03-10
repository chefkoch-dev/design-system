Mit Hilfe von Action-Menus lassen sich Aktionen wie beispielsweise im Kochbuch das Verschieben von Rezepten ausführen.

### Info
Dieses Action Menu ist noch nicht voll funktionsfähig. Es bietet lediglich eine styling Grundlage für
Action-Menus. Die Funktionen des Action Menus, d.h. Animationen, Öffnen & Schließen sind nicht Teil des DSY.

### Icons
Im Action Menu verwenden wir Material Icons.


### Usage  
Bei Verwendung des Action Menus kann alles ab der Klasse "ds-action-menu" aus dem Codebeispiel kopiert werden und mit den entsprechenden
Daten ausgetauscht werden. Um "ds-action-menu" herum muss dann ein eigener Wrapper mit Animation gebaut werden. In Vue Applikationen verwenden 
wir das transition Tag. In Kombination zu dem Wrapper kann das "ds-action-menu" dann zum Beispiel um folgende Styles ergänzt werden, damit
das Action-Menu als Overlay dargestellt wird:
``
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000002;
``  
    Wichtig dabei zu beachten ist, dass Overlays ergal wechler Art möglichst weit oben liegen müssen im DOM, damit andere Styles (css "transform" ist immer ein beliebter Kandidat)
    das Overlay nicht kaputt machen bzw. überdecken.
    
    
    Via Shortlink
    @import "~chefkoch-design-system/components/action-menu";
    
    Original Location
    @import "~chefkoch-design-system/app/components/menu/action-menu";
  
