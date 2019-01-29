import { Component } from '@angular/core';

export interface ICard {
  subheader: string;
  amount: number;
  amountBonus: string;
  amountBonusDesc: string;
  review: string;
  weight: string;
  isDisabled: boolean;
  isActive: boolean;
  activeText: string;
}

@Component({
  selector: 'app-item-list',
  template: `
      <div class="item-list">
          <app-product *ngFor="let item of data" [card]="item"></app-product>
      </div>
  `,
  styles: []
})
export class ItemListComponent {

  data: Array<ICard> = [
      {
          subheader: 'с фуа-гра',
          amount: 10,
          amountBonus: '',
          amountBonusDesc: 'мышь в подарок',
          review: '',
          weight: '0,5',
          isActive: false,
          isDisabled: false,
          activeText: 'Печень утки разварная с артишоками.'
      },
      {
          subheader: 'с кроликом',
          amount: 40,
          amountBonus: '2',
          amountBonusDesc: ' мыши в подарок',
          review: '',
          weight: '2',
          isActive: true,
          isDisabled: false,
          activeText: 'Тушка кролика с лапками.'
      },
      {
          subheader: 'с курой',
          amount: 100,
          amountBonus: '5',
          amountBonusDesc: ' мышей в подарок',
          review: '',
          weight: '5',
          isActive: false,
          isDisabled: true,
          activeText: 'Филе из цыплят с трюфелями в бульоне.'
      },
  ]

}
