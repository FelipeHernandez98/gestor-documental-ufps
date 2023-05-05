import { Column, Entity } from "typeorm";

@Entity({name: ' department'})
export class Department {

    @Column('int',{
        unique: true
    })
    department_id: number;

    @Column('int')
    faculty_id: number;

    @Column('string')
    dean: string;
    
    @Column('string')
    email: string;
    
    @Column('string')
    name: string;
}
