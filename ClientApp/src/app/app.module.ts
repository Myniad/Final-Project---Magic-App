import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';
import { SinglecardComponent } from './singlecard/singlecard.component';
import { Secret } from './secret';
import { CommonModule } from '@angular/common';
import { AlldecksComponent } from './alldecks/alldecks.component';
import { DeckviewComponent } from './deckview/deckview.component';
import { CreateDeckComponent } from './createdeck/createdeck.component';
import { UserdecksComponent } from './userdecks/userdecks.component';
import { GlossaryComponent } from './glossary/glossary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,

    CardcomponentComponent,
    AlldecksComponent,
    DeckviewComponent,
    SinglecardComponent,
    CreateDeckComponent,
    UserdecksComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },

      { path: 'Card', component: CardcomponentComponent},
      { path: 'Deckview/:ID', component: DeckviewComponent},
      { path: 'Decklist', component: AlldecksComponent},
      { path: 'search/:cardName', component: CardcomponentComponent},
      { path: 'card/:cardName', component: SinglecardComponent},
      { path: 'CreateDeck', component: CreateDeckComponent},
      { path: 'userdecks', component: UserdecksComponent},
      { path: 'Glossary', component:GlossaryComponent}


    ])
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              Secret.clientId
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
