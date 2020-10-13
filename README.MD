[![npm version](https://img.shields.io/npm/v/@mehulbaid/nest-sendgrid?style=for-the-badge)](https://npmjs.com/package/@mehulbaid/nest-sendgrid "View this project on NPM")

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

<p align="center">
  <h3 align="center">
    @mehulbaid/nest-sendgrid
  </h3>

  <p align="center">
    SendGrid Extension Library for NestJS based projects.
  </p>
</p>

## Table Of Contents

- [About](#about)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

`@mehulbaid/nest-sendgrid` provides a modular way to use `SendGrid` which when imported into
your nestjs project provides an instance of the `@sendgrid/mail` client to any Module that injects it. 

## Installation

```bash
npm install --save @mehulbaid/nest-sendgrid @sendgrid/mail
```

## Getting Started

The simplest way to use `@mehulbaid/nest-sendgrid` is to use `SendGridModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { SendGridModule } from '@mehulbaid/nest-sendgrid';

@Module({
  imports: [
    SendGridModule.forRoot({
      apiKey: 'my_secret_key',
    }),
  ],
})
export class AppModule {}
```

The async way `@mehulbaid/nest-sendgrid` is to use `SendGridModule.forRootAsync`

```typescript
import { Module } from '@nestjs-common';
import { SendGridModule } from '@mehulbaid/nest-sendgrid';
import { ConfigModule } from '@mehulbaid/nestjs-config';
import { ConfigService } from '@mehulbaid/nestjs-config';

@Module({
  imports: [
    SendGridModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (cfg:ConfigService) => ({
        apiKey: cfg.get('SENDGRID_API_KEY'),
      }),
      inject: [ConfigService],
    })
  ]
})

export class AppModule {}
```

You can then inject the Stripe client into any of your injectables by using a
custom decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectSendGrid, SendGridService } from '@mehulbaid/nest-sendgrid';

@Injectable()
export class AppService {
  public constructor(@InjectSendGrid() private readonly client: SendGridService) {}
}
```

Asynchronous setup is also supported

```typescript
import { Module } from '@nestjs-common';
import { ConfigModule } from '../common/config/config.module';
import { ConfigService } from '../common/config/config.service';
import { SendGridModule } from '@mehulbaid/nest-sendgrid';

@Module({
  imports: [
    StripeModule.forRootAsync({
      imports: [ConfigModule],  
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        apiKey: cfg.get('sendgrid_api_key'),
      }),
    }),
  ],
})
export class AppModule {}
```

## Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [nestjs](https://nestjs.com)
- [@sendgrid/mail](https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail)
