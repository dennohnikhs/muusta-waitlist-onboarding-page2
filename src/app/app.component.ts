import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { HeroSectionMoreComponent } from "./hero-section-more/hero-section-more.component";
import { QuestionsAskedComponent } from "./questions-asked/questions-asked.component";
import { SubscribeMuustaComponent } from "./subscribe-muusta/subscribe-muusta.component";

@Component({
  selector: "app-root",

  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    HeroSectionMoreComponent,
    QuestionsAskedComponent,
    SubscribeMuustaComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
