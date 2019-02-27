⚠ Grafiken werden noch ausgetauscht

Wir nutzen strukturierte und konsistente Abstände auf allen Chefkoch Seiten.  
Abstände werden im Regelfall __immer nach unten__ definiert, um Deplazierungen zu vermeiden, sofern ein Modul oder ein Element aus Gründen mal nicht angezeigt werden sollte. 

Wir unterscheiden nach:

- Bereich (Header, Content, Kontext & Footer)
- Modul (Carousel, Liste, etc.)
- Element (Headline, Bild, Text, etc.)

#### Standard Abstand
Bereiche und Module werden mit der Klasse `.ds-box` ausgezeichnet.  
Diese bringt den Mindestabstand von 32px (nach unten) mit.

#### Großer Abstand
Auf einen Bereich oder ein Modul mit der Klasse `.ds-box`, folgt eine `<hr class="ds-hr">`.  
Diese bringt eine 1px border in der Farbe `$color-grey-light` und eine `margin-bottom` von 32px mit, um den vergrößerten Gesamtabstand zwischen Bereichen, bzw. zwischen Modulen zu gewährleisten.

#### Viewportabhängiger Abstand
- Wenn Abstände viewportabhängig sind, wie zum Beispiel bei `<main>` und `<aside>` bis viewport s, wird eine `<hr class="ds-hr ds-to-s">` zwischen diese beiden Container gesetzt. Die Utility-Klasse `.ds-to-s` ist unter [Breakpoint-Utilities](#group-utilities-component-breakpoint-utilities) zu finden und in dsy-base enthalten.
