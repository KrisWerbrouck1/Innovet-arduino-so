# Informatie naar computer sturen

Soms kan het handig zijn om informatie vanuit de Arduino naar een computer te sturen. Bij arduino is dit via onderstaande voorbeeld mogelijk.  Test onderstaande programma uit.

![Informatie naar computer sturen](./assets/afbeeldingen/InfoNaarComputer.png)

In de void setup() wordt eerst een seriële poort op 9600 bps gezet met het commando Serial.begin(9600);  Hierdoor worden er 9600 bits per seconde doorgestuurd naar de computer.
Vervolgens wordt iedere seconde de tekst “Hello world” weergegeven in de serial monitor.  

De Seriële monitor kan je op volgende manier openen:

![Weergave Serial Monitor](./assets/afbeeldingen/WeergaveSerialMonitor.png)

## Oefeningen


* Onderzoek wat het verschil is tussen Serial.println en Serial.print.

* In welke functie moet je Serial.println plaatsen als je wil dat de tekst maar 1 maal weergegeven wordt.
