interface IAuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: IUser;
}

interface IUser {
    name: string;
    email:string;
}

