- Das Grid besteht aus 12 Columns, 2 Seitenmargins und 11 Gutter, die sich gemäß der [Viewports Tabelle](#group-breakpoints-component-viewports) verhalten.  
- 12 Columns sind eine optimale Anzahl an Spalten, um größtmögliche Flexibilität zu gewärleisten. 
- Während der Content für mobile Viewports alle 12 columns beansprucht, kann ab der m-View eine Aufteilung von bspw. 8:4 stattfinden (8 columns Contentbereich, 4 columns Kontextbereich).

Grundsätzlich verfolgt unser Grid das System von Twitter Bootstrap, bzgl. `min-width` und breakpointabhängigen Klassennamen. Der einzige Unterschied ist jedoch, dass wir mit einer `.ds-col-[1-12]` Klasse beginnen, da unser Breakpoint `xs` bei 480px Viewportbreite beginnt und nicht (wie bei Twitter Bootstrap) bei 0.

### Benutzung von ds-col

Die Klassen `.ds-col-[1-12]` sind breakpointunabhängig und die __Mindestanforderung__ für den Grid Aufbau.  
`.ds-col-6` bspw. wird __immer__ 6 colums breit sein. Sofern sich die Breite in keinem Breakpoint ändern wird, sind die Klassen `.ds-col-[1-12]` optimal, da sie auch namentlich an keinem Breakpoint fixiert sind.

### Benutzung von ds-col-xs, -s und -m 

Aufbauend auf die Klassen `.ds-col-[1-12]`, greifen die Styles der Klassen `.ds-col-xs-[1-12]` ab unserem __xs Breakpoint__, welcher bei seiner definierten Viewportbreite beginnt. Die Klassen `.ds-col-s-[1-12]` greifen ab dem __s Breakpoint__ und die Klassen `.ds-col-m-[1-12]` greifen ab dem __m Breakpoint__

### Gutter

Wir unterscheiden 2 verschiedene Gutter:
1. Das äußere Gutter (blau), welches auf `.ds-container` liegt.
2. Das Standard Gutter, also das der Columns (rot), welches jeweils auf den `ds-col...` Klassen liegt.

Die Breiten der Gutter werden je nach breakpoint vergrößert oder verkleinert. Dies passiert alles automatisch, dafür muss nichts getan werden.

<hr class="ds-hr" />
<br/>

Zieh dein Browserfenster groß und klein, um im nachfolgenden Beispiel die Auswirkungen der Columns und Gutter zu sehen.
