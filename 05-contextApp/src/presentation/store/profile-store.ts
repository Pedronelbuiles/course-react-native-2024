import {create} from 'zustand';

export interface ProfileState {
  name: string;
  email: string;

  changeProfile: (name: string, email: string) => void;
}

export const useProfile = create<ProfileState>()((set, get) => ({
  name: 'Pedro Builes',
  email: 'pedro.builes@nerv.com',

  changeProfile: (name: string, email: string) => {
    console.log(get());
    set({name, email});
  },
}));
