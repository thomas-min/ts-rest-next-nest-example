import { queryClient } from "@/services/queryClient";

export function useDeletePost() {
  return queryClient.posts.deletePost.useMutation();
}
