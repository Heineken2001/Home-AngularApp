import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ken',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a [routerLink]="['/home']">
      Back to home page
    </a>
  `,
  styleUrls: ['./ken.component.css']
})
export class KenComponent {

}
