# Constanten

Een programma moet eenvoudig aanpasbaar zijn. Om instellingen te maken kunnen constanten gebruikt worden. De waarde van een constante kan niet aangepast worden tijdens het uitvoeren van het programma.

Test onderstaande programma uit.

```cpp
//aanmaken constanten en toekennen waardes
# define ledPin 13
# define onTime 500
# define offTime 500
void setup() {
  pinMode(ledPin, OUTPUT); //uitgangspin definiëren.
}


void loop() {
  digitalWrite(ledPin, HIGH); //uitgang hoog
  delay(onTime);
  digitalWrite(ledPin, LOW); //uitgang laag
  delay(offTime);
}
```

In plaats van **# define** wordt ook veel gebruik gemaakt van **const int** of **const float**. Deze methode moet gebruik worden bij voorbeeld het definiëren van het getal PI.

```cpp
//aanmaken constanten en toekennen waarde
const int ledPin = 13;
const int onTime = 500;
const int offTime = 500;

void setup() {
  pinMode (ledPin, OUTPUT); //uitgangspin definiëren
}

void loop() {
  digitalWrite(ledPin, HIGH); //uitgang hoog
  delay(onTime);
  digitalWrite(ledPin, LOW); //uitgang laag
  delay(offTime);
}
```

## Oefening

* Bouw op een breadboard een schakeling om een rode led te laten knipperen (aan tijd 500 ms en uit tijd 500 ms) verbonden met pin 10 van de arduino. 
