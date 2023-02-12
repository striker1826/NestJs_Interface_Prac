import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post/adapter/model/post.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (ConfigService: ConfigService) => {
        return {
          type: 'mysql',
          host: ConfigService.get('DB_HOST'),
          port: 3306,
          username: ConfigService.get('DB_USERNAME'),
          password: ConfigService.get('DB_PASSWORD'),
          database: ConfigService.get('DB_DATABASE'),
          entities: [Post],
          synchronize: true,
        };
      },
    }),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
