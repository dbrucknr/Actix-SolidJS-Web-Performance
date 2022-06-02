import { Component, createEffect, For } from "solid-js";
import { UserService } from "../services/userService";
import { state } from "../store/store";

export const Main: Component = () => {
  const { getAllUsers } = UserService();
  createEffect(() => getAllUsers());

  return (
    <>
      <h1>Main</h1>
      <For each={state.users} fallback={<div>Loading...</div>}>
        {(user) => <div>{user.email}</div>}
      </For>
    </>
  );
};
