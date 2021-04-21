import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Course } from './course.entity';
import { CourseResolver } from './resolver';
import { CourseService } from './service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Course] })],
  providers: [CourseService, CourseResolver],
})
export class CourseModule {}
