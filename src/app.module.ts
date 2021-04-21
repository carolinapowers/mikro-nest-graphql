import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModuleModule } from './course-modules';
import { CourseModule } from './courses/module';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    CourseModule,
    CourseModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
