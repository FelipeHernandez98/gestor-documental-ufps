import { Column, Entity } from "typeorm";

@Entity({name: 'self_appraisal'})
export class SelfAppraisal {

    @Column('int',{
        unique: true
    })
    self_appr_id: number;

    @Column('int')
    agreement_id: number;

    @Column('int')
    program_id: number;

    @Column('text')
    year: string;

    @Column('boolean')
    state: boolean;
}
