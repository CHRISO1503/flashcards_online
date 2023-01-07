import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Card } from "./Card";
import { User } from "./User";

@Entity()
export class Deck {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    deckName: string;

    @ManyToOne(() => User, (user) => user.decks, { onDelete: "CASCADE" })
    user: User;

    @OneToMany(() => Card, (card) => card.deck, { cascade: true })
    cards: Card[];
}
