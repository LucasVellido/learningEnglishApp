import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Phrase } from './../shared/phrase.model'
import { PHRASES } from './phrases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public phrases: Array<Phrase> = PHRASES
  public answer: string = ''
  public round: number = 0
  public roundPhrase: Phrase
  public progress: number = 0
  public attempts: number = 3
  @Output() public finishGame: EventEmitter<string> = new EventEmitter()

  constructor() {
    //atualizar o obj roundPhrase
    this.updateRound()
  }

  ngOnInit() {
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value
  }

  public verifyAnswer(): void {

    if (this.roundPhrase.phrasePtBr.toLowerCase() == this.answer.toLowerCase().trim()) {     

      if (this.round < this.phrases.length) {
        this.round++
        this.progress += (100 / this.phrases.length)

        if (this.round == this.phrases.length) {
          this.finishGame.emit('victory')          
        }
        //atualizar o obj roundPhrase
        this.updateRound()
      }

    } else {
      //decrementandos o numero de tentativas
      this.attempts--

      if (this.attempts === -1){
        this.finishGame.emit('gameOver')
      }
    }
  }

  public updateRound(): void {
    //atualizar o obj roundPhrase
    this.roundPhrase = this.phrases[this.round]
    //limpar o textarea, pois no textarea tem property bind pegando o valor da variavel answer no atributo [VALUE]="answer" 
    this.answer = ''
  }

  ngOnDestroy() {
    console.log('O componente painel foi destruido')
  }
}
