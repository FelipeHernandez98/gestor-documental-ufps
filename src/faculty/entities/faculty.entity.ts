import { Column, Entity } from "typeorm";

@Entity({ name: 'faculty' })
export class Faculty {

    @Column('int',{
        unique: true
    })
    faculty_id: number;

    @Column('text')
    name: string;

    @Column('text')
    dean: string;

    @Column('text')
    email: string;
}
