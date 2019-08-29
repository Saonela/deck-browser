import {Component, OnInit} from '@angular/core';
import {CardAPIService} from '../card-api.service';
import {Card} from '../models/card.model';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

    public cards: Card[];
    public loading: boolean = false;

    constructor(private cardAPIService: CardAPIService) {
    }

    ngOnInit() {
        this.getCardList();
    }

    private getCardList() {
        this.loading = true;
        this.cardAPIService.getCardList().subscribe((cards: Card[]) => {
            console.log('cards', cards);
            this.cards = cards;
            this.loading = false;
        });
    }
}

