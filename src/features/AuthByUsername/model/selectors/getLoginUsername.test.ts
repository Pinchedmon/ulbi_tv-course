import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '1232132',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('1232132');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginUsername(state as StateSchema)).toEqual(undefined);
    });
});
