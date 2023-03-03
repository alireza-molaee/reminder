import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NotifierConfig } from "./notification.types";
import { HttpClient } from "@angular/common/http";
import { shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class NotificationConfigurationService {
  private readonly CONFIG_URL = "assets/notification.config.json";
  private config$!: Observable<NotifierConfig>;

  configuration!: NotifierConfig;

  constructor(private httpClient: HttpClient) {}

  loadConfiguration() {
    this.config$ = this.httpClient
      .get<NotifierConfig>(this.CONFIG_URL)
      .pipe(shareReplay(1));
    this.config$.subscribe((config) => (this.configuration = config));

    return this.config$;
  }
}
