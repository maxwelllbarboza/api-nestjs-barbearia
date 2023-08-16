import { IsNotEmpty, IsEmail } from 'class-validator'

export default class CreateUsersDto {
	@IsNotEmpty({ message: 'O campo nome é obrigatório.' })
	name: string

	@IsNotEmpty({ message: 'O campo email é obrigatório.' })
	@IsEmail({}, { message: 'O campo email está errado.' })
	email: string

	@IsNotEmpty({ message: 'O campo password é obrigatório.' })
	password: string
}
