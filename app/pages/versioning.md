# Versionen

⚠ Achte bitte immer auf die Version des DSY!

## 1. Versionen des Design-Systems

Damit verschiedene Seiten die das Design-System benutzen möglichst unabhängig voneinander sind, und wir alle das Design-System möglichst unabhängig von dessen Verwendern weiterentwickeln können, nutzen wir Versionen. Damit diese Versionen einschätzbar bleiben, folgen diese Versionen dem [Semantic Versioning 2.0.0](https://semver.org/) Schema.

Auch wenn wir dadurch eine größtmögliche Unabhängigkeit erreichen, wollen wir die auf den verschiedenen Seiten eingesetzten Design-System-Versionen möglichst aktuell halten, um ein einheitliches Gesamtbild zu erreichen.

Aus Sicht des Verwenders ist es immer schwierig großen Versionssprüngen zu folgen und den eigenen Code auf die erforderlichen Veränderungen hin anzupassen. Deshalb empfielt es sich im Design-System besonders darauf zu achten inkompatible Änderungen zu vermeiden!

## 2. Zusammensetzung der Versionsnummern

Wir arbeiten mit Major, Minor und Patch/Bugfix Versionen.

- Version __1__.0.0 beschreibt die erste Major Version und verursacht breaking changes für alle Projekte die eine niedrigere Version (zB. 0.10.0) verwenden.
- Version 1.__1__.0 beschreibt eine Minor Version. Hierbei handelt es sich um das Hinzukommen eines Features, welches das Projekt erweitert und keine breaking changes zu erwarten sind.
- Version 1.1.__1__ beschreibt einen Patch bzw. einen Bugfix des bestehenden Umfangs bei dem keine neuen Features hinzukommen, sondern die aktuell verfügbaren Features bearbeitet werden.

Die Ziffern können beliebig hochgezählt werden. Eine Version 2.30.99 ist durchaus legitim.  
Kommt ein neues Feature oder Modul hinzu, wird dieses Release auf 2.31.0 versioniert.  
Sobald sich jedoch Codeänderungen ergeben (Änderungen von Variablen, Klassennamen oder Markup, welches auch CSS-Änderungen mit sich zieht) muss die Major Version um eins erhöht werden. Die neue Version wäre dann 3.0.0
