import { apiContract } from "@ts-rest-example/contract";
import { initQueryClient } from "@ts-rest/react-query";

export const queryClient = initQueryClient(apiContract, {
  baseUrl: "http://localhost:3000",
  baseHeaders: {},
});
