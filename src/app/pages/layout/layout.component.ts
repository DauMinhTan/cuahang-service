import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../../components/footer/footer.component";
import {TuiRootModule} from "@taiga-ui/core";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    TuiRootModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
