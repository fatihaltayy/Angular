import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
  Merhaba <br> {{adi}}  
  <br>
  <button [class.kirmizi]='adi==""' style="width:100px;height:30px" 
  (click)=Test()>TIKLA</button> <br>
  <input type="text" [(ngModel)]='adi' [disabled]='kapali'>
  
  `,
  styles: [`
    .kirmizi {
    color:yellow;
    background-color:red;    
    }
    .egik{
      font-style:italic;
            
    }
    `]
})
export class AppComponent {
  adi:string = 'IlkProje';
  kapali:boolean = false;
  buttonSinifi ={kirmizi :true,adi:'ahmet',}

  getAdi(){
    return this.adi +"!";
  }

    Test(){
    this.adi = "Ahmet";
    this.kapali =!this.kapali 
    this.buttonSinifi.kirmizi=this.kapali;
    
  }
  
}
