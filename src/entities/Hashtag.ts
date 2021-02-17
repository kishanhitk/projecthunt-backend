import { Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./Base_Entity";

@Entity()
export class Hashtag extends BaseEntity {
  @PrimaryColumn()
  tag: string;
}
