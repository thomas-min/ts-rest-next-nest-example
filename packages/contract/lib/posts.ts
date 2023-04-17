import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export type Post = {
  id: string;
  title: string;
  body: string;
};

export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
});

export const postApi = c.router({
  createPost: {
    method: "POST",
    path: "/posts",
    responses: {
      201: PostSchema,
    },
    body: z.object({
      title: z.string(),
      body: z.string(),
    }),
    summary: "Create a post",
  },
  getPost: {
    method: "GET",
    path: `/posts/:id`,
    responses: {
      200: PostSchema.nullable(),
    },
    summary: "Get a post by id",
  },
  getPosts: {
    method: "GET",
    path: `/posts`,
    responses: {
      200: z.array(PostSchema),
    },
    summary: "Get all posts",
  },
  updatePost: {
    method: "PATCH",
    path: `/posts/:id`,
    responses: {
      200: PostSchema,
    },
    body: z.object({
      title: z.string().optional(),
      body: z.string().optional(),
    }),
    summary: "Update a post by id",
  },
  deletePost: {
    method: "DELETE",
    path: `/posts/:id`,
    responses: {
      200: PostSchema.nullable(),
    },
    body: null,
    summary: "Delete a post by id",
  },
});
