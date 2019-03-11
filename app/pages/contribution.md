# Contribution

Um das Design-System weiterentwickeln zu können, muss der grundsätzliche Aufbau erklärt werden.  

## Magic 8

Das normale und das baseline Grid und die CSS properties (Margins, Paddings, Heights, Font-Sizes, Line-Heights) orientieren sich an einer festgelegten Unit, die im Code als variable `$unit` referenziert wird.   
__[Diese Unit ist 8](https://mysticalnumbers.com/number-8/)__.  

Im Regelfall arbeiten wir bei den erwähnten Fällen, mit Multiplikatoren der Zahl 8.  
In Ausnahmefällen darf auch mal mit einer halben Unit (4) gearbeitet werden. Würden wir zum Beispiel bei Verwendung des Faktors 8 in einer Margin oder Font-Size das Baseline Grid brechen, darf hier zugunsten des Baseline-Grids auf einen Multiplikator von 4 zurückgegriffen werden. 

## HTML & Dokumentation

Dazu hier die [Astrum basic Doku](https://github.com/NoDivide/astrum).

## SCSS
    
Das SCSS für, zum Beispiel, die Buttons liegt im entsprechenden Ordner in dem auch das HTML und die Dokumentation liegt. So ist alles an einer Stelle.  
Nicht vergessen die neuen Styles in config/chefkoch-design-system.scss zu referenzieren.

    ⃢ app 
        ⃢ components
            ⃢ buttons
                ⃢ standard
                ⃢ light
                ⃢ ...
                buttons.scss (beinhaltet button styles)
       
Da durch die Ordnerstruktur ein sehr langer Pfad zum Importieren im Projekt entsteht (wie man beim Importieren in die scss Datei in config schon merkt), gibt es sogenannte "Shortcut"-Files.

    ⃢ components
        buttons.scss (Shortcut)
        
Es handelt sich hierbei um den components Ordner im root. Die Shortcut-Files importieren die originale gleichlautende Datei mit dem Styling, um einen kürzeren Pfad zum Importieren ins Projekt zu ermöglichen.  

⚠ Bei neuen Modulen & Patterns müssen diese manuell angelegt werden.

Aus @import "~chefkoch-design-system/app/components/buttons/buttons";  
wird @import "~chefkoch-design-system/components/buttons";

## Config

Im Ordner `config` liegen die relevanten SCSS-Files für Astrum selbst.

    ⃢ config
        astrum-theming.scss (beinhaltet interne Verbesserungen der Styleguide UI)
        chefkoch-design-system.scss (beinhaltet alles und wird zu app/build kompiliert)

## Workflow

1. Im [Design System Board](https://jira.chefkoch.de/secure/RapidBoard.jspa?rapidView=269&useStoredSettings=true) ein Ticket aufmachen
2. Den Code auf einem Branch entwickeln
3. Einen Pull-Request auf GitHub stellen

Happy coding.
