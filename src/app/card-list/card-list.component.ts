import {Component, OnInit} from '@angular/core';
import {CardAPIService} from '../card-api.service';
import {Card} from '../models/card.model';
import {CardService} from '../card.service';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

    public cards: Card[];
    public activeCard: Card;
    public loading = false;

    constructor(private cardService: CardService, private cardAPIService: CardAPIService) {
    }

    ngOnInit() {
        this.getCardList();
    }

    public setActiveCard(card: Card) {
        this.activeCard = card;
        this.cardService.setActiveCard(card);
    }

    private getCardList() {
        this.loading = true;
        this.cardAPIService.getCardList().subscribe((cards: Card[]) => {
            this.setActiveCard(cards[0]);
            this.cards = cards;
            this.loading = false;
        });
    }
}

