import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: ' department'})
export class Department {

    @Column('int',{
        unique: true
    })
    @PrimaryColumn()
    department_id: number;

    @Column('int')
    faculty_id: number;

    @Column('text')
    dean: string;
    
    @Column('text')
    email: string;
    
    @Column('text')
    name: string;
}
