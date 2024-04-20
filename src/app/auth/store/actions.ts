import { RegisterRequestInterface } from './../types/registerRequest.interface';
import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestInterface }>()
);
