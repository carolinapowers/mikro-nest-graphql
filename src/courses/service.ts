import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Course } from './course.entity';

export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly repository: EntityRepository<Course>,
  ) {}

  findAll() {
    return this.repository.findAll();
  }

  async create(attributes) {
    const course = new Course({
      ...attributes,
      created_at: new Date(),
      updated_at: new Date(),
    });
    await this.repository.persistAndFlush(course);

    return course;
  }
}
