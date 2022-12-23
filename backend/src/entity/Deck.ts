import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Deck {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    deckName: string;

    @ManyToOne(() => User, user=>user.decks)
    user: User;
}
