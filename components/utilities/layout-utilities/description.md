Die Layout Utilities bieten eine Reihe von layoutbezogenen Mixins und Klassen.

#### Floats

Um Elemente links zu floaten kann man die `.ds-float-left` Klasse verwenden.
Zusätzlich existiert ein entsprechendes `ds-float-left`-Mixin, welches bestehenden Klassen einen `float: left;` hinzufügt.

Das Mixin `clearfix` bereinigt Floats auf beiden Seiten nach dem Element auf den dieser Clearfix angewandt wurde.

#### Positionierung in Flexbox Containern

`ds-or($numberOfClasses: 10)` kann genutzt werden, um sich in seinem Projekt eine Reihe von Order-Klassen zu generieren,
welche einem das Umpositionieren in Flexboxcontainern erleichtern.

    Achtung: Wichtig ist hier, sich nicht unnötig viele Klassen zu generieren!
    Man sollte sich in seinem Projekt minimal viele Klassen anlegen, da jede
    nicht verwendete Klasse unnötigen Datenoverhead bedeutet!

### Usage  
    
    Via Shortlink
    @import "~chefkoch-design-system/components/layout-utilities";
    
    Original Location
    @import "~chefkoch-design-system/app/components/utilities/layout-utilities";
