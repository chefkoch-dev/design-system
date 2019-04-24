Text für Screenreader steht im Zeichen der Barrierefreiheit und validem HTML.  

#### Usecase Icon-Button
Ein wichtiger Usecase sind z.B. Icon-(Only-)Buttons. Hier sollte neben dem Icon auch ein `<span class="ds-sr-only">Buttontext</span>` gesetzt werden, damit zum Einen, ein blinder User vorgelesen bekommt, um was für einen Button es sich handelt. Zum Anderen ist damit valides HTML gewährleistet, da Buttons immer einen Text benötigen. 

### Usage  
    
    Via Shortlink
    @import "~chefkoch-design-system/components/sr-only";
    
    Original Location
    @import "~chefkoch-design-system/app/components/utilities/sr-only";
