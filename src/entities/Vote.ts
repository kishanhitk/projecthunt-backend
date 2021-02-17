import { Column, Entity, JoinTable, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./Base_Entity";
import { Project } from "./Project";
import { User } from "./User";

@Entity()
export class Vote extends BaseEntity {
  @ManyToOne(() => User)
  @JoinTable()
  user: User;

  @ManyToOne(() => Project)
  @JoinTable()
  project: Project;

  @Column()
  value: number;
}
/*
- user: User
- project: Project
- value: +1/-1 (decide if downvote is a feature)
*/
