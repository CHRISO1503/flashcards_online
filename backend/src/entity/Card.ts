import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Deck } from "./Deck";

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cardNumber: number;

    @Column()
    front: string;

    @Column()
    back: string;

    @ManyToOne(() => Deck, (deck) => deck.cards, { onDelete: "CASCADE" })
    deck: Deck;
}
