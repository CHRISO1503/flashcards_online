import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1673026279026 implements MigrationInterface {
    name = 'migrations1673026279026'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "card"
                RENAME COLUMN "cardId" TO "cardNumber"
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "card"
                RENAME COLUMN "cardNumber" TO "cardId"
        `);
    }

}
