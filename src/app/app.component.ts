import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public gameInProgress: boolean = true
  public finishType: string

  public finishGame(type: string):void  {
    this.gameInProgress = false
    this.finishType = type
  }

  public refreshGame(): void {
    this.gameInProgress = true
    this.finishType = undefined
  }
}
