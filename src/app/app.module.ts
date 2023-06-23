import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LiveNewPairsComponent } from './pages/live-new-pairs/live-new-pairs.component';
import { AiEditorComponent } from './pages/ai-editor/ai-editor.component';
import { CardComponent } from './components/card/card.component';
import { NftsComponent } from './pages/nfts/nfts.component';
import { WalletComponent } from './pages/wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioComponent,
    LiveNewPairsComponent,
    AiEditorComponent,
    CardComponent,
    NftsComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
