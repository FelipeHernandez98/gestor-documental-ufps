import { Column, Entity } from "typeorm";

@Entity({name: 'aspect_evidence'})
export class AspectEvidence {

    @Column('int',{
        unique: true
    })
    asp_evidence_id: number;

    @Column('int')
    aspect_id: number;

    @Column('int')
    evidence_id: number;
}
