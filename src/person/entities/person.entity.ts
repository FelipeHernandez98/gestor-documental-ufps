import { Column, Entity } from "typeorm";

@Entity({name: 'persona'})
export class Person {

    @Column('int',{
        unique: true
    })
    person_id: number;

    @Column('text')
    first_name: string;

    @Column('text')
    last_name: string;

    @Column('text')
    email: string;

    @Column('int')
    phone_number: number;
}
