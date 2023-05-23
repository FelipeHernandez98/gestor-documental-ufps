import { IsDecimal, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateDepartmentDto {

    @IsDecimal()
    @Min(1)
    @Max(11)
    faculty_id: number;

    @IsString()
    @MaxLength(100)
    dean: string;
    
    @IsString()
    @MaxLength(100)
    email: string;
    
    @IsString()
    @MaxLength(100)
    name: string;
}
