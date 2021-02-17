import { Column, Entity, JoinTable, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./Base_Entity";
import { Project } from "./Project";
import { User } from "./User";

@Entity()
export class Comment extends BaseEntity {
  @ManyToOne(() => User)
  @JoinTable()
  user: User;

  @ManyToOne(() => Project)
  @JoinTable()
  project: Project;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 1000 })
  body: string;
}

/*
- user: User
- project: Project
- title: string ( < 50 char )
- body: string ( < 1000 char )
*/
