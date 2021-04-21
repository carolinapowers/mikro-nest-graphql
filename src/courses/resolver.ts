import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Course, CourseInput } from './course.entity';
import { CourseService } from './service';

@Resolver()
export class CourseResolver {
  constructor(private courseService: CourseService) {}

  @Query()
  courses(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Mutation()
  createCourse(@Args('attributes') attributes: CourseInput): Promise<Course> {
    return this.courseService.create(attributes);
  }
}
