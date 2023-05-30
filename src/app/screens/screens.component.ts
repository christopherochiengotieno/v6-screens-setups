import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss']
})
export class ScreensComponent implements OnInit {
  rates:any =[];
  rate:any;
  // rateForm:FormGroup;
  new:Boolean=true;
  filterBy:any;
  constructor( 
    //  public fb:FormBuilder,
    public cdr: ChangeDetectorRef,
    // private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }
  add(){
    this.new = true;
  }
}
