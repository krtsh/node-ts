import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Неверно указан email' })
	email: string;

	@IsString({ message: 'Incorrect password' })
	password: string;

	@IsString({ message: 'incorrect name' })
	name: string;
}
