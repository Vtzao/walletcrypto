import { WalletComponent } from './pages/wallet/wallet.component';
import { NftsComponent } from './pages/nfts/nfts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AiEditorComponent } from './pages/ai-editor/ai-editor.component';
import { LiveNewPairsComponent } from './pages/live-new-pairs/live-new-pairs.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'ai-editor',component:AiEditorComponent},
  {path:'live-new-pairs',component:LiveNewPairsComponent},
  {path:'nfts',component:NftsComponent},
  {path:'wallet',component:WalletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
