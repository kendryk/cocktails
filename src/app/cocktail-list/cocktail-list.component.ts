import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [
    {
      name: 'AVIATION',
      img: 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_classique_Aviation_1ou2Cocktails_KP_06262019_3109-copie.jpg',
      description:
        'On prétend que ce cocktail fut baptisé d’après sa couleur bleue ciel proféré par la crème de violette. D’autres croient plutôt que son nom ferait référence à l’âge d’or de l’aviation aux États-Unis, l’époque à laquelle le cocktail est apparu. Commandez ce Sour classique à base de gin, de Luxardo Maraschino, de crème de violette et de jus de citron lors de votre prochaine soirée dans un bar à cocktail.',
    },
    {
      name: 'AVIATION2',
      img: 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_classique_Aviation_1ou2Cocktails_KP_06262019_3109-copie.jpg',
      description:
        'On prétend que ce cocktail fut baptisé d’après sa couleur bleue ciel proféré par la crème de violette. D’autres croient plutôt que son nom ferait référence à l’âge d’or de l’aviation aux États-Unis, l’époque à laquelle le cocktail est apparu. Commandez ce Sour classique à base de gin, de Luxardo Maraschino, de crème de violette et de jus de citron lors de votre prochaine soirée dans un bar à cocktail.',
    },
    {
      name: 'AVIATION3',
      img: 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_classique_Aviation_1ou2Cocktails_KP_06262019_3109-copie.jpg',
      description:
        'On prétend que ce cocktail fut baptisé d’après sa couleur bleue ciel proféré par la crème de violette. D’autres croient plutôt que son nom ferait référence à l’âge d’or de l’aviation aux États-Unis, l’époque à laquelle le cocktail est apparu. Commandez ce Sour classique à base de gin, de Luxardo Maraschino, de crème de violette et de jus de citron lors de votre prochaine soirée dans un bar à cocktail.',
    },
  ];
}
