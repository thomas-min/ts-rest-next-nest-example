import { queryClient } from "@/utils/queryClient";

export function useDeletePost() {
  return queryClient.posts.deletePost.useMutation();
}
