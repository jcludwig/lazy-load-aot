import { Component } from '@angular/core';

@Component({
  selector: 'lazy-component',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent {
  title = 'Lazy component';
}
