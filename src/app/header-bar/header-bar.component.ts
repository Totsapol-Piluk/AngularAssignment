import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent {
  firstName = 'Lekan';
  lastName = 'Okeowo';
  role = 'Admin';
}
