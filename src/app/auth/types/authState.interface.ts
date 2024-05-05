import { CurrentUserInterface } from './../../shared/currentUser.interface';
import { BackendErrorsInterface } from './backendErros.interface';
export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null | undefined;
  isLoading: boolean;
  validationsErrors: BackendErrorsInterface | null;
}
