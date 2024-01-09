import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { GrandparentComponent } from './grandparent/grandparent.component';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, FilterComponent, GrandparentComponent, DemoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
users : any = [
{
  "id":1,
  "name":"Priya",
  "gender":"F",
  "image":"https://w7.pngwing.com/pngs/802/317/png-transparent-free-happy-girl-pull-material-happy-girl-excited-people-creative-cartoon-characters-thumbnail.png"
},
{
  "id":2,
  "name":"Shameer",
  "gender":"M",
  "image":"https://static.vecteezy.com/system/resources/thumbnails/023/589/073/small/cute-happy-ilttle-boy-character-created-with-generative-ai-png.png"
},
{
  "id":3,
  "name":"Nisarga",
  "gender":"F",
  "image":"https://w7.pngwing.com/pngs/802/317/png-transparent-free-happy-girl-pull-material-happy-girl-excited-people-creative-cartoon-characters-thumbnail.png"
},
{
  "id":4,
  "name":"Prabha",
  "gender":"M",
  "image":"https://static.vecteezy.com/system/resources/thumbnails/023/589/073/small/cute-happy-ilttle-boy-character-created-with-generative-ai-png.png"
},
{
  "id":5,
  "name":"Priya",
  "gender":"F",
  "image":"https://w7.pngwing.com/pngs/802/317/png-transparent-free-happy-girl-pull-material-happy-girl-excited-people-creative-cartoon-characters-thumbnail.png"
},
{
  "id":6,
  "name":"Maruthi",
  "gender":"M",
  "image":"https://static.vecteezy.com/system/resources/thumbnails/023/589/073/small/cute-happy-ilttle-boy-character-created-with-generative-ai-png.png"
},
{
  "id":7,
  "name":"Amrit",
  "gender":"M",
  "image":"https://static.vecteezy.com/system/resources/thumbnails/023/589/073/small/cute-happy-ilttle-boy-character-created-with-generative-ai-png.png"
},
{
  "id":8,
  "name":"Pooja",
  "gender":"F",
  "image":"https://w7.pngwing.com/pngs/802/317/png-transparent-free-happy-girl-pull-material-happy-girl-excited-people-creative-cartoon-characters-thumbnail.png"
},
{
  "id":9,
  "name":"Muhushin",
  "gender":"M",
  "image":"https://static.vecteezy.com/system/resources/thumbnails/023/589/073/small/cute-happy-ilttle-boy-character-created-with-generative-ai-png.png"
},
]

inputVal:string='';

onBtnClick(inputEl:HTMLInputElement){
this.inputVal = inputEl.value;
}
  
}
