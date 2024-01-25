import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() showdata = 0;
  @Input() istoggle: any = false;

  @Output() toggleChange = new EventEmitter<boolean>();

  toggle() {
    this.istoggle = !this.istoggle;
    this.toggleChange.emit(this.istoggle);
  }
}
