import { IsEmail,IsNotEmpty,IsString,IsOptional } from "class-validator";

export class CreateUserDto {
 @IsEmail()
 @IsNotEmpty()
 readonly email: string;
   
 @IsString()
 @IsNotEmpty()
 password: string;
 readonly name: string;
 readonly lastname?: string;
 readonly identification?: string;
 
 @IsOptional()
 readonly picture?: string;
 readonly phone?: string;
 readonly gender?: string;
 readonly birthday?: string;
 readonly state?: string;
 readonly city?: string;
 readonly address?: string;
 readonly active?: boolean;
 

}
