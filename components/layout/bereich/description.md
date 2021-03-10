Bereiche können im Code oder rein visuell entstehen.  

Im Code werden Bereiche durch u.A. folgende Tags repräsentiert:  
`<header>`, `<main>`, `<section>`, `<aside>` & `<footer>`. 

### Statische Bereiche
Bei statischen Bereichen, wie sie beim klassischen Spalten Layout vorkommen, fungiert `<main>` als Bereich für jegliche Module im Main Content, während `<aside>` alle Sidebar Content Module enthält.

### Visuelle / flexible Bereiche

Bei visuellen / flexible Bereichen wie z.B. auf der RSEL, fungiert `<main>` als Wrapper für den gesamten Content, nicht nur für den Main-Content. 
Innerhalb dessen, werden die Bereiche für Content und Sidebar nicht hart im HTML definiert sondern ausschließlich über die Positionierung der Module bestimmt.  
 Stehen alle Sidebar Inhalte auf der rechten seite und der Main-Content auf der Linken, sieht es visuell genau so aus, wie der statische Aufbau der Bereiche, jedoch existieren diese nicht im Code.

#### Zusammenspiel mit Werbung
`<main>` wird automatisch so ausgerictet, dass rechts immer Platz für einen Skyscraper ist.
Gesteuert wird dies durch das Attribut `data-ads-site-type` auf dem `body`, welches durch den Ads-Service gesetzt wird.
Dieser enthält die aktuelle Konfiguration des SiteType: `mobile`, `tablet` oder `desktop`.
Damit die Ausrichtung greift muss der gesamte Inhalt innerhalb von `<main>` liegen.