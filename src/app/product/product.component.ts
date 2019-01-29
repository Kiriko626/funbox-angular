import {Component, Input, OnInit} from '@angular/core';
import { ICard } from './../item-list/item-list.component'

@Component({
  selector: 'app-product',
  template: `
    <div class="item-list__item">
        <div
            class="item-list__item-card"
            [ngClass]="{'item-list__item-card--active':localCard.isActive,'item-list__item-card--disabled':localCard.isDisabled}"
            (click)="onCardClick()"
        >
            <p class="item-list__item-card-promo">Сказочное заморское яство</p>
            <h2 class="item-list__item-card-header">Нямушка</h2>
            <h3 class="item-list__item-card-subheader">{{ localCard.subheader }}</h3>
            <p><span class="bold">{{ localCard.amount }}</span> порций</p>
            <p><span class="bold">{{ localCard.amountBonus }}</span>{{ localCard.amountBonusDesc }}</p>
            <p>{{ localCard.review }}</p>
            <img src="assets/cat.png">
            <div class="item-list__item-card-weight">{{ localCard.weight}}<br><span>кг</span></div>
        </div>
        
        <p class="item-list__item-description" *ngIf="!localCard.isActive && !localCard.isDisabled">
            Чего сидишь? Порадуй котэ, <button (click)="onCardClick()" class="buy-link">купи.</button>
        </p>
        <p class="item-list__item-description" *ngIf="localCard.isActive && !localCard.isDisabled">
            {{localCard.activeText}}
        </p>
        <p class="item-list__item-description--yellow" *ngIf="localCard.isDisabled">
            Печалька, {{localCard.subheader}} закончился
        </p>
    </div>
  `,
  styles: []
})
export class ProductComponent implements OnInit{
  @Input() card: ICard;
  localCard: ICard;
  
  ngOnInit(): void {
    this.localCard = this.card;
  }

  private onCardClick() {
    if (!this.localCard.isDisabled) {
      this.localCard.isActive = !this.localCard.isActive;
    }
  }

}
