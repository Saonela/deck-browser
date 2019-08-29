import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {CardListComponent} from './card-list.component';
import {CardAPIService} from '../card-api.service';
import {defer} from 'rxjs';
import {CardListItemComponent} from './card-list-item/card-list-item.component';

fdescribe('CardListComponent', () => {
    let component: CardListComponent;
    let fixture: ComponentFixture<CardListComponent>;

    const mockCardAPIService = {
        getCardList: () => {
            return defer(() => Promise.resolve([1, 2, 3]));
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

    it('should load card list', fakeAsync((() => {
        fixture.detectChanges();

        expect(TestHelper.getLoader()).toBeTruthy();
        expect(TestHelper.getList().length).toBeFalsy();

        tick();
        fixture.detectChanges();

        expect(TestHelper.getLoader()).toBeFalsy();
        expect(TestHelper.getList().length).toBe(3);
    })));

    const TestHelper = {
        getLoader: () => {
            return fixture.nativeElement.querySelector('.loader');
        },
        getList: () => {
            return fixture.nativeElement.querySelectorAll('.card-list__item');
        }
    };
});
