import { Component, createEffect } from "solid-js";
import { UserService } from "../services/userService";

export const Main: Component = () => {
  const { getAllUsers } = UserService();
  createEffect(() => getAllUsers());

  return (
    <>
      <h1>Main</h1>
    </>
  );
};
