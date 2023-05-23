import { IsBoolean, IsDate, IsDecimal, Max, Min } from "class-validator";

export class CreateResponsabilityDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    factor_id: number;

    @IsDecimal()
    @Min(1)
    @Max(11)
    person_id: number;

    @IsBoolean()
    state: boolean;

    @IsDate()
    final_date: Date;
}
