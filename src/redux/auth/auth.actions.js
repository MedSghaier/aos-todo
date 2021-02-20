import AuthTypes from './auth.types';

export const login = () => {
    return {
        type:AuthTypes.LOGIN
    }
}
export const logout = () => {
    return {
        type:AuthTypes.LOGOUT
    }
}