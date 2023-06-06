import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'program'})
export class Program {

    @Column('int',{
        unique: true
    })
    @PrimaryColumn()
    program_id: number;

    @Column('int')
    faculty_id: number;

    @Column('int')
    person_id: number;

    @Column('text')
    name: string;

    @Column('text')
    code: string;

    @Column('text')
    modality: string;

    @Column('text')
    building: string;

    @Column('text')
    formal_duration: string;
}
