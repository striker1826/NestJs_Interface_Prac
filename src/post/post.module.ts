import { Module } from '@nestjs/common';
import { PostService } from './domain/post.service';
import { PostController } from './adapter/driving/post.controller';
import { IPostService } from './domain/inboundPorts/IPostService';
import { IPostRepository } from './domain/outboundPorts/IPostRepository';
import { PostRepository } from './adapter/driven/post.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './adapter/model/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [
    {
      provide: IPostService,
      useClass: PostService,
    },
    {
      provide: IPostRepository,
      useClass: PostRepository,
    },
  ],
  exports: [IPostService, IPostRepository],
})
export class PostModule {}
