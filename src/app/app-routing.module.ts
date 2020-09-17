import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdatesComponent } from './updates/updates.component';
import { ConversationsBetweenGenerationsComponent } from './conversations-between-generations/conversations-between-generations.component';
import { AcclimationInIsraelComponent } from './acclimation-in-israel/acclimation-in-israel.component';
import { ExodusComponent } from './exodus/exodus.component';
import { HistoryComponent } from './history/history.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { FirstGenerationComponent } from './first-generation/first-generation.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'firstGenration', component: FirstGenerationComponent},
  { path: 'family-tree', component: FamilyTreeComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'exodus', component: ExodusComponent},
  { path: 'acclimation-in-israel', component: AcclimationInIsraelComponent},
  { path: 'conversations-between-generations', component: ConversationsBetweenGenerationsComponent},
  { path: 'updates', component: UpdatesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
