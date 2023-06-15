import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateAgreementDto {
    
    @IsString()
    @MinLength(1)
    @ApiProperty()
    name: string;

    @IsString()
    @MinLength(1)
    @ApiProperty()
    description: string;
}
