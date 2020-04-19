# Informatie naar computer sturen

Soms kan het handig zijn om informatie vanuit de Arduino naar een computer te sturen. Bij arduino is dit via onderstaande voorbeeld mogelijk.  Test onderstaande programma uit.

```cpp
void setup() {
  Serial.begin(9600); // Communicatie tussen arduino en computer met een snelheid van 9600 bits per seconde.
}

void loop() {
  Serial.println("Hello World"); // De tekst "Hello World" wordt iedere seconde weergegeven in de serial monitor.
  delay(1000);
}
```


Met Serial.begin(9600); wordt de communicatiesnelheid ingesteld op 9600 bits/seconde.
Met Serial.println(“Hello world”); wordt iedere seconde de tekst “Hello world” weergegeven in de serial monitor van bovenstaande programma.

De Seriële monitor kan je op volgende manier openen:

![Weergave Serial Monitor](./assets/afbeeldingen/WeergaveSerialMonitor.png)

## Oefeningen


* Onderzoek wat het verschil is tussen Serial.println en Serial.print.
* Zorg dat iedere seconde je eigen naam weergegeven wordt in de serial monitor.
* In welke functie moet je Serial.println plaatsen als je wil dat de tekst maar 1 maal weergegeven wordt.
