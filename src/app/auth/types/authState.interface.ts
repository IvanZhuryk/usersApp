import { BackendErrorsInterface } from '../../shared/types/BackendErrors.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

export interface AuthInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null | undefined;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
}
