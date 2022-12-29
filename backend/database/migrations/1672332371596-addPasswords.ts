import { MigrationInterface, QueryRunner } from "typeorm";

export class addPasswords1672332371596 implements MigrationInterface {
    name = "addPasswords1672332371596";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "password" character varying NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "password"
        `);
    }
}
