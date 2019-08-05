import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Testing Angular App';

  navLinks = [
    { path: "students", label:"Students" },
    { path: "studentAdd", label:"Add Student" }
  ];
  activeLink = this.navLinks[0];
}
