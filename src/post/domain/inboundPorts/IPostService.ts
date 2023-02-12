import { Post } from 'src/post/adapter/model/post.entity';
import { CreatePostDto } from 'src/post/dto/create-post.dto';

export interface IPostService {
  createPost(body: CreatePostDto): Promise<any>;
}

export const IPostService = Symbol('IPostService');
