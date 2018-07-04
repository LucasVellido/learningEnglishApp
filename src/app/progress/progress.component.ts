import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  /**pegando o atributo do elemento pai, se a variavel for o mesmo nome pode deixar igual do dois lado,
     mas se for diferente, pode dar o nome desejado */
  @Input('canBeAnotherName')
  public progress: number = 0

  constructor() { }

  ngOnInit() {
  }

}
