import { initContract } from "@ts-rest/core";
import { postContract } from "./posts";

const c = initContract();

export const apiContract = c.router({
  posts: postContract,
});
