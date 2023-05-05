import { Column, Entity } from "typeorm";

@Entity({name: 'responsability'})
export class Responsability {

    @Column('int',{
        unique: true
    })
    responsability_id: number;

    @Column('int')
    factor_id: number;

    @Column('int')
    person_id: number;

    @Column('boolean')
    state: boolean;

    @Column('date')
    final_date: Date;
}
