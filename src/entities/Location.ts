import { Entity, Column, PrimaryColumn, createConnection } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("location")
export class Location {

  @PrimaryColumn()
  id_location: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  cep: string;

  @Column()
  hood: string;

  @Column()
  street: string;

  constructor() {
    if(!this.id_location) {
      this.id_location = uuid();
    }
  }

}