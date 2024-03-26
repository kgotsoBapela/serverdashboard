import { Component, input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'This is a server'}];
}
