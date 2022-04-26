import {ApiProperty} from "@nestjs/swagger";
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    MaxLength,
    Min,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty()
    firstname: string;

    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty()
    lastname: string;
}
