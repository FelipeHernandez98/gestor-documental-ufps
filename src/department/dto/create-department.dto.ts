import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateDepartmentDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    @ApiProperty()
    faculty_id: number;

    @IsString()
    @MaxLength(100)
    @ApiProperty()
    dean: string;
    
    @IsString()
    @MaxLength(100)
    @ApiProperty()
    email: string;
    
    @IsString()
    @MaxLength(100)
    @ApiProperty()
    name: string;
}
