import { queryClient } from "@/utils/queryClient";

export function useGetPosts() {
  return queryClient.posts.getPosts.useQuery(["getPosts"]);
}
