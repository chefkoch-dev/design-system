Zum Teil inspiriert von Bootstrap v4.0 mit einem bisschen BEM-Geschmack

See also: [https://getbootstrap.com/docs/4.0/utilities/spacing/]

Class anatomy:

    ds-{property}{seite}--{größe}

Properties:

    m: kurz für margin
    p: kurz für padding

Seite-Abkürzungen:

    t: top
    r: right
    b: bottom
    l: left
    x: x axis, horizontal
    y: y axis, vertical

Größen:

    0: Eliminierung der margins/paddings
    1: (status: bei Bedarf noch zu implementieren)
    2: klein
    3: standard
    4: groß
    5: extra groß

Beispiele:

    <div class="ds-mr--3">margin right größe 3</div>
    <div class="ds-px--2">padding horizontal größe 2</div>
