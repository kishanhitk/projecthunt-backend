import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { BaseEntity } from "./Base_Entity";
import { Hashtag } from "./Hashtag";
import { Image } from "./Image";
import { User } from "./User";

@Entity()
export class Project extends BaseEntity {
  @Column({ length: 100 })
  title: string;

  @Column({ length: 240 })
  tagline: string;

  @Column({ length: 2000 })
  description: string;

  //TODO: Add image

  @Column()
  website: string;

  @Column()
  github: string;

  @Column()
  youtube?: string;

  @ManyToMany(() => User)
  @JoinTable()
  user: User[];
  //TODO: Add limit 3

  @ManyToMany(() => Hashtag)
  @JoinTable()
  tags: Hashtag[];
}

/*
- title (< 100 chars)
- tagline  ( < 240 chars )
- description ( < 2000 chars )
- images: Images[]
- website: url
- github: url
- youtube: url
- user: User [] - limit to 3
- tags: Hastag[]
*/
