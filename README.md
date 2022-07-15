# M223 Punchclock

Diese Applikation simuliert eine "PunchClock". Man kann eigenständig Arbeiteszeiten eintragen und sie 
in Kategorien und Orte einteilen. Diese können dann abgespeichert werden und von einem Admin bearbeitet/
gelöscht werden. 

Folgende Schritte sind notwendig um die Applikation zu erstellen und zu starten: 
1. Stellen Sie sicher, dass OpenJDK 11 oder höher installiert und JAVA_HOME korrekt gesetzt ist.  
2. Installieren Sie (falls noch nicht vorhanden) Apache Maven 3.8.1 oder höher
3. Wechseln Sie auf der Kommandozeile in den Ordner dieser Applikation. 
`cd m223-punchclock-quarkus/`
4. Starten Sie die Applikation mit 
```shell script
./mvnw compile quarkus:dev
```

Folgende Dienste stehen während der Ausführung im Profil dev zur Verfügung:

Eigentliche Applikation unter:
http://localhost:8080/

Link zum Funtionen austesten:
Swagger API: http://localhost:8080/q/swagger-ui/

Konsole für Datenbank:
H2 Console: http://localhost:8080/h2/ 
Datenquelle: jdbc:h2:mem:punchclock
Benutzername: zli
Passwort: zli

