import { SelfAppraisal } from "src/self_appraisal/entities/self_appraisal.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name: 'agreement'})
export class Agreement {

    @Column('int',{
        unique: true
    })
    @PrimaryColumn()
    /* @OneToMany(() => SelfAppraisal, secondary => secondary.agreement_id) */
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
