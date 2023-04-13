import { Inter } from "next/font/google";
import CreatePostForm from "../components/CreatePostForm";
import PostList from "@/components/PostList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center p-4">
      <CreatePostForm />
      <PostList />
    </main>
  );
}
