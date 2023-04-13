import { Controller } from '@nestjs/common';
import {
  apiContract,
  CreatePostRequest,
  GetPostRequest,
  UpdatePostRequest,
  DeletePostRequest,
} from '@ts-rest-example/contract';
import {
  nestControllerContract,
  NestControllerInterface,
  TsRest,
  TsRestRequest,
} from '@ts-rest/nest';
import { PrismaService } from 'src/prisma/prisma.service';

const c = nestControllerContract(apiContract.posts);

@Controller()
export class PostController implements NestControllerInterface<typeof c> {
  constructor(private readonly prismaService: PrismaService) {}

  @TsRest(c.createPost)
  async createPost(@TsRestRequest() { body }: CreatePostRequest) {
    const post = await this.prismaService.post.create({ data: body });

    return { status: 201 as const, body: post };
  }

  @TsRest(c.getPost)
  async getPost(@TsRestRequest() { params: { id } }: GetPostRequest) {
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
    @TsRestRequest() { params: { id }, body }: UpdatePostRequest,
  ) {
    const post = await this.prismaService.post.update({
      where: { id },
      data: body,
    });

    return { status: 200 as const, body: post };
  }

  @TsRest(c.deletePost)
  async deletePost(@TsRestRequest() { params: { id } }: DeletePostRequest) {
    const post = await this.prismaService.post.delete({ where: { id } });

    return { status: 200 as const, body: post };
  }
}
