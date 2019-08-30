import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardListItemComponent} from './card-list-item.component';
import {MockFactory} from '../../test/mock-factory.service';
import {CardService} from '../../card.service';

describe('CardListItemComponent', () => {
    let component: CardListItemComponent;
    let fixture: ComponentFixture<CardListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardListItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardListItemComponent);
        component = fixture.componentInstance;
        component.card = MockFactory.getCard();
        fixture.detectChanges();
    });

    it('should show card meta', () => {
        expect(TestHelper.getCardName().innerText).toBe('Test card');
        expect(TestHelper.getCardType().innerText).toBe('Monster');
    });

    it('should set card type color class', () => {
        let cardTypeElem = TestHelper.getCardType();
        expect(cardTypeElem.classList.contains('monster-card-type-color')).toBeTruthy();

        component.card = MockFactory.getCard(CardService.CARD_TYPES.SPELL);
        fixture.detectChanges();
        expect(cardTypeElem.classList.contains('spell-card-type-color')).toBeTruthy();

        component.card = MockFactory.getCard(CardService.CARD_TYPES.TRAP);
        fixture.detectChanges();
        expect(cardTypeElem.classList.contains('trap-card-type-color')).toBeTruthy();
    });

    it('should add active class', () => {
        let cardElem = TestHelper.getCard();

        expect(cardElem.classList.contains('card--active')).toBeFalsy();
        component.isActive = true;
        fixture.detectChanges();
        expect(cardElem.classList.contains('card--active')).toBeTruthy();
    });

    const TestHelper = {
        getCard: () => {
            return fixture.nativeElement.querySelector('.card');
        },
        getCardName: () => {
            return fixture.nativeElement.querySelector('.card__name');
        },
        getCardType: () => {
            return fixture.nativeElement.querySelector('.card__type');
        }
    };

});
