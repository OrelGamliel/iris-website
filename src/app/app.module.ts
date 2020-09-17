import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcclimationInIsraelComponent } from './acclimation-in-israel/acclimation-in-israel.component';
import { ConversationsBetweenGenerationsComponent } from './conversations-between-generations/conversations-between-generations.component';
import { ExodusComponent } from './exodus/exodus.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { FirstGenerationComponent } from './first-generation/first-generation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { UpdatesComponent } from './updates/updates.component';
import { LightboxModule } from 'ngx-lightbox';
import { Routes , RouterModule } from '@angular/router';

const appRoutes: Routes = [
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
  declarations: [
    AppComponent,
    AcclimationInIsraelComponent,
    ConversationsBetweenGenerationsComponent,
    ExodusComponent,
    FamilyTreeComponent,
    FirstGenerationComponent,
    FooterComponent,
    HeaderComponent,
    HistoryComponent,
    HomeComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    LightboxModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
