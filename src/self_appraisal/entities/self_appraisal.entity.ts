import { Agreement } from "src/agreement/entities/agreement.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({name: 'self_appraisal'})
export class SelfAppraisal {

    @Column('int',{
        unique: true
    })
    @PrimaryColumn()
    self_appr_id: number;

    @Column('int')
    /* @ManyToOne(() => Agreement)
    @JoinColumn({ name: 'agreement_id' }) */
    agreement_id: number;

    @Column('int')
    program_id: number;

    @Column('text')
    year: string;

    @Column('boolean')
    state: boolean;
}
