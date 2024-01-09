import { Component, Input } from '@angular/core';
import { ChildDataComponent } from './child-data/child-data.component';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [ChildDataComponent],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.scss'
})
export class ParentDataComponent {

@Input()
detailsFromParent:any;

}
