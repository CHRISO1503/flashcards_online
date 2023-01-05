import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1672949798582 implements MigrationInterface {
    name = 'migrations1672949798582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "card" (
                "id" SERIAL NOT NULL,
                "cardId" integer NOT NULL,
                "front" character varying NOT NULL,
                "back" character varying NOT NULL,
                "deckId" integer,
                CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "card"
            ADD CONSTRAINT "FK_673081effbabe22d74757339c60" FOREIGN KEY ("deckId") REFERENCES "deck"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "card" DROP CONSTRAINT "FK_673081effbabe22d74757339c60"
        `);
        await queryRunner.query(`
            DROP TABLE "card"
        `);
    }

}
