import {Component, OnInit} from '@angular/core';
import {SplashService} from '../services/splash.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

    constructor(private splash: SplashService) {}

    ngOnInit() {
        this.splash.add();
    }
}
