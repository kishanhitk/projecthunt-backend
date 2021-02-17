import { Column, Entity, JoinTable, OneToOne, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./Base_Entity";
import { Image } from "./Image";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({ unique: true })
  username: string;

  @OneToOne(() => Image)
  @JoinTable()
  avatar: Image;

  @Column({ length: 1000 })
  bio?: string;

  @Column()
  linkedin?: string;

  @Column()
  twitter?: string;

  @Column()
  github?: string;

  @Column()
  youtube?: string;

  @Column()
  facebook?: string;
}

/*
- username
- password (use CB / Social login)
- avatar: Image
- bio: string ( < 1000 char )
- linkedin
- twitter
- github
- youtube
- facebook
*/
