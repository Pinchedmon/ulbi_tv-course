import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1232132',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('1232132');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginPassword(state as StateSchema)).toEqual(undefined);
    });
});
