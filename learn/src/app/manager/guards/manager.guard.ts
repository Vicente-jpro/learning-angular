import { CanActivateChildFn } from '@angular/router';

export const managerGuard: CanActivateChildFn = (childRoute, state) => {
  return false;
};
