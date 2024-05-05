import { CurrentUserInterface } from '../../shared/currentUser.interface';
import { BackendErrorsInterface } from '../types/backendErros.interface';
import { RegisterRequestInterface } from './../types/registerRequest.interface';
import { createActionGroup, props } from '@ngrx/store';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register success': props<{ currentUser: CurrentUserInterface }>(),
    'Register Failure': props<{ errors: BackendErrorsInterface }>(),
  },
});

// export const register = createAction(
//   '[Auth] Register',
//   props<{ request: RegisterRequestInterface }>()
// );
// export const registerSuccess = createAction(
//   '[Auth] RegisterSuccess',
//   props<{ request: RegisterRequestInterface }>()
// );
// export const registerFailure = createAction(
//   '[Auth] RegisterFailure',
//   props<{ request: RegisterRequestInterface }>()
// );
