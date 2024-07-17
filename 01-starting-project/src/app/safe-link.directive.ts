import { Directive } from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]', // Attribute selector.
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeavePage = window.confirm('Do you want to leave the app?');

    if (wantsToLeavePage) {
      return;
    } else {
      event.preventDefault();
    }
  }
}
