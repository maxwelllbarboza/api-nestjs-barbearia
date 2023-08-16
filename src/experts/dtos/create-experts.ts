import { IsNotEmpty, IsEmail } from 'class-validator'

export class CreateExpertsDto {
	@IsNotEmpty({ message: 'O campo nome é obrigatório.' })
	name: string

	@IsNotEmpty({ message: 'O campo email é obrigatório.' })
	@IsEmail({}, { message: 'O campo email está errado.' })
	email: string

	phone: string
}
