import { Module } from '@nestjs/common';
import { TestService } from './test.service';

@Module({
  providers: [TestService],
})
export class TestModule {}
