import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Deck } from "./Deck";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    password: string;

    @OneToMany(() => Deck, (deck) => deck.user)
    decks: Deck[];
}
