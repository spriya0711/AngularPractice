import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-btn',
  standalone: true,
  imports: [],
  templateUrl: './child-btn.component.html',
  styleUrl: './child-btn.component.scss'
})
export class ChildBtnComponent {

  @Output()
  btnChild = new EventEmitter;

  childClick() {
    this.btnChild.emit();
  }

}
