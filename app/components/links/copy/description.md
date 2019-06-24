Copy Link bezeichnet einen Link im Fließtext im Content.

### Utilities  
Weitere Textauszeichnungen über [ds-utility-Klassen](#group-utilities-component-typography-utilities) möglich.

### Code
Das Linkstyling kann via Klasse `.ds-copy-link` auf hardcoded Links oder als mixin mit `@include ds-copy-link` auf wysiwyg content gesetzt werden.

### Styles  
- Links haben den Schriftschnitt `medium`, `letter-spacing: 0.5px` und werden initial __nicht__ unterstrichen.
- Bei Hover bekommen die Links eine `text-decoration: underline`
- Schriftgröße wird geerbt von Copy Text. 
