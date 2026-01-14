import { Component,signal } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [RouterOutlet]
})
export class App {
    protected  readonly title =signal('My Recipe Box') ;
    button1Text= signal('')
    button2Text= signal('')
    constructor() { }
     count1 =signal(false)
    count2 =signal(false)
   protected onButton1Click(){
        this.count1.update(prev => !prev)
       if (this.count1()) {
           this.button1Text.set('button 1 clicked');
       } else {
           this.button1Text.set('');
       }
    }
   protected onButton2Click(){
        this.count2.update(prev => !prev)
       if(this.count2()){
        this.button2Text.set('button 2 clicked')}
       else{
        this.button2Text.set('')}
    }
}
