import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Incorrect email' })
	email: string;

	@IsString({ message: 'Incorrect password' })
	password: string;
}
