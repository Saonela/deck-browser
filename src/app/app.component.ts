import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

    ngOnInit() {
    }

    public toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('active');
    }
}
