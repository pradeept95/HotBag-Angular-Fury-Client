import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "app/shared/material-components.module";
import { BreadcrumbsModule } from "app/core/breadcrumbs/breadcrumbs.module";
import { UserProfileComponent } from "./user-profile.component";
import { UserProfileRoutingModule } from "./user-profile-routing.module";
import { UserInfoService } from "shared/Services/user-info.service";
import { AppUserService } from "shared/Services/appuser.service";

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule,
    MaterialModule,
    // Core
    BreadcrumbsModule
  ],
  providers: [UserInfoService, AppUserService],
  bootstrap: [UserProfileComponent]
})
export class UserProfileModule {}
