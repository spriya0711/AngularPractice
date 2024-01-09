import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-data.component.html',
  styleUrl: './child-data.component.scss'
})
export class ChildDataComponent {
@Input()
toggle:boolean = false;

@Input()
detailsFromChild:any;
 
}
