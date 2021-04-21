import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'courses' })
export class Course {
  constructor(attributes: CourseInput) {
    const { title, description, status } = attributes;

    this.title = title;
    this.description = description;
    this.status = status;
  }

  @PrimaryKey()
  id!: string;

  @Property()
  title!: string;

  @Property()
  description?: string;

  @Enum()
  status!: CourseStatus;
}

export enum CourseStatus {
  IN_PROGRESS = 'in-progress',
  PUBLISHED = 'published',
  RETIRED = 'retired',
}

export interface CourseInput {
  title: string;
  description?: string;
  status: CourseStatus;
}
