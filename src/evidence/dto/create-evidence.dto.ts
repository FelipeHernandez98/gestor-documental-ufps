import { IsBoolean, IsString, MaxLength } from "class-validator";

export class CreateEvidenceDto {
    
    @IsString()
    @MaxLength(100)
    name: string;
    
    @IsString()
    @MaxLength(255)
    link: string;
    
    @IsString()
    @MaxLength(100)
    type: string;
    
    @IsString()
    @MaxLength(100)
    format: string;
    
    @IsBoolean()
    editable: boolean;
}
