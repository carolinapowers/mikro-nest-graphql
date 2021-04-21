import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CourseModule } from './course-module.entity';
import { CourseModuleResolver } from './resolver';
import { CourseModuleService } from './service';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [CourseModule] })],
  providers: [CourseModuleService, CourseModuleResolver],
})
export class CourseModuleModule {}
