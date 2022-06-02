import { createStore } from "solid-js/store";

interface AppState {
  users: User[];
}

interface User {
  id: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}

const initialState: AppState = {
  users: [],
};

export const [state, setState] = createStore<AppState>(initialState);
