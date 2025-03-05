import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseService } from "../../services/base.service";
import { Panel } from "../components/models/panel.model";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
import { PanelAlert } from "../components/models/panel-alert.model";

@Injectable()
export class PanelService extends BaseService {
    constructor(private http: HttpClient) { super(); }

    getPanels(): Observable<Panel[]> {
        return this.http.get<Panel[]>(environment.apiUrlv1 + "Panels/Panels", this.getAuthHeaderJson());
    }

    getAlerts(): Observable<PanelAlert[]> {
        return this.http.get<PanelAlert[]>(environment.apiUrlv1 + "Panels/Alerts", this.getAuthHeaderJson());
    }
}