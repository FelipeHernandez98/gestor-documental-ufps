import { IsDecimal, IsString, Max, MaxLength, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonDto {

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    first_name: string;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    last_name: string;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    email: string;

    @IsDecimal()
    @Min(1)
    @Max(10)
    @ApiProperty()
    phone_number: number;
}
