import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { WithdrawAmountComponent } from './withdraw-amount/withdraw-amount.component';
import { BalanceComponent } from './balance/balance.component';

const routes: Routes = [
  { path:'' , component:CardDetailComponent },  
  { path:'card-detail' , component:CardDetailComponent },
  { path:'withdraw' , component: WithdrawAmountComponent},
  { path:'balance' , component: BalanceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
