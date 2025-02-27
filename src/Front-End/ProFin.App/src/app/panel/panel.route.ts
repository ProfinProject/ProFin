import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelGuard } from './services/panel.guard';

import { PanelAppComponent } from './panel.app.component';
import { PanelHomeComponent } from './components/panel-home/panel-home.component';

export const PanelRoutes: Routes = [
    {
        path: '',
        component: PanelAppComponent,
        children: [
            { path: '', component: PanelHomeComponent, canActivate: [PanelGuard] }
        ]
    }
];
