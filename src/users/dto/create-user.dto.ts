import { ApiProperty } from "@nestjs/swagger";
import { IsEmail,IsNotEmpty,IsString,IsOptional, IsBoolean } from "class-validator";

export class CreateUserDto {
 @IsEmail()
 @IsNotEmpty()
 @ApiProperty({ description:'User Email'})
 readonly email: string;
   
 @IsString()
 @IsNotEmpty()
 @ApiProperty({description:' password with numbers and letters'})
 password: string;

 @IsString()
 @IsNotEmpty()
 readonly name: string;

 @IsString()
 @IsNotEmpty()
 readonly lastname?: string;

 @IsString()
 @IsNotEmpty()
 readonly identification?: string;
 
 @IsString()
 @IsOptional()
 readonly picture?: string;

 @IsString()
 @IsOptional()
 readonly phone?: string;

 @IsString()
 @IsOptional()
 readonly gender?: string;

 @IsString()
 @IsOptional()
 readonly birthday?: string;

 @IsString()
 @IsOptional()
 readonly state?: string;
 
 @IsString()
 @IsOptional()
 readonly city?: string;
 
 @IsString()
 @IsOptional()
 readonly address?: string;

 @IsBoolean()
 @IsOptional()
 readonly active?: boolean;
 

}
