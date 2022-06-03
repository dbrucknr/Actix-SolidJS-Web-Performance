import { Component, createEffect, For } from "solid-js";
import { UserService } from "../services/userService";
import { state } from "../store/store";
import { Table } from "../components/base/Table";

const { getAllUsers } = UserService();

export const Main: Component = () => {
  createEffect(() => getAllUsers());

  return (
    <>
      <h1>Main</h1>
      <Table />
      <For each={state.users} fallback={<div>Loading...</div>}>
        {(user) => <div>{user.email}</div>}
      </For>
    </>
  );
};
