*since v9.15.0*

Ein Teaser-Link setzt das Hover Verhalten für Hintergrundbilder und Headlines bei Teasern wie z.B. [Recipe Card](#group-recipe-card). 

Der Link erhält die Klasse `.ds-teaser-link`. Das Bild erhält einen Zoom-Effekt durch das setzen der Klasse `.ds-teaser-link__image`. Das Bild muss hierfür von einem Container mit der Klasse `.ds-teaser-link__image-wrap` umgeben sein. Die Headline verändert durch die Klasse `.ds-teaser-link__headline` die Textfarbe zu `$color-corporate-green` mit einem leichten Transition Effekt. 

### Usage

    Via Shortlink
    @import "~chefkoch-design-system/components/teaser-link";

    Original Location
    @import "~chefkoch-design-system/app/components/teaser-link/teaser-link";
