import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Martini',
      img: 'https://boiremixologie.com/files/medias/_thumb/capture-ecran-martini.jpg',
      description:
        '« Martini, shaken, not stirred », comme disait James Bond. Ce cocktail aurait été inventé après l’importation du vermouth italien Martini aux États-Unis. Un barman l’aurait alors mélangé à du gin, créant ainsi le cocktail le plus connu du monde.',
      ingredients: [
        { name: 'gin', quantity: 1 },
        { name: 'martini', quantity: 1 },
      ],
    },
    {
      name: 'Margarita',
      img: 'https://boiremixologie.com/files/medias/_thumb/margarita.jpg',
      description:
        'La margarita est un cocktail rafraichissant à base de tequila inventée en 1948 par Margaret Sames, d’où le nom (Margarita est la traduction en espagnol du prénom Margaret). Fait intéressant : la margarita est le cocktail le plus commandé en Amérique du Nord. ',
      ingredients: [
        { name: 'téquila', quantity: 2 },
        { name: 'liqueur agrumes', quantity: 1 },
        { name: 'lime', quantity: 1 },
      ],
    },
    {
      name: 'Old Fashioned',
      img: 'https://boiremixologie.com/files/medias/_thumb/Old-fashioned.jpg',
      description:
        'Abordant d’abord le nom de Whiskey Cocktail, ce classique a été créé par un barman du Pendennis Club au Kentucky, qui ajouta du sucre au whiskey en l’honneur du Colonel James E. Pepper. Ce dernier apporta ensuite la recette au Waldorf-Astoria Hotel de New York. Le reste appartient à l’histoire. ',
      ingredients: [
        { name: 'Eau gazeuse', quantity: 2 },
        { name: 'whisky', quantity: 1 },
        { name: 'orange', quantity: 1 },
      ],
    },
  ]);

  public selectedCocktail$: BehaviorSubject<Cocktail> = new BehaviorSubject(
    this.cocktails$.value[0]
  );

  public selectCocktail(index: number): void {
    this.selectedCocktail$.next(this.cocktails$.value[index]);
  }

  public getCocktail(index: number) {
    return this.cocktails$.value[index];
  }

  public addCocktail(cocktail: Cocktail): void {
    const value = this.cocktails$.value;
    this.cocktails$.next([...value, cocktail]);
  }

  public editCocktail(editedCocktail: Cocktail): void {
    const value = this.cocktails$.value;
    this.cocktails$.next(
      value.map((cocktail: Cocktail) => {
        if (cocktail.name === editedCocktail.name) {
          return editedCocktail;
        }else {
          return cocktail;
        }
      })
    );
  }

  constructor() {}
}
