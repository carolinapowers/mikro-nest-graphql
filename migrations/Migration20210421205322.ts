import { Migration } from '@mikro-orm/migrations';

export class Migration20210421205322 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "courses" ("id" varchar(255) not null, "title" varchar(255) not null, "description" varchar(255) not null, "status" int2 not null);');
    this.addSql('alter table "courses" add constraint "courses_pkey" primary key ("id");');

    this.addSql('create table "course_modules" ("id" varchar(255) not null, "title" varchar(255) not null, "order" int4 not null, "course_id" varchar(255) not null);');
    this.addSql('alter table "course_modules" add constraint "course_modules_pkey" primary key ("id");');

    this.addSql('alter table "course_modules" add constraint "course_modules_course_id_foreign" foreign key ("course_id") references "courses" ("id") on update cascade;');
  }

}
