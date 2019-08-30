import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/index';
import {Card} from './models/card.model';

@Injectable({
    providedIn: 'root'
})
export class CardService {

    public cardSubject: Subject<any> = new Subject<any>();

    constructor() {
    }

    public setActiveCard(card: Card) {
        this.cardSubject.next(card);
    }
}
