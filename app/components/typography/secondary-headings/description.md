Secondary Headings stehen in Kombination mit einer Headline. Der Inhalt der Secondary Headings ist zwar informativ und SEO relevant, aber für den User sekundär. Dies wird vorallem durch die font-size und color (`$color-grey-dark`) dargestellt.

### Code  
Definiert wird die Secondary Heading als `<span class="ds-h7">`. Sie ist immer Bestandteil, des `<h*>`-Tags, und wird im Code immer __nach__ dem Headline Text platziert.

- Als __Underline__ steht sie visuell unter der Headline.  
Hierzu wird auf dem `<h*>`-Tag zusätzlich die Klasse `ds-h7-btm` gesetzt. 
- Als __Overline__ steht sie visuell über der Headline.  
Hierzu wird auf dem `<h*>`-Tag zusätzlich die Klasse `ds-h7-top` gesetzt. 

Wir verwenden für die Secondary Headings `<span>`-Tags, da innerhalb  `<h*>`-Tags nur Phrasing Content erlaubt ist. `<h*>`, `<p>` oder `<div>`- Tags sind damit ausgeschlossen.  
[Näheres zu Phrasing Content kann hier nachgelesen werden](https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements).

### Styles  
Helvetica Neue Regular  
F 12px / L 20px / M 0
  
<small>F: Fontsize / L: Line-Height / M: Margin (bottom)</small>
