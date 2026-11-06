import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-toolbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-toolbar.html',
  styleUrl: './menu-toolbar.css',
})
export class MenuToolbar {}