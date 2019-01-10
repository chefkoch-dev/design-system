Secondary Headings kommen in 3 Varianten vor: Als Underline, als Overline und standalone.  
Der Inhalt der Secondary Headings ist zwar informativ aber sekundär. Dies wird vorallem durch die font-size und color (`$color-grey-dark`) dargestellt.

__Code__  
Definiert wird die Secondary Heading als `<span class="ds-h7">`.

- Als __Underline__ ist sie Bestandteil, des `<h*>`-Tags, steht also nach dem Headline Text innerhalt des Tags.
- Als __Overline__ steht sie vor dem darauffolgenden `<h*>`-Tag.
- Als __standalone__ Secondary Heading darf diese auch alleine stehen.

Wir verwenden für die Secondary Headings `<span>`-Tags, da innerhalb  `<h*>`-Tags nur Phrasing Content erlaubt ist. `<h*>`, `<p>` oder `<div>`- Tags sind damit ausgeschlossen.  
[Näheres zu Phrasing Content kann hier nachgelesen werden](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements).

__Styles__  
Helvetica Neue Regular  
F 12px / L 20px / M 0
  
<small>F: Fontsize / L: Line-Height / M: Margin (bottom)</small>
