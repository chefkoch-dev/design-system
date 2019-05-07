Um die oben definierten Abstände immer einzuhalten und eventuelles Bearbeiten zu vereinfachen, verwenden wir die Klasse `.ds-box` allein oder in Kombination mit einer `<hr class="ds-hr" />`. Die Verwendung der `<hr>` in Kombination mit der Klasse `.ds-box` bietet die größtmögliche Flexibilität.

### ds-box

Die Klasse `.ds-box` sichert einen Abstand nach unten (margin) von `32px`, unserem Mindestabstand zwischen Modulen.  
Diese Klasse wird auf die wrapper-container (`article`, `section` oder `aside`) der Module gesetzt und kann mit den Grid-Klassen kombiniert oder als dessen Kind eingesetzt werden.

### hr
Optional.  
Die hr liefert eine `1px border` und einen Abstand von weiteren `32px` (padding-top). In Kombination mit `.ds-box` sichert sie unseren definierten Abstand zwischen Bereichen, oder den Abstand zwischen Modulen deren Thematik unterschiedlich ist. Die `hr` wird immer als letzes Kind der `.ds-box` platzier und ist dank der Grid-Klassen als Eltern immer genau so breit, wie der entsprechende Content.

#### wieso eine hr und keine border?

- Mit der Linie wollen wir thematisch unterschiedliche Bereiche und Module voneinander trennen. Daher ist es ratsam, dies nicht nur visuell zu tun, sondern auch __semantisch__. Das dafür vorgesehene HTML Tag ist die `<hr>`.
- Da das Grid mit Paddings arbeitet, würde eine Border auf dem Gridcontainer dazu führen, dass die Border immer breiter als der Content wäre. CSS-Budget-technisch wäre diese Variante teurer, da man für jeden Usecase und für jede Eventualität per CSS resets und fixes schreiben müsste. Des Weiteren wäre keine Semantik gegeben.
