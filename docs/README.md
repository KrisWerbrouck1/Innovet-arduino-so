# Inleiding
## Algemeen

Met het arduino platform kunnen microcontrollers eenvoudig geprogrammeerd worden. Hierdoor is het ideaal geschikt voor leerlingen secundair onderwijs.

Een arduino bord bevat een microcontroller en de nodige componenten voor communicatie met computer.

## Blokschema arduino met sensoren en actuatoren

 Sensoren en actuatoren zijn meestal niet opgenomen op het arduino ontwikkelbord en moeten extern geplaatst worden.

Het blokschema van een slim toestel bevat meestal wel sensoren of actuatoren.

![Blokschema](./assets/afbeeldingen/Blokschema.png)


Sensoren lezen informatie binnen. Enkele voorbeelden:

* Temperatuursensoren.
* Grondvochtigssensoren.
* Afstandssensoren.

De verwerking verloopt via de microcontroller. In de microcontroller moet de nodige software geladen worden.

Actuatoren voeren iets uit. Enkele voorbeelden:

* Verlichting. (leds, ...)
* Motoren.

De communicatie wordt gebruikt om:

* Programma in de microcontroller op het arduino bord te laden.
* Informatie weer te geven.

## Externe communicatie

Sommige arduino borden beschikken over communicatie met een WIFI-netwerk, LORA-netwerk, …. Deze borden zijn geschikt voor IOT-toepassingen.

![Arduino met wifi communicatie](./assets/afbeeldingen/arduinoIOTInleiding.png)

## Onderzoek info arduino

Voor de verwerking kan er gebruik gemaakt worden van een arduino ontwikkelbord.  Er bestaan verschillende arduino borden. Zoek enkele verschillende types op. Kijk als de borden geschikt zijn voor communicatie met een netwerk.

## Arduino IDE

De ontwikkelomgeving Arduino IDE kan gedownload worden op [Arduino](https://www.arduino.cc/)

![Arduino IDE](./assets/afbeeldingen/arduinoIDE.png)

Er is nog alternatieve software om arduino borden te programmeren:
* Flowcode
* Scratch 4 arduino
* Snap 4 arduino
* Ardublocks
Deze software is meestal geschikt om een basis rond programmeren aan te leren, maar voorlopig niet voor communicatie met cloud platformen.

## Arduino uno bord

Het arduino uno bord is ideaal om te leren programmeren, kennis te maken met sensoren en actuatoren, maar beschikt niet over bedrade of draadloze netwerkcommunicatie. 

De arduino UNO beschikt over volgende pinlayout:

![Arduino UNO pinlayout](./assets/afbeeldingen/arduinoUnoPinlayout.png)

De pinnen 0 tot en met 13 kunnen gebruikt worden als een digitale ingang of uitgang.
De pinnen A0 tot en met A5 kunnen gebruikt worden als analoge ingang.

De arduino uno maakt gebruik van TTL spanningsniveaus. 

![TTL spanningsniveau's](./assets/afbeeldingen/TTL.png)

Verklaring:
* VOH is de minimale spanning aan de uitgang voor een logisch “1”
* VOL is de maximale spanning aan de uitgang voor een logisch “0”
* VIH is de minimale spanning aan de ingang voor een logisch “1”
* VIL is de maximale spanning aan de ingang voor een logisch “0”

Oefening:

* Een ingangsspanning tussen de 0 V en 0,8 V wordt aanzien als? 	
* Een ingangsspanning tussen de 2 V en 5 V wordt aanzien als?	
* Een uitgangsspanning tussen de 0 V en 0,4 V wordt aanzien als? 	
* Een uitgangsspanning tussen de 2,7 V en 5 V wordt aanzien als? 	

## Instellen correcte type arduino bord

Er zijn heel wat verschillende types arduino’s. Kies in de software het gebruikte bord.

![Kiezen correct arduino bord](./assets/afbeeldingen/arduinoBord.png)

## Instellen communicatie poort

De communicatiepoort tussen computer en arduino bord moet eveneens ingesteld worden.

![Kiezen correcte communicatiepoort](./assets/afbeeldingen/arduinoCommunicatie.png)
