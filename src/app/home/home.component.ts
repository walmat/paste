import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
      (function (window, document) {
          const clock = new Clock();

          clock.bindTo(document.getElementById('clock'));
          clock.start();
      } (window, document));
  }

}

/**
 * Creates a basic clock and binds it to a specified element
 */
class Clock {
    timeTemplate = Clock.get();
    clockHandler: number;
    target: HTMLElement;

    /**
     * @return string, time
     */
    static get() {
        let ap;
        const date = new Date();
        if (date.getHours() > 12) {
            ap = 'PM';
        } else { ap = 'AM'; }
        return [date.getHours() - 12, date.getMinutes(), date.getSeconds()]
            .map(current => current >= 10 ? current : '0' + current).join(':')
            + ' ' + ap + ' ' +  date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
    }

    /**
     * Starts the clock
     */
    start(): void {
        /*
        I use the bind method to specify the "this" for interval's callback, because
        interval runs on a seperate execution context, and so the keyword this,
        initialy refers to the window object.
        */
        this.clockHandler = setInterval(function (parent) {
            this.target.innerHTML = Clock.get();
        }.bind(this), 100);
    }

    /**
     * Stops the clock by stoping the clock's interval
     */
    stop(): void {
        clearInterval(this.clockHandler);
    }

    /**
     * Binds the Clock to specified element's content
     * @param elem
     */
    bindTo(elem): void {
        this.target = elem;
        this.target.innerHTML = this.timeTemplate;
    }
}

