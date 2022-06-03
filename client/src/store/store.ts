import { createStore } from "solid-js/store";

interface User {
  id: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}

interface AppState {
  users: User[];
  selectedUser: User | null;
}

const initialState: AppState = {
  users: [],
  selectedUser: null,
};

export const [state, setState] = createStore<AppState>(initialState);
