import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'; // Literal Types
  private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef); // Alternative to ngOnDestroy LifeCycle. v16+

  constructor() { }

  // Runs after Angular has initialized all the Component's inputs !!
  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.9999999999

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 4000);

    // Alternative to ngOnDestroy LifeCycle. v16+
    this.destroyRef.onDestroy(() => {
      clearInterval(this.interval);
    });
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
