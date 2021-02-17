import { Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./Base_Entity";

@Entity()
export class Image extends BaseEntity {
  @Column()
  url: string;
}
