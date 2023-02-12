import { Inject, Injectable } from '@nestjs/common';
import { Post } from '../adapter/model/post.entity';
import { CreatePostDto } from '../dto/create-post.dto';
import { IPostService } from './inboundPorts/IPostService';
import { IPostRepository } from './outboundPorts/IPostRepository';

@Injectable()
export class PostService implements IPostService {
  constructor(
    @Inject(IPostRepository) private postRepository: IPostRepository,
  ) {}
  async createPost(body: CreatePostDto): Promise<any> {
    const { title, content } = body;
    const newPost = await this.postRepository.createPost(title, content);
    return newPost;
  }
}
