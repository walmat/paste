import {Component, OnInit} from '@angular/core';
import { QueueService } from '../services/queue.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

    constructor(private queue: QueueService) { }

    ngOnInit() {
        this.queue.push();
    }
}
