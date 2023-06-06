import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'characteristic'})
export class Characteristic {

    @Column('int',{
        unique: true
    })
    @PrimaryColumn()
    characteristic_id: number;

    @Column('int')
    factor_id: number;

    @Column('text')
    name: string;

    @Column('text')
    description: string;

    @Column('int')
    weighing: number;

    @Column('boolean')
    editanle: boolean;
}
    
