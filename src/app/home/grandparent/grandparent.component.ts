import { Component } from '@angular/core';
import { ParentBtnComponent } from './parent-btn/parent-btn.component';
import { ParentDataComponent } from './parent-data/parent-data.component';
import { ChildDataComponent } from './parent-data/child-data/child-data.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grandparent',
  standalone: true,
  imports: [ParentBtnComponent, ParentDataComponent, ChildDataComponent, CommonModule],
  templateUrl: './grandparent.component.html',
  styleUrl: './grandparent.component.scss'
})
export class GrandparentComponent {
toggle:boolean=false;

  grandparentClick(){
    this.toggle = !this.toggle;
    console.log("Toggle Toggle");
  }

  users: any = [
    {
      id:1,
      name:"Gemini",
      country: "USA",
    },
    {
      id:2,
      name:"TrueCoverage",
      country: "India",
    },
    {
      id:3,
      name:"AzimPremji",
      country: "Canada",
    },
    {
      id:4,
      name:"Zool",
      country: "Singapore",
    }
  ]
}
