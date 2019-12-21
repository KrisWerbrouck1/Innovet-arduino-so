# Variabelen

Een variabele vertegenwoordigt een getal of tekst en wordt meestal voorgesteld door een logische naam. Voorbeelden ledPin, onTime, …. Variabelen kunnen gedurende het programma meerdere malen een andere waarde aannemen. 

Alle variabelen moeten eenmalig gedeclareerd worden voordat je ze kunt gebruiken. 

Voor iedere variabele wordt een geheugenplaats gereserveerd in de microcontroller. Er bestaan verschillende types variabelen.

# Types variabelen
## Boolean

Een Boolean variabele kan slechts twee waarden aannemen: true of false. 

Definiëren: 

```cpp
boolean var1 = true;
boolean var2 = false;

```
Waarde aanpassen:

```cpp
var1 = false;

```

Ontwerp een programma om te onderzoeken met welk decimaal getal true en false bij een boolean overeenkomen. Gebruik hiervoor de functie serial.println.

* True: 	
* False: 	


##	Char

Char is de afkorting van charact value of tekenwaarde. Een variabele van het type char is een reeks van acht enen en nullen (byte), dat een teken van bijvoorbeeld het toetsenbord vertegenwoordigt. Druk je bijvoorbeeld op de toets ‘4’ dan wordt dit aan een char variabele toegewezen als 00110100. Zie ASCII-tabel. 

*[ASCII-tabel](https://www.arduino.cc/en/Reference/ASCIIchart )


Definiëren: 

```cpp
char myChar = 'A';
char myChar = 65;      // beide zijn gelijk
```

Waarde aanpassen:
```cpp
myChar = 'B';
```cpp

Ontwerp een programma om te onderzoeken met welk teken uit de ASCII-tabel volgende waardes overeenkomen:
```cpp
char myChar = 100;: 	
char myChar = 33;: 	
```

##	Byte

Een variabele van het type byte vertegenwoordigt een 8-bit woord (byte). Een byte is een numerieke waarde die kan variëren tussen de 0 en 255. 

Definiëren: 
```cpp
byte myByte = 128;
```
Bereken hoeveel 28 is:

Ontwerp een programma om te onderzoeken wat er gebeurt wanneer een variabele van het type byte groter wordt dan 255.

##	Int

Een variabele van het type integer (int) vertegenwoordigt een positief of negatief geheel getal tussen 32 767 en -32 768. Wordt de waarde groter dan 32 767 dan wordt de waarde terug negatief. Voor een integer wordt 16 bit voorzien in het geheugen.

Definiëren: 

```cpp
int myInt = 128;
```

##	Unsigned int

Een variabele van het type unsigned int vertegenwoordigt een positief getal tussen 0 en 65 535. Voor een integer wordt 16 bit of 2 byte voorzien in het geheugen.

Definiëren: 
```cpp
unsigned int myInt = 128;
```

Bereken hoeveel 2^16 is:

## Long

Een variabele van het type long vertegenwoordigt een positief of negatief geheel getal tussen 2 147 483 647 en – 2 147 483 648. Voor dit type variabele wordt 32 bit of 4 byte voorzien in het geheugen.

Definiëren:
```cpp 
long myLong = 100000;
```
##	Unsigned long

Een variabele van het type unsigned long vertegenwoordigt een positief getal tussen 0 en 4 294 967 295. Voor een unsigned long wordt 32 bit of 4 byte voorzien in het geheugen.

Definiëren: 
```cpp 
unsigned int myLong = 10000000;
```

##	Float

Een variabele van het type float vertegenwoordigt een positief of negatief decimaal getal met cijfers na de komma tussen 3,4028235 . 1038 tot -3,4028235 . 1038 Voor dit type variabele wordt 32 bit of 4 byte voorzien in het geheugen.

Definiëren: 
```cpp 
float pi2Var = 6.28318;
```

##	Double

Bij een arduino uno zijn de specificaties van een float en een double perfect hetzelfde. Bij bepaalde types arduino is een double echter een 8 byte variabele.

Definiëren: 
```cpp 
double pi2Var = 6.28318;
```

Opmerking: om te rekenen met floating getallen heeft de microcontroller veel meer tijd nodig dan bij byte of integer getallen.

##	Array

Een variabele van het type array vertegenwoordigt een serie waarden. Elke waarde is aan te wijzen door middel van een index die vanaf 0 begint te tellen. 

Definiëren van een array met 8 integers:

```cpp 
int koelFan[8]= {20,40,80,120,160,200,240,255};
```

Een waarde uit een array in een variabele plaatsen:

```cpp 
i=koelFan[4] // i=160
```

Welke waardes worden weergegeven in de serial monitor in onderstaande programma:

```cpp 	
int koelFan[8] = {20,40,80,120,160,200,240,255};

void setup() {
  Serial.begin(9600); //communicatie met snelheid van 9600 bits per seconde
}

void loop() {
  Serial.println(koelFan[1]);
  Serial.println(koelFan[2]); 
  delay(50);
}
```

##	String

Een variabele van het type string vertegenwoordigt een reeks ASCII-tekens. Per teken reserveert de arduino 8 bits (1 byte) geheugenruimte.

Enkele voorbeelden

```cpp 	
//declaratie van een string voor 15 karakters zonder waarde
char Str1[15]; 

//declaratie van een string van 8 karakters, waarin 7 karakters gebruikt voor het woord arduino. In het achtste karakter wordt het 0 karakter toegevoegd. 
char Str2[8] = {'a', 'r', 'd', 'u', 'i', 'n', 'o'};

// zelfde als bovenstaande voorbeeld, maar met toevoeging van een 0 karakter bij het initialiseren.
char Str3[8] = {'a', 'r', 'd', 'u', 'i', 'n', 'o', '\0'};

// declaratie van een string met toevoeging van het woord arduino en een 0 karakter op het einde.
char Str4[ ] = "arduino";

// declaratie van een string met vaste waarde en het woord arduino.
char Str5[8] = "arduino";

// declaratie van een string voor 15 karakters waarvan er 7 gebruikt worden voor het woord arduino.
char Str6[15] = "arduino";
```

#	Variabele bereik   

Een variabele kan gedeclareerd worden in het begin van het programma voor void setup() zoals in het voorbeeldprogramma. Deze variabelen heten een globale variabelen. Een globale variabele is dus een variabele die in een heel programma kunt oproepen. 

Een lokale variabele is een variabele die alleen gebruikt kan worden in een stukje van een programma. Het is een tijdelijke variabele.  

Opmerking: Hoe meer variabelen je gebruikt in een microcontroller des te sneller zal het geheugen vol zitten. Dat kan natuurlijk niet de bedoeling zijn.  

Het volgende voorbeeld zal duidelijk maken hoe de verschillende variabelen werken:    

```cpp 	
int value;    // 'value' is zichtbaar in het hele programma 
void setup()  {  
  }  
void loop()  {    
 float f;    // 'f' is alleen zichtbaar in de loop     
 for (int i=0; i<20;)  // 'i' is alleen zichtbaar in de for  loop 
   { i++;     // i = i + 1 
}  
```