import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSystemUser1639967619573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "system_user",
              columns: [
                {
                  name: "id_users",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "lastname",
                  type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                  name: "cpf",
                  type: "varchar",
                },
                {
                  name: "birth_data",
                  type: "date",
      
                },
                {
                  name: 'type',
                  type: 'enum',
                  enum: ['student', 'teacher', 'admin'],
                  isNullable: true,
                },
                {
                  name: "id_location",
                  type: "uuid",
                },
              ],
              foreignKeys: [
                {
                  name: "fk_location",
                  columnNames: ["id_location"],
                  referencedTableName: "location",
                  referencedColumnNames: ["id_location"],
                }
              ]
            })
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("system_user");
    }

}
