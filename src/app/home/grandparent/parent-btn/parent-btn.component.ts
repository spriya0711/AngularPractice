import { Component, EventEmitter, Output } from '@angular/core';
import { ChildBtnComponent } from './child-btn/child-btn.component';

@Component({
  selector: 'app-parent-btn',
  standalone: true,
  imports: [ChildBtnComponent],
  templateUrl: './parent-btn.component.html',
  styleUrl: './parent-btn.component.scss'
})
export class ParentBtnComponent {
@Output()
parentBtn = new EventEmitter;

parentClick(){
  this.parentBtn.emit();
}
}
