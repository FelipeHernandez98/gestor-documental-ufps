import { Column, Entity } from "typeorm";

@Entity({name: 'factor_evidence'})
export class FactorEvidence {

    @Column('int',{
        unique: true
    })
    fact_evidence_id: number;

    @Column('int')
    factor_id: number;
    
    @Column('int')
    evidence_id: number;
}
