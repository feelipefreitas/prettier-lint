import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-lint';

  oi() {
    // debugger;
    // console.log('FELIPE LINDO');
    const t = 'Olá';
  }
}
