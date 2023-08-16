import {
	Controller,
	Post,
	Patch,
	Body,
	Res,
	Param,
	NotFoundException,
	HttpStatus
} from '@nestjs/common'
import CreateQueuecustomersDto from './dtos/queue-customers'
import { QueuecustomersService } from './queue-customers.service'
import { Response } from 'express'

@Controller('queuecustomers')
export class QueueCustomersController {
	constructor(private readonly queueCustomersService: QueuecustomersService) {}

	@Post()
	async addCustomer(
		@Body() data: CreateQueuecustomersDto,
		@Res() res: Response
	) {
		const queueExists = await this.queueCustomersService.getExpertQueueToday(
			data.expertId
		)

		if (!queueExists) {
			throw new NotFoundException('A fila não existe')
		}

		const customer = await this.queueCustomersService.addCustomer({
			name: data.name,
			service: data.service,
			queueId: queueExists.id
		})

		return res.status(HttpStatus.CREATED).json(customer)
	}

	@Patch(':id')
	async attendCustomer(@Param('id') id: string, @Res() res: Response) {
		const customer = await this.queueCustomersService.findCustomer(+id)

		if (!customer) {
			throw new NotFoundException('O cliente não existe')
		}

		await this.queueCustomersService.attendCustomer(customer.id)
		return res.status(HttpStatus.NO_CONTENT).send()
	}
}
