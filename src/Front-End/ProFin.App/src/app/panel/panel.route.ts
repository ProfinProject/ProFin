import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelGuard } from './services/panel.guard';
import { PanelHomeComponent } from './panel-home/panel-home.component';
import { PanelAppComponent } from './panel.app.component';

export const PanelRoutes: Routes = [
    {
        path: '',
        component: PanelAppComponent,
        children: [
            { path: '', component: PanelHomeComponent, canActivate: [PanelGuard] }
        ]
    }
];
