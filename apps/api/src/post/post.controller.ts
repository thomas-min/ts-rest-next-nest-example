import { Controller } from '@nestjs/common';
import { postApi } from '@ts-rest-example/contract';
import { ServerInferRequest } from '@ts-rest/core';
import {
  nestControllerContract,
  NestControllerInterface,
  TsRest,
  TsRestRequest,
} from '@ts-rest/nest';
import { PrismaService } from 'src/prisma/prisma.service';

const c = nestControllerContract(postApi);
type RequestShape = ServerInferRequest<typeof postApi>;

@Controller()
export class PostController implements NestControllerInterface<typeof c> {
  constructor(private readonly prismaService: PrismaService) {}

  @TsRest(c.createPost)
  async createPost(@TsRestRequest() { body }: RequestShape['createPost']) {
    const post = await this.prismaService.post.create({ data: body });

    return { status: 201 as const, body: post };
  }

  @TsRest(c.getPost)
  async getPost(@TsRestRequest() { params: { id } }: RequestShape['getPost']) {
    const post = await this.prismaService.post.findUnique({ where: { id } });

    return { status: 200 as const, body: post };
  }

  @TsRest(c.getPosts)
  async getPosts() {
    const posts = await this.prismaService.post.findMany();

    return { status: 200 as const, body: posts };
  }

  @TsRest(c.updatePost)
  async updatePost(
    @TsRestRequest() { params: { id }, body }: RequestShape['updatePost'],
  ) {
    const post = await this.prismaService.post.update({
      where: { id },
      data: body,
    });

    return { status: 200 as const, body: post };
  }

  @TsRest(c.deletePost)
  async deletePost(
    @TsRestRequest() { params: { id } }: RequestShape['deletePost'],
  ) {
    const post = await this.prismaService.post.delete({ where: { id } });

    return { status: 200 as const, body: post };
  }
}
