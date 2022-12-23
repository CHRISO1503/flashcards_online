import { MigrationInterface, QueryRunner } from "typeorm";

export class migrationName1671806248117 implements MigrationInterface {
    name = 'migrationName1671806248117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "userName" character varying NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "deck" (
                "id" SERIAL NOT NULL,
                "deckName" character varying NOT NULL,
                "userId" integer,
                CONSTRAINT "PK_99f8010303acab0edf8e1df24f9" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "deck"
            ADD CONSTRAINT "FK_09e8a376bab70b9737c839b2e24" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "deck" DROP CONSTRAINT "FK_09e8a376bab70b9737c839b2e24"
        `);
        await queryRunner.query(`
            DROP TABLE "deck"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
    }

}
