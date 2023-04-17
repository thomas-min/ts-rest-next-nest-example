import { queryClient } from "@/services/queryClient";
import { postApi } from "@ts-rest-example/contract";
import { ClientInferRequest } from "@ts-rest/core";

export function useGetPost(
  request: ClientInferRequest<typeof postApi.getPost>
) {
  return queryClient.posts.getPost.useQuery(
    ["getPost", request.params["id"]],
    request
  );
}
