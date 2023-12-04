import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})

export class LandingPageComponent {
  days: number = 360;
  hours: number = 24;
  minutes: number = 59;
  seconds: number = 0;
  private countdownInterval: any; // Store the interval reference

  constructor() {}

  ngOnInit() {
    console.log('Countdown component initialized');

    // Retrieve the countdown state from local storage
    const storedCountdownState = localStorage.getItem('countdownState');
    if (storedCountdownState) {
      const parsedCountdownState = JSON.parse(storedCountdownState);
      this.days = parsedCountdownState.days;
      this.hours = parsedCountdownState.hours;
      this.minutes = parsedCountdownState.minutes;
      this.seconds = parsedCountdownState.seconds;
    }

    this.startCountdown();
  }

  ngOnDestroy() {
    console.log('Countdown component destroyed');

    // Save the countdown state to local storage
    const countdownState = {
      days: this.days,
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds
    };
    localStorage.setItem('countdownState', JSON.stringify(countdownState));

    this.stopCountdown();
  }

  private startCountdown() {
    console.log('Countdown started');
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  private stopCountdown() {
    console.log('Countdown stopped');
    clearInterval(this.countdownInterval);
  }

  private updateCountdown() {
    if (this.seconds > 0) {
      this.seconds--;
    } else {
      this.seconds = 59;

      if (this.minutes > 0) {
        this.minutes--;
      } else {
        this.minutes = 59;

        if (this.hours > 0) {
          this.hours--;
        } else {
          this.hours = 24;

          if (this.days > 0) {
            this.days--;

            // Save the updated countdown state to local storage
            const countdownState = {
              days: this.days,
              hours: this.hours,
              minutes: this.minutes,
              seconds: this.seconds
            };
            localStorage.setItem('countdownState', JSON.stringify(countdownState));
          }
        }
      }
    }
  }
}
