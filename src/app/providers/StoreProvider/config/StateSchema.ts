import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    loginForm: LoginSchema;
    counter: CounterSchema;
    user: UserSchema;
}
