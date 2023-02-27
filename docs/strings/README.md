# Strings

Een string is een variabele om een stuk tekst te bewaren of weer te geven.

In onderstaande voorbeeld worden 2 stukken tekst samenvoegd in een nieuwe string. Het resultaat wordt weergegeven in de serial monitor.


```cpp
String message1 = "Hello ";  //1ste deel tekst
String message2 = "World";  //2de deel tekst
String message3;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  message3 = message1 + message2; //samenvoegen tekst en bewaren in string message3
  Serial.println(message3); //weergave string
  delay(1000);

}
```


## Data binnenlezen bewaren in een string via serial monitor

Het is mogelijk data te bewaren in een string via volgende code:

```cpp
Serial.println("Typ een tekst in de serial monitor");
while (Serial.available()==0){ //Wacht op data
  }
message1=Serial.readString(); //Zet de data om naar een string
```

## String functies
### Bepalen van het aantal tekens

Het aantal tekens in een string bepalen is mogelijk via

```cpp
lengte=message1.length();  //bepalen aantal tekens in de string Message1
```

### Oefening:

Schrijf een programma om te bepalen hoeveel tekens staan in een string die ingevoerd wordt via de serial monitor.


### Omzetten naar kleine letters

Via volgende functie is het mogelijk om hoofdletters om te zetten naar kleine letters.

```cpp
message1.toLowerCase();  //Omzetten naar kleine letters
```

### Oefening

Test bovenstaande functie uit. Zoek vervolgens via welke functie het mogelijk is om tekst om te zetten naar hoofdletters. Schrijf een programma waarbij een tekst ingegeven wordt in de serial monitor. Vervolgens worden alle tekens omgezet naar hoofdletters. Het resultaat wordt weergegeven in de serial monitor. 

###	Vergelijken van strings

Een ingevoerde string vergelijken met een opgegeven stuk tekst is mogelijk via volgende code.

```cpp
  if (message1 == "Hello") {
    Serial.println("De ingevoerde tekst in gelijk aan Hello");
  }
  else {
    Serial.println("De ingevoerde tekst in niet gelijk aan Hello");
  }
```

### Oefening

Geef in de serial monitor 2 stukken tekst in. Vergelijk als beide gelijk zijn en geef dit weer in de serial monitor.





### Vergelijken van delen van strings

Het is mogelijk na te zien als een string start met een bepaald stuk tekst. Voorbeeld:

```cpp
if (message1.startsWith("Hello")) {
    Serial.println("De ingevoerde tekst begint met Hello");
  }
  else {
    Serial.println("De ingevoerde tekst begint niet met Hello");
  }
```

### Oefening

Test bovenstaande functie uit. Zoek vervolgens via welke functie het mogelijk is om te controleren als een tekst eindigt met een opgegeven stuk tekst. Schrijf een programma waarbij een tekst ingegeven wordt in de serial monitor. Wordt gecontroleerd als het laatste woord “world” is. 

### Vervangen van delen

Met de functie replace is het mogelijk bepaalde delen in een string te vervangen.

```cpp
String stringOne = "<html><head><body>";
  Serial.println(stringOne);
  // replace() changes all instances of one substring with another:
  // first, make a copy of the original string:
  String stringTwo = stringOne;
  // then perform the replacements:
  stringTwo.replace("<", "</");
  // print the original:
  Serial.println("Original string: " + stringOne);
  // and print the modified string:
  Serial.println("Modified string: " + stringTwo);
 ```


