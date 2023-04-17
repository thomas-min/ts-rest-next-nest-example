import { queryClient } from "@/services/queryClient";

export function useGetPosts() {
  return queryClient.posts.getPosts.useQuery(["getPosts"]);
}
