import { Component } from '@angular/core';

@Component({
      selector: 'app-header',// TAG = Padão baseado em rótulo
      //selector: '[app-header]',// ATRIBUTO
      //selector: '.app-header',// CLASSE 
      templateUrl: './header.component.html',   
      // template: `<p>
      //             Component header
      //            </p>`   
      styleUrls: ['./header.component.css']
      //styles: ['.example{color: red}']
})
export class HeaderComponent {
      public title: string = 'Aprendendo Inglês'
}