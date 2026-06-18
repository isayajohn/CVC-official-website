import { Component } from "@angular/core";
import { LandingEventsComponent } from "./components/landing-events/landing-events.component";
import { LandingHeroComponent } from "./components/landing-hero/landing-hero.component";
import { LandingJourneyComponent } from "./components/landing-journey/landing-journey.component";
import { LandingMinistriesComponent } from "./components/landing-ministries/landing-ministries.component";
import { LandingMusicComponent } from "./components/landing-music/landing-music.component";
import { LandingStoryComponent } from "./components/landing-story/landing-story.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [
    LandingHeroComponent,
    LandingStoryComponent,
    LandingMinistriesComponent,
    LandingMusicComponent,
    LandingEventsComponent,
    LandingJourneyComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomePageComponent {}
