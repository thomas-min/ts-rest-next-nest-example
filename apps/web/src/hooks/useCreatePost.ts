import { queryClient } from "@/services/queryClient";

export function useCreatePost() {
  return queryClient.posts.createPost.useMutation();
}
