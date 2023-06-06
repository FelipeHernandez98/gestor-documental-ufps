import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'factor_evidence'})
export class FactorEvidence {

    @Column('int',{
        unique: true
    })
    @PrimaryColumn()
    fact_evidence_id: number;

    @Column('int')
    factor_id: number;
    
    @Column('int')
    evidence_id: number;
}
