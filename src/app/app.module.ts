// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Composant
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { SelectedDirective } from './shared/directives/selected.directive';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';

// Routes
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailDetailsComponent,
    CocktailListComponent,
    CocktailContainerComponent,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
