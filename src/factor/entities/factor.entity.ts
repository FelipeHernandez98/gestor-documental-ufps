import { Column, Entity } from "typeorm";

@Entity({ name: 'factor'})
export class Factor {

    @Column('int',{
        unique: true
    })
    factor_id: number;

    @Column('int')
    agreement_id: number;

    @Column('text')
    name: string;

    @Column('text')
    description: string;

    @Column('int')
    weighing: number;

    @Column('boolean')
    editanle: boolean;
}
