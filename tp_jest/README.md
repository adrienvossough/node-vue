# Rappel sur Jest

[Mémo](https://devhints.io/jest)

## Quelques Régles

1. Pas d'effets de bords dans les fonctions, éviter les variables globales
2. Les tests ne devraient pas à avoir à respecter un ordre (indépendant des autres)
3. Un test est répétable
4. automatiser les paramètres

## Exemple

``` typescript
describe("* Test Maths", () => {
 it("doit retourner 5", () => {
    const x = 5;
    const y = 0;
    const expectedResult = 5;
    expect(x + y).toEqual(expectedResult);
    expect(typeof (x + y)).toBe("number");
 });
});
```

describe : Affiche dans le terminale la description des tests de façon globale ; il peut conteneur plusieurs "it"

it : Description du test et doit indiquer ce qu'il doit faire et retourner

expect : Est une méthode qui indique ce que le test doit retourner. Fonctionne comme un test booléen. S'il rate, il indique une erreur dans le test. Il est possible d'en placer plusieurs.

toEqual : Vérifique que 2 valeurs sont identiques. Il existe d'autres méthodes : [méthodes](https://jestjs.io/docs/en/expect.html)

## Dépendances

1. [mockingoose](https://github.com/alonronin/mockingoose) : pour me simplifier la vie et pouvoir fabriquer des mocks pour les models Mongoose
