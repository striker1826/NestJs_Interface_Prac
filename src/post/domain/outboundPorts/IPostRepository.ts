import { Post } from 'src/post/adapter/model/post.entity';

export interface IPostRepository {
  createPost(title: string, content: string): Promise<Post>;
}

export const IPostRepository = Symbol('IPostRepository');
