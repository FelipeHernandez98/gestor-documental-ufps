import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, Max, Min } from "class-validator";

export class CreateCustomerDto {
    
    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    role_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    person_id: number;
}
