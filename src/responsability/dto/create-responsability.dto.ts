import { IsBoolean, IsDate, IsDecimal, Max, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateResponsabilityDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    factor_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    person_id: number;

    @IsBoolean()
    @ApiProperty()
    state: boolean;

    @IsDate()
    @ApiProperty()
    final_date: Date;
}
