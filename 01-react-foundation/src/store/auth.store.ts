import { create } from 'zustand'

interface IAuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: IUser;
    login: (email: string, password: string) => void
    logout: () => void
}

interface IUser {
    name: string;
    email:string;
}

    
export const useAuthStore = create<IAuthState>()( (set) => ({
    status: 'checking',
    token: undefined,
    user: undefined,
    login: (email: string, password: string) => {
        set({
            status: 'authenticated',
            token: 'ABC123',
            user: {
                name: 'Pedro Builes',
                email
            }
        })
    },
    logout: () => {
        set({
            status: 'unauthenticated', 
            token: undefined,
            user: undefined
        })
    }
}))