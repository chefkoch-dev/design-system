*since v9.14.0*

 **Hinewis**: Die Klasse `.ds-copy-link` und das Mixin `ds-copy-link` sind ab v9.14.0 deprecated werden durch `.ds-text-link` und das Mixin `ds-text-link` erstetzt.

Copy Link bezeichnet einen Link im Fließtext im Content.

### Utilities  
Weitere Textauszeichnungen über [ds-utility-Klassen](#group-utilities-component-typography-utilities) möglich.

### Code
Das Linkstyling kann via Klasse `.ds-text-link` auf hardcoded Links oder als mixin mit `@include ds-text-link` auf wysiwyg content gesetzt werden.

### Styles  
- Links sind unterstrichen. In Browsern, die die CSS property `text-underline-offest` unterstützen (siehe [Can I Use](https://caniuse.com/?search=text-underline)), wird die Linie mit `.2em` Abstand dargestellt
- Bei Hover bekommen die Links eine `text-decoration: none`
- Defaultfarbe für Copy Links ist `$color-corporate-green`
