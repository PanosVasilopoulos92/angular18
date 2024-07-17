import { Component, ContentChild, ElementRef, HostBinding, HostListener, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()' // Event Binding. Similar with @HostListener, preferred approach.
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';  // It is recommended to use the 'host' approach above and not the 'HostBinding()'

  // @HostListener('click') onClick2() {
  //   console.log('Clicked!');
  // }

  // The template variable won't be in the placeholder of this template's Component but to the template of the corresponding Component.
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  label = input.required<string>();

  onClick() {
    console.log('Clicked!');
    console.log(this.control);
  }
}
