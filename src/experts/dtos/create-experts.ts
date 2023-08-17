import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsEmail } from 'class-validator'

export class CreateExpertsDto {
	@IsNotEmpty({ message: 'O campo nome é obrigatório.' })
	@ApiProperty()
	name: string

	@IsNotEmpty({ message: 'O campo email é obrigatório.' })
	@IsEmail({}, { message: 'O campo email está errado.' })
	@ApiProperty()
	email: string

	@ApiPropertyOptional()
	phone: string
}
