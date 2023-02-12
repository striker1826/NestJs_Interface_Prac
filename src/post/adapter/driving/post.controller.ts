import { Controller, Post, Body, Inject } from '@nestjs/common';
import { IPostService } from 'src/post/domain/inboundPorts/IPostService';
import { CreatePostDto } from '../../dto/create-post.dto';

@Controller('post')
export class PostController {
  constructor(@Inject(IPostService) private postService: IPostService) {}

  @Post()
  async create(@Body() body: CreatePostDto): Promise<any> {
    return await this.postService.createPost(body);
  }
}
