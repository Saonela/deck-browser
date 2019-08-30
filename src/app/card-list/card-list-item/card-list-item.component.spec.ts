import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardListItemComponent} from './card-list-item.component';
import {MockFactory} from '../../test/mock-factory.service';

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

    it('should add active class', () => {
        expect(TestHelper.getCard().classList.contains('card--active')).toBeFalsy();
        component.isActive = true;
        fixture.detectChanges();
        expect(TestHelper.getCard().classList.contains('card--active')).toBeTruthy();
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
