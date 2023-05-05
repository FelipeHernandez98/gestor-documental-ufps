import { Column, Entity } from "typeorm";

@Entity({ name: 'characteristic_evidence'})
export class CharacteristicEvidence {
    
    @Column('int',{
        unique: true
    })
    cha_evidence_id: number;

    @Column('int')
    characteristic_id: number;

    @Column('int')
    evidence_id: number;
}
