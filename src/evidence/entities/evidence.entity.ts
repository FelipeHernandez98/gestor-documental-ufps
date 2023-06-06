import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'evidence'})
export class Evidence {

    @Column('int',{
        unique: true
    })
    @PrimaryColumn()
    evidence_id: number;

    @Column('text')
    name: string;
    
    @Column('text')
    link: string;
    
    @Column('text')
    type: string;
    
    @Column('text')
    format: string;
    
    @Column('boolean')
    editable: boolean;
}
