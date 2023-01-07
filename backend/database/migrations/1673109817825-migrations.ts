import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1673109817825 implements MigrationInterface {
    name = 'migrations1673109817825'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "card" DROP CONSTRAINT "FK_673081effbabe22d74757339c60"
        `);
        await queryRunner.query(`
            ALTER TABLE "deck" DROP CONSTRAINT "FK_09e8a376bab70b9737c839b2e24"
        `);
        await queryRunner.query(`
            ALTER TABLE "card"
            ADD CONSTRAINT "FK_673081effbabe22d74757339c60" FOREIGN KEY ("deckId") REFERENCES "deck"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "deck"
            ADD CONSTRAINT "FK_09e8a376bab70b9737c839b2e24" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "deck" DROP CONSTRAINT "FK_09e8a376bab70b9737c839b2e24"
        `);
        await queryRunner.query(`
            ALTER TABLE "card" DROP CONSTRAINT "FK_673081effbabe22d74757339c60"
        `);
        await queryRunner.query(`
            ALTER TABLE "deck"
            ADD CONSTRAINT "FK_09e8a376bab70b9737c839b2e24" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "card"
            ADD CONSTRAINT "FK_673081effbabe22d74757339c60" FOREIGN KEY ("deckId") REFERENCES "deck"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
