import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { PrismaService } from './prisma/prisma.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ProblemsModule } from './problems/problems.module'
import { ConversationsModule } from './conversations/conversations.module'
import { MessagesModule } from './messages/messages.module'
import { MatchingModule } from './matching/matching.module'
import { AvailabilityModule } from './availability/availability.module'
import { BookingsModule } from './bookings/bookings.module'
import { OffersModule } from './offers/offers.module'
import { PaymentsModule } from './payments/payments.module'
import { UploadsModule } from './uploads/uploads.module'
import { ReviewsModule } from './reviews/reviews.module'
import { NotificationsModule } from './notifications/notifications.module'
import { ChatGateway } from './realtime/chat.gateway'


@Module({
imports: [
ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
AuthModule,
UsersModule,
ProblemsModule,
ConversationsModule,
MessagesModule,
MatchingModule,
AvailabilityModule,
BookingsModule,
OffersModule,
PaymentsModule,
UploadsModule,
ReviewsModule,
NotificationsModule,
],
providers: [PrismaService, ChatGateway],
})
export class AppModule {}
