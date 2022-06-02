import { Component, createEffect } from "solid-js";
import { UserService } from "../services/userService";

export const Index: Component = () => {
  const { getAllUsers } = UserService();
  createEffect(() => getAllUsers());

  return (
    <>
      <h1>Index</h1>
    </>
  );
};
