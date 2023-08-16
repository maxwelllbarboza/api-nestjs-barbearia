import { Module } from '@nestjs/common'
import { PrismaModule } from './database/prisma.module'
import { ExpertsModule } from './experts/experts.module'
import { QueuesModule } from './queues/queues.module'
import { QueueCustomersModule } from './queue-customers/queue-customers.module'
import { UsersModule } from './users/users.module'

@Module({
	imports: [
		PrismaModule,
		ExpertsModule,
		QueuesModule,
		QueueCustomersModule,
		UsersModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
