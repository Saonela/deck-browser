import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {CardListComponent} from './card-list.component';
import {CardAPIService} from '../card-api.service';
import {defer} from 'rxjs';
import {CardListItemComponent} from './card-list-item/card-list-item.component';
import {CardService} from '../card.service';
import {Card} from '../models/card.model';

describe('CardListComponent', () => {
    let component: CardListComponent;
    let fixture: ComponentFixture<CardListComponent>;

    const mockCardAPIService = {
        getCardList: () => {
            return defer(() => Promise.resolve([{name: 'Card 1'}, {name: 'Card 2'}, {name: 'Card 3'}] as Card[]));
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardListComponent, CardListItemComponent],
            providers: [
                { provide: CardAPIService, useValue: mockCardAPIService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardListComponent);
        component = fixture.componentInstance;
    });

    it('should load card list and set active card', fakeAsync((() => {
        const spy = spyOn(TestBed.get(CardService), 'setActiveCard');
        fixture.detectChanges();

        expect(TestHelper.getLoader()).toBeTruthy();
        expect(TestHelper.getList().length).toBeFalsy();

        tick();
        fixture.detectChanges();

        expect(TestHelper.getLoader()).toBeFalsy();
        expect(TestHelper.getList().length).toBe(3);
        expect(TestHelper.getListItem(1).innerText.trim()).toBe('Card 2');

        const card: Card = {name: 'Card 1'} as Card;
        expect(component.activeCard).toEqual(card);
        expect(spy).toHaveBeenCalledWith(card);
    })));

    it('should set active card on click', fakeAsync((() => {
        const spy = spyOn(TestBed.get(CardService), 'setActiveCard');
        fixture.detectChanges();
        tick();
        fixture.detectChanges();

        TestHelper.getListItem(1).click();

        const card: Card = {name: 'Card 2'} as Card;
        expect(component.activeCard).toEqual(card);
        expect(spy).toHaveBeenCalledWith(card);
    })));


    const TestHelper = {
        getLoader: () => {
            return fixture.nativeElement.querySelector('.loader');
        },
        getList: () => {
            return fixture.nativeElement.querySelectorAll('.card-list__item');
        },
        getListItem: (i) => {
            return TestHelper.getList()[i];
        }
    };
});
