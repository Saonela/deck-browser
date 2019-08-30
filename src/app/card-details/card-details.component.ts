import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardService} from '../card.service';
import {Subscription} from 'rxjs/index';
import {Card} from '../models/card.model';

@Component({
    selector: 'app-card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.sass']
})
export class CardDetailsComponent implements OnInit, OnDestroy {

    public card: Card;

    private subscriptions: Subscription = new Subscription();

    constructor(private cardService: CardService) {
        this.subscriptions.add(cardService.cardSubject.subscribe((card: Card) => {
            this.card = card;
        }));
    }
    
    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
