- Das Grid besteht aus 12 Columns, 2 Seitenmargins und 11 Gutter, die sich gemäß der [Viewports Tabelle](#group-breakpoints-component-viewports) verhalten.  
- 12 Columns sind eine optimale Anzahl an Spalten, um größtmögliche Flexibilität zu gewärleisten. 
- Während der Content für mobile Viewports alle 12 columns beansprucht, kann ab der m-View eine Aufteilung von bspw. 8:4 stattfinden (8 columns Contentbereich, 4 columns Kontextbereich).

### Benutzung von xs, s und m 
<small>Stand 3/2019</small>  

Dadurch, dass wir verschiedene Gutter außerhalb und zwischen den Columns haben, ist es leider notwendig mindestens die grid-Klassen (col-xs und col-m) auf die entsprechenden container zu schreiben; auch wenn sich das Verhältnis der columns ansonsten nicht ändert.

Beispiel: immer volle Breite

- ![do](./app/images/yes.svg) DO: `<div class="ds-col-xs-12 ds-col-m-12">`  
- ![don't](./app/images/no.svg) DON'T `<div class="ds-col-xs-12">`
