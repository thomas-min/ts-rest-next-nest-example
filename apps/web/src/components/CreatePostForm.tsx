import { FormEvent, useState } from "react";
import { useCreatePost } from "@/hooks/useCreatePost";
import { useGetPosts } from "@/hooks/useGetPosts";

export default function CreatePostForm() {
  const [formValue, setFormValue] = useState({ title: "", body: "" });
  const { mutateAsync } = useCreatePost();
  const { refetch } = useGetPosts();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await mutateAsync({
      body: { title: formValue.title, body: formValue.body },
    });
    setFormValue({ title: "", body: "" });
    refetch();
  }

  function handleChange(e: FormEvent<HTMLInputElement>) {
    const { name, value } = e.target as HTMLInputElement;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form
      className="flex flex-col w-96 border-2 rounded p-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl mb-4">Create Post</h1>
      <label htmlFor="title">title</label>
      <input
        className="text-black border-2 rounded p-1"
        value={formValue.title}
        onChange={handleChange}
        id="title"
        name="title"
        type="text"
      />
      <label htmlFor="body">body</label>
      <input
        className="text-black border-2 rounded p-1"
        value={formValue.body}
        onChange={handleChange}
        id="body"
        name="body"
        type="text"
      />
      <input
        className="ml-auto cursor-pointer bg-orange-300 rounded-md p-2 mt-4 text-white"
        type="submit"
      />
    </form>
  );
}
