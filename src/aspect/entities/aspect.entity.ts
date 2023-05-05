import { Column, Entity } from "typeorm";

@Entity({ name: 'aspect'})
export class Aspect {

    @Column('int',{
        unique: true
    })
    aspect_id: number;

    @Column('int')
    characteristic_id:number;

    @Column('text')
    name: string;

    @Column('text')
    description: string;

    @Column('int')
    weighing: number;

    @Column('boolean')
    editanle: boolean;
}
