import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true
          })
    )

    const options = new DocumentBuilder()
          .setTitle('Endpoints para el gestor documental')
          .setDescription('Estos son los endpoints del backend para el gestor documental, es de tipo REST')
          .setVersion('1.0.0')
          .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/docs', app, document);

    await app.listen(3000);
}

bootstrap();