# Operatoren
##	Decimale operatoren

De operatoren voor optellen, aftrekken, vermenigvuldigen, delen en restdeling zijn:

| Operator | Omschrijving | Voorbeeld |
| --- | --- | --- |
| = | waarde toekennen | x=4; |
| + | optellen | x=x+6; | 
| - | aftrekken | x=x-2; |
| * | vermenigvuldigen | x=x*2; |
| / | delen | x=x/8; |
| % | modulo | x=x%3; |


Modulo is de rest na een deling. Voorbeelden:

```cpp
x=8%5;		//x=3 want 8 gedeeld door 5 is 1, rest 3
x=3%4;		//x=3 want 3 gedeeld door 4 is 0, rest 3.
```

##	Operatoren voor vergelijkingen

Variabelen worden regelmatig met elkaar vergeleken, bijvoorbeeld in de if… else structuur. Op basis van de uitkomst van de vergelijking worden beslissingen genomen. 

| Operator | Omschrijving | Voorbeeld |
| --- | --- | --- |
| == | x is gelijk aan y	| x ==y |
| !=  | x is niet gelijk aan y | x!=y |
| <	| x is kleiner dan y	| x<y |
| >	| x is groter dan y | x>y |
| <= | x is kleiner of gelijk aan y | x <=y |
| >= | x is groter of gelijk aan y | x >=y |	 


##	Logische operatoren

Logische berekeningen zijn Booleaanse vergelijkingen met als uitkomst TRUE of FALSE, waar of niet waar. Er zijn drie logische operaties – AND (&&), OR || en NOT(!) die vaak gebruikt worden in een if … else structuur.

&& AND, waar als beide voorwaarden waar zijn. Voorbeeld:
```cpp
if ((x>1) && (x<9))
```

|| OR, waar als 1 van de voorwaarden waar is. Voorbeeld:
```cpp
if ((x>1) || (x<9))
```

 ! NOT, waar als vergelijking niet waar is. Voorbeeld:
 ```cpp
if (!(x>0))
```
