import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PanelGuard } from './services/panel.guard';
import { PanelService } from './services/panel.service';
import { PanelHomeComponent } from './panel-home/panel-home.component';
import { PanelRoutes } from './panel.route';
import { PanelAppComponent } from './panel.app.component';


@NgModule({
  declarations: [
    PanelAppComponent
  ],
 imports: [
     CommonModule,
     ReactiveFormsModule,
     HttpClientModule,
     RouterModule.forChild(PanelRoutes),
     PanelHomeComponent
   ],
  providers: [
    provideHttpClient(),
    PanelService,
    PanelGuard]
})
export class PanelModule { }
