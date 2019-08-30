import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardService} from '../card.service';
import {Subscription} from 'rxjs/index';
import {Card} from '../models/card.model';
import {CardAPIService} from '../card-api.service';

@Component({
    selector: 'app-card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.sass']
})
export class CardDetailsComponent implements OnInit, OnDestroy {

    public CARD_TYPES = CardService.CARD_TYPES;
    public card: Card;
    public isImageLoaded: boolean = false;
    public imageSrc: string;


    private subscriptions: Subscription = new Subscription();

    constructor(private cardService: CardService) {
        this.subscriptions.add(cardService.cardSubject.subscribe((card: Card) => {
            this.isImageLoaded = false;
            this.imageSrc = CardAPIService.IMAGE_BASE_URL + card.name;
            this.card = card;
        }));
    }
    
    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
