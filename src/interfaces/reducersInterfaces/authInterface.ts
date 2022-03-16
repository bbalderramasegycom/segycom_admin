
export interface Auth {
    type: string,
    payload: User
}

export interface AuthState {
    auth: User
}

export interface User {
    uid: string,
    displayName: string,
    logged: boolean,
    error: boolean,
}
