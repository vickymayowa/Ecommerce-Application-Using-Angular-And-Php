import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  days: number = 360;
  hours: number = 24;
  minutes: number = 59;
  seconds: number = 0;
  private countdownInterval: any; // Store the interval reference

  constructor() {}

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  private startCountdown() {
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  private stopCountdown() {
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
          } else {
            // Countdown has reached zero, you can handle this case as needed
            this.stopCountdown(); // Stop the countdown when it reaches zero
          }
        }
      }
    }
  }
}
