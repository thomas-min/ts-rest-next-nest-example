import { queryClient } from "@/utils/queryClient";
import { GetPostRequest } from "@ts-rest-example/contract";

export function useGetPost(request: GetPostRequest) {
  return queryClient.posts.getPost.useQuery(
    ["getPost", request.params["id"]],
    request
  );
}
