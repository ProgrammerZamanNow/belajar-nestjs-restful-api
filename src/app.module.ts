import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { ContactModule } from './contact/contact.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [CommonModule, UserModule, ContactModule, AddressModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
