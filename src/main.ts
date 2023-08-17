import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = new DocumentBuilder()
		.setTitle('Sistema de Barbearia')
		.setDescription(
			'O sistema de API de barbearia facilita o atendimento para o cliente'
		)
		.setVersion('1.0')
		.build()
	const document = SwaggerModule.createDocument(app, config)

	SwaggerModule.setup('api', app, document)

	app.useGlobalPipes(new ValidationPipe())
	await app.listen(3000)
}
bootstrap()
