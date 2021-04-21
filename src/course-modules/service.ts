import { EntityManager } from '@mikro-orm/core';
import { Inject } from '@nestjs/common';
import { CourseModule } from './course-module.entity';

export class CourseModuleService {
  constructor(
    @Inject(EntityManager)
    private readonly em: EntityManager,
  ) {}

  async create(attributes) {
    const module = new CourseModule({
      ...attributes,
      created_at: new Date(),
      updated_at: new Date(),
    });
    await this.em.persistAndFlush(module);

    return module;
  }
}
