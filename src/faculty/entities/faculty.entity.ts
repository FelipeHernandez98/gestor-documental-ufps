import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'faculty' })
export class Faculty {

    @Column('int',{
        unique: true
    })
    @PrimaryColumn()
    faculty_id: number;

    @Column('text')
    name: string;

    @Column('text')
    dean: string;

    @Column('text')
    email: string;
}
