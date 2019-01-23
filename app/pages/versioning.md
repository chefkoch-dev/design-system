# Versionen

⚠ Achte bitte immer auf die Version, des DSY. Änderungen der Major Version, verursachen breaking changes!

## 1. Versionen des Design-Systems

Um unvorhersehbare breaking changes in einem Projekt zu vermeiden, arbeiten wir im DSY mit Versionen und gehen hierbei nach dem Beispiel von [Semantic Versioning 2.0.0](https://semver.org/) vor.  

Wir arbeiten mit Major, Minor und Patch/Bugfix Versionen.

- Version __1__.0.0 beschreibt die erste Major Version und verursacht breaking changes für alle Projekte, die eine niedrigere Version (zB. 0.10.0) verwenden.
- Version 1.__1__.0 beschreibt eine Minor Version. Hierbei handelt es sich um das Hinzukommen eines Features, welches das Projekt erweitert und keine breaking changes zu erwarten sind.
- Version 1.1.__1__ beschreibt einen Patch, bzw. einen Bugfix des bestehenden Umfags, bei dem keine neuen Features hinzukommen, sondern die aktuell verfügbaren Features bearbeitet werden.

Die Ziffern können beliebig hochgezählt werden. Eine Version 2.30.99 ist durchaus legitim.  
Kommt ein neues Feature oder Modul hinzu, wird dieses Release auf 2.31.0 versioniert.  
Sobald sich jedoch Codeänderungen ergeben (Änderungen von Variablen, Klassennamen oder Markup, welches auch CSS-Änderungen mit sich zieht) muss die Major Version um eins erhöht werden. Die neue Version wäre dann 3.0.0

Näheres dazu findest du [im Wiki](https://wiki.chefkoch.de/pages/viewpage.action?pageId=65737468). 

