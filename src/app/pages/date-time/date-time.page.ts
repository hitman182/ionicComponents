import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci:Date =new Date();

  customYearsValues=[2025,2020,2016,2008,2004,2000,1996];
  customPickerOptions={
  buttons:[
    {
      text:'hola',
      handler:(event)=>{
        console.log(event);
        
      }
    },
    {
      text:'mundo',
      handler:(event)=>{
        console.log('log');
        
      }
    },

  ]
  }
  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
    //console.log(event.detail.value);
    console.log(new Date(event.detail.value));
  }

}
