import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked {

  @Input() message: string;
  @ContentChild('para') paraContent: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Hook called');
    console.log(changes);
    console.log('Trying to log paraContent here ' + this.paraContent)
  }

  ngOnInit() {
    console.log('ngOnInit Hook called');
  }

  ngDoCheck() {
    console.log('ngDoCheck Hook called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit Hook called');
    console.log(this.paraContent.nativeElement.textContent)
  }

 
  ngAfterContentChecked(){
    console.log(this.paraContent.nativeElement.textContent);
  }

}
