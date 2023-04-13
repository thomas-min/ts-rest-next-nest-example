import { queryClient } from "@/utils/queryClient";

export function useCreatePost() {
  return queryClient.posts.createPost.useMutation();
}
