# Eigen functies

Er zijn verschillende types functies:
*	void functie (void) – krijgt geen data mee en geeft geen data terug
*	void functie (var) – krijgt data mee, maar geeft geen data terug
*	var functie (var) – krijgt data mee en geeft data terug


## Functie die geen data mee krijgt en geen data teruggeeft aan het hoofdprogramma

Voorbeeld:

```cpp
int teller=0;

void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.print("teller = ");
  Serial.println(teller);
  increment();
  delay(1000);
}

void increment()
{ teller=teller+1;
}
```

## Oefening

Maak een programma met de functie delaySeconde(). De functie bevat een delay van 1 seconde. 


##	Functie die data mee krijgt en geen data teruggeeft aan het hoofdprogramma

```cpp
int getal1 = 0;
int getal2 = 0;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.print("Geef het 1ste getal in = ");
  while (Serial.available() == 0) {
  }
  getal1 = Serial.parseInt();
  Serial.println(getal1);
  Serial.print("Geef het 2de getal in = ");
  while (Serial.available() == 0) {
  }
  getal2 = Serial.parseInt();
  Serial.println(getal2);
  som(getal1, getal2);
  delay(1000);
}

void som(int getal1, int getal2)
{ int oplossing;
  oplossing = getal1 + getal2;
  Serial.print("De som van de 2 getallen is : ");
  Serial.println(oplossing);
}
```

##	Oefeningen

* Maak een programma waarbij 2 getallen met elkaar vermenigvuldigd worden. 
*	Maak een programma om de omtrek van een cirkel te berekenen. Maak voor pi een variabele aan van het type float.
*	Maak een programma om de oppervlakte van een cirkel te berekenen. 

## Functie die data mee krijgt en data teruggeeft aan het hoofdprogramma

```cpp
int getal1 = 0;
int getal2 = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  int getal=0;
  // put your main code here, to run repeatedly:
  Serial.print("Geef het 1ste getal in = ");
  while (Serial.available() == 0) {
  }
  getal1 = Serial.parseInt();
  Serial.println(getal1);
  Serial.print("Geef het 2de getal in = ");
  while (Serial.available() == 0) {
  }
  getal2 = Serial.parseInt();
  Serial.println(getal2);
  getal=som(getal1, getal2);
  Serial.print("De som van de 2 getallen is : ");
  Serial.println(getal);
  delay(1000);
}

int som(int getal1, int getal2)
{ int oplossing;
  oplossing = getal1 + getal2;
  return oplossing;
}
```

##	Oefeningen

* Maak een programma waarbij 2 getallen met elkaar vermenigvuldigd worden. 
*	Maak een programma om de omtrek van een cirkel te berekenen. Maak voor pi een variabele aan van het type float.
*	Schrijf een programma om de oppervlakte van een cirkel te berekenen. 
