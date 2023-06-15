import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, MaxLength } from "class-validator";

export class CreateEvidenceDto {
    
    @IsString()
    @MaxLength(100)
    @ApiProperty()
    name: string;
    
    @IsString()
    @MaxLength(255)
    @ApiProperty()
    link: string;
    
    @IsString()
    @MaxLength(100)
    @ApiProperty()
    type: string;
    
    @IsString()
    @MaxLength(100)
    @ApiProperty()
    format: string;
    
    @IsBoolean()
    @ApiProperty()
    editable: boolean;
}
