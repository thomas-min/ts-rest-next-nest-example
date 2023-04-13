import { useDeletePost } from "@/hooks/useDeletePost";
import { useGetPosts } from "@/hooks/useGetPosts";

export default function PostList() {
  const { data, error, isLoading, refetch } = useGetPosts();
  const { mutateAsync } = useDeletePost();

  async function handleDelete(id: string) {
    await mutateAsync({ params: { id } });
    refetch();
  }

  if (!data || isLoading) return <div>Loading...</div>;
  if (data?.status !== 200 || error) return <div>Something went wrong...</div>;

  return (
    <ul>
      {data.body.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => handleDelete(post.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
