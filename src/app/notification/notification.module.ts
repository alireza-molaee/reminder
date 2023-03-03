import { APP_INITIALIZER, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationConfigurationService } from "./notification-configuration.service";
import { AbstractNotifier } from "./abstract-notifier";
import { DefaultNotifierService } from "./default-notifier.service";
import { firstValueFrom } from "rxjs";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: NotificationConfigurationService) => () => {
        firstValueFrom(configService.loadConfiguration());
      },
      deps: [NotificationConfigurationService],
      multi: true,
    },
    {
      provide: AbstractNotifier,
      useClass: DefaultNotifierService,
    },
  ],
})
export class NotificationModule {}
