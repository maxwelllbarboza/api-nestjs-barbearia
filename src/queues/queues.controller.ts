import {
	Controller,
	Body,
	Post,
	Res,
	NotFoundException,
	Get,
	Query
} from '@nestjs/common'
import { QueuesService } from './queues.service'
import CreateQueueDto from './dtos/create-queue'
import { Response } from 'express'
import { ExpertsService } from 'src/experts/experts.service'
import { BadRequestException } from '@nestjs/common/exceptions'
import { HttpStatus } from '@nestjs/common/enums'

@Controller('queues')
export class QueuesController {
	constructor(
		private readonly queuesService: QueuesService,
		private readonly expertService: ExpertsService
	) {}

	@Post()
	async createQueue(@Body() data: CreateQueueDto, @Res() res: Response) {
		const expert = await this.expertService.findExpert(data.expertId)

		if (!expert) {
			throw new NotFoundException('O expert não existe.')
		}

		const queueExist = await this.queuesService.queueExpertExistsToday(
			data.expertId
		)

		if (queueExist) {
			throw new BadRequestException(
				'Já existe uma fila para o profissional na data atual.'
			)
		}

		const queue = await this.queuesService.createQueue(data)
		return res.status(HttpStatus.CREATED).json(queue)
	}

	@Get()
	async getExpertQueue(
		@Query('expertId') expertId: string,
		@Res() res: Response
	) {
		if (expertId) {
			const expert = await this.expertService.findExpert(expertId)

			if (!expert) {
				throw new NotFoundException('O expert não existe.')
			}

			const queue = await this.queuesService.getExpertQueue(expertId)
			return res.json(queue)
		}

		const queue = await this.queuesService.getQueues()
		return res.json(queue)
	}
}
