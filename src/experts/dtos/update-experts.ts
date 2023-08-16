import { PartialType } from '@nestjs/mapped-types'
import { CreateExpertsDto } from './create-experts'

export class UpdateExpertsDto extends PartialType(CreateExpertsDto) {}
