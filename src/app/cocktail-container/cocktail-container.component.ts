import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  public selectedCocktail!: Cocktail;
  public cocktails: Cocktail[] = [];
  public subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.subscription.add(this.cocktailService.cocktails$.subscribe(
      (cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      }
    ));

    this.subscription.add(this.cocktailService.selectedCocktail$.subscribe(
      (selectedCocktails: Cocktail) => {
        this.selectedCocktail = selectedCocktails;
      }
    ));
  }

  public selectCocktail(index: number): void {
    this.cocktailService.selectCocktail(index);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
