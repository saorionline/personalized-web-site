import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/layout/top-nav/top-nav.component';
import { SideNavComponent } from './components/layout/side-nav/side-nav.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ColorCustomizerComponent } from './components/layout/color-customizer/color-customizer.component';
import { PreloaderComponent } from './components/layout/preloader/preloader.component';
import { IconsComponent } from './components/dashboards/icons/icons/icons.component';
import { FeatherIconsComponent } from './components/dashboards/icons/feather-icons/feather-icons.component';
import { LineIconsComponent } from './components/dashboards/icons/line-icons/line-icons.component';
import { IcofontIconsComponent } from './components/dashboards/icons/icofont-icons/icofont-icons.component';
import { OthersComponent } from './components/dashboards/others/others/others.component';
import { UsersCardComponent } from './components/dashboards/others/users-card/users-card.component';
import { NotificationsComponent } from './components/dashboards/others/notifications/notifications.component';
import { TimelineComponent } from './components/dashboards/others/timeline/timeline.component';
import { InvoiceTemplateComponent } from './components/dashboards/others/invoice-template/invoice-template.component';
import { GalleryComponent } from './components/dashboards/others/gallery/gallery.component';
import { FaqComponent } from './components/dashboards/others/faq/faq.component';
import { PricingComponent } from './components/dashboards/others/pricing/pricing.component';
import { ProfileComponent } from './components/dashboards/others/profile/profile.component';
import { ProfileSettingsComponent } from './components/dashboards/others/profile-settings/profile-settings.component';
import { ErrorComponent } from './components/dashboards/others/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    FooterComponent,
    ColorCustomizerComponent,
    PreloaderComponent,
    IconsComponent,
    FeatherIconsComponent,
    LineIconsComponent,
    IcofontIconsComponent,
    OthersComponent,
    UsersCardComponent,
    NotificationsComponent,
    TimelineComponent,
    InvoiceTemplateComponent,
    GalleryComponent,
    FaqComponent,
    PricingComponent,
    ProfileComponent,
    ProfileSettingsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
