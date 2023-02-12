import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPostRepository } from 'src/post/domain/outboundPorts/IPostRepository';
import { Repository } from 'typeorm';
import { Post } from '../model/post.entity';

@Injectable()
export class PostRepository implements IPostRepository {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async createPost(title: string, content: string): Promise<Post> {
    const newPost = await this.postRepository.create();

    newPost.title = title;
    newPost.content = content;
    return await this.postRepository.save(newPost);
  }
}
