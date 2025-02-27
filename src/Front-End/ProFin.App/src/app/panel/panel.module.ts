import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PanelGuard } from './services/panel.guard';
import { PanelService } from './services/panel.service';
import { PanelRoutes } from './panel.route';
import { PanelAppComponent } from './panel.app.component';
import { PanelHomeComponent } from './components/panel-home/panel-home.component';
import { PanelDetailComponent } from './components/panel-detail/panel-detail.component';


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
    PanelGuard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PanelModule { }
