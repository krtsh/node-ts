import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Incorrect email' })
	email: string;

	@IsString({ message: 'Incorrect password' })
	password: string;

	@IsString({ message: 'incorrect name' })
	name: string;
}
