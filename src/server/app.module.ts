import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DBConfigModule } from './dbConfig/dbConfig.module';
import { ContactsModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
@Module({
    modules: [AuthModule, UserModule, ContactsModule, CommonModule, DBConfigModule, HomeModule],
    controllers: []
})
export class ApplicationModule { }
