import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserNewComponent } from './user-new/user-new.component';

@NgModule({
  declarations: [UserComponent, UserLoginComponent, UserNewComponent],
  imports: [CommonModule],
})
export class UserModule {}
