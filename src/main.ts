import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { json, urlencoded } from 'express'
import { TransformInterceptor } from './common/interceptors/transform.interceptor'


async function bootstrap() {
const app = await NestFactory.create(AppModule, { cors: true })
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))
app.useGlobalInterceptors(new TransformInterceptor())
app.use(json({ limit: '5mb' }))
app.use(urlencoded({ extended: true }))
await app.listen(process.env.PORT || 3001)
}
bootstrap()
