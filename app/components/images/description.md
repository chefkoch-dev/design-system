### Code

Sofern AMP verwendet wird, werden Bilder über [AMP-img](https://www.ampproject.org/docs/reference/components/amp-img) ausgegeben.

### Auflösungen 

Es werden je Bild 3 Auflösungen angeboten: standard, @2x, @3x.

### Bildbreite

Bilder innerhalb einer Gridklasse sind standardmäßig maximal 100% breit (entsprechend der Gridklasse). Damit wird verhindert, dass ein zu großes Bild das Gridlayout zerschießt, oder dass das Bild rechts aus dem Gridcontainer raushängt.

### Border-Radius

Jedes normale alleinstehende Bild bekommt einen `border-radius: $unit;`. Das DSY bietet hierfür ein `@mixin ds-border-radius` an, welches per `@include` im Projekt selbst auf das Bild gesetzt wird. 

Bilder, die auf mobilen Viewports über die gesamte Breite gehen sollen, z.B. auf der RDS, können dann in diesem Breakpoint auf den border-radius verzichten.

### Formate
- Mobil `1:1`, `3:2`
- Tablet / Desktop `3:2`

- Optional `4:3` <small>Layoutabhängig von Mobil auf Tablet z.B. bei Breakpoint xs</small>
