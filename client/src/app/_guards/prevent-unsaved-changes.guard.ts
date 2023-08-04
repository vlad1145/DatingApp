import { Injectable, inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { ConfirmService } from '../_services/confirm.service';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  const confirmService = inject(ConfirmService);

  if(component.editForm?.dirty){
    return confirmService.confirm();
  }

  return true;
};





// @Injectable({
//   providedIn: 'root'
// })

// export class PreventUnsavedChangesGuard implements CanDeactivate<MemberEditComponent> {
//   canDeactivate(component: MemberEditComponent): boolean {
//     const confirmService = inject(ConfirmService);

//     if(component.editForm?.dirty) {
//       return confirmService.confirm();
//     }
//     return true;
//   }
  
// }
