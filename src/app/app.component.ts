import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-biding-app';
  hidden : boolean = true;
  count : number = 0;

  onClick(){
    this.count++;
  }

  onDoubleClick(){
    if(this.hidden === false){
      this.hidden = true;
    }
    else{
      this.hidden = false;
    }
  }
  
}
