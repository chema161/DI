import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuToolbar } from './menu-toolbar/menu-toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuToolbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}