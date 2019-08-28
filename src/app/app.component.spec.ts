import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should make sidebar active on button click', () => {
        const sidebar = TestHelper.getSidebar();
        expect(sidebar.classList.contains('active')).toBeFalsy();
        TestHelper.getSidebarToggleButton().click();
        expect(sidebar.classList.contains('active')).toBeTruthy();
    });

    const TestHelper = {
        getSidebar: () => {
            return fixture.nativeElement.querySelector('#sidebar');
        },
        getSidebarToggleButton: () => {
            return fixture.nativeElement.querySelector('.sidebar-toggle-button');
        }
    };
});
