import { Module } from '@nestjs/common'
import { QueueCustomersController } from './queue-customers.controller'
import { QueuecustomersService } from './queue-customers.service'

@Module({
	controllers: [QueueCustomersController],
	providers: [QueuecustomersService]
})
export class QueueCustomersModule {}
