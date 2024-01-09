import { Component, EventEmitter, Output } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
gender:any;

@Output()
selectGenderEvent = new EventEmitter();

takeButtonValue(event:any){
  this.gender = event.target.value;
  this.selectGenderEvent.emit(this.gender);
  console.log(this.gender);
  
}

}
