import { IsDecimal, Max, Min } from "class-validator";

export class CreateCustomerDto {
    
    @IsDecimal()
    @Min(1)
    @Max(11)
    role_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    person_id: number;
}
