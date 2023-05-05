import { Column, Entity } from "typeorm";

@Entity({name: 'agreement'})
export class Agreement {

    @Column('int',{
        unique: true
    })
    agreement_id: number;

    @Column('text',{
        unique: true
    })
    name: string;

    @Column('text',{
        unique: true
    })
    description: string;

}
