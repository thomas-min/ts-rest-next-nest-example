import { initContract } from "@ts-rest/core";
import { postApi } from "./posts";

const c = initContract();

export const rootApi = c.router({
  posts: postApi,
});
