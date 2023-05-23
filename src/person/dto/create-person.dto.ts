import { IsDecimal, IsString, Max, MaxLength, Min } from "class-validator";

export class CreatePersonDto {

    @IsString()
    @MaxLength(100)
    first_name: string;

    @IsString()
    @MaxLength(100)
    last_name: string;

    @IsString()
    @MaxLength(100)
    email: string;

    @IsDecimal()
    @Min(1)
    @Max(10)
    phone_number: number;
}
