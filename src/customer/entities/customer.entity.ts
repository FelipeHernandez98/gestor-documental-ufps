import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'customer'})
export class Customer {

    @Column('int',{
        unique: true
    })
    @PrimaryColumn()
    customer_id: number;

    @Column('int')
    role_id: number;

    @Column('int')
    person_id: number;

}
