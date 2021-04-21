import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Course } from '../courses';

@Entity({ tableName: 'course_modules' })
export class CourseModule {
  constructor(attributes: CourseModuleInput) {
    const { title, order } = attributes;

    this.title = title;
    this.order = order;
  }

  @PrimaryKey()
  id!: string;

  @Property()
  title!: string;

  @Property()
  order!: number;

  @ManyToOne()
  course!: Course;
}

export interface CourseModuleInput {
  course_id: string;
  title: string;
  order: number;
}
