import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Heart } from './../shared/heart.model';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {

  public emptyHeart: string = '/assets/coracao_vazio.png'
  public fullHeart: string = '/assets/coracao_cheio.png'

  @Input()
  public attempts: number

  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true),
  ]

  constructor() {}

  ngOnChanges() {
    if (this.attempts !== this.hearts.length) {
      let index = this.hearts.length - this.attempts
      this.hearts[index - 1].full = false
    }
  }

  ngOnInit() {
    
  }

}
