import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { TRANSCODE_QUEUE } from './constants';

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
  private readonly logger = new Logger(TranscodeConsumer.name);

  // Some long running process
  @Process()
  async transcode(job: Job) {
    this.logger.debug('Transcoding message: ', job.id);
    this.logger.log('Data: ', JSON.stringify(job.data));
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 8000));
    this.logger.debug('Completed transcoding: ', job.id);
  }
}
