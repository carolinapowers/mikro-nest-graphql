import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CourseModule, CourseModuleInput } from './course-module.entity';
import { CourseModuleService } from './service';

@Resolver()
export class CourseModuleResolver {
  constructor(private service: CourseModuleService) {}

  @Mutation()
  createCourseModule(
    @Args('attributes') attributes: CourseModuleInput,
  ): Promise<CourseModule> {
    console.log('HERE');
    return this.service.create(attributes);
  }
}
