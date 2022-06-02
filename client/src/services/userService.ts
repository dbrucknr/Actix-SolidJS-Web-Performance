import { setState } from "../store/store";
import { attempt } from "../utilities/attempt";
import { ServiceConfig } from "./config";

export const UserService = () => {
  const { GET } = ServiceConfig;

  const getAllUsers = () =>
    attempt(async () => {
      const users = await GET("users");
      setState("users", () => users);
    });

  const getSpecificUser = (id: number) =>
    attempt(async () => {
      return await GET(`users/${id}`);
    });

  const updateUser = () => {};

  const createUser = () => {};

  const deleteUser = () => {};

  return { getAllUsers, getSpecificUser, updateUser, createUser, deleteUser };
};
