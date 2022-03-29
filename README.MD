[![npm version](https://img.shields.io/npm/v/@mehulbaid/nest-sendgrid?logo=npm&style=for-the-badge)](https://npmjs.com/package/@mehulbaid/nest-sendgrid "View this project on NPM")
![npm](https://img.shields.io/npm/dw/@mehulbaid/nest-sendgrid?logo=npm&style=for-the-badge)
![npm](https://img.shields.io/npm/dm/@mehulbaid/nest-sendgrid?logo=npm&style=for-the-badge)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=for-the-badge)](http://opensource.org/licenses/MIT)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmehulbaid%2Fnest-sendgrid.svg?type=small)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmehulbaid%2Fnest-sendgrid?ref=badge_small)

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

## Packge Versions

| Package Version | Nestjs Version |
|-----------------|----------------|
| 1.x.x           | ^6.x.x         |
| 2.x.x           | ^7.x.x         |
| 3.x.x           | ^8.x.x         |


## Installation

```bash
npm install --save @mehulbaid/nest-sendgrid @sendgrid/mail
```

## Getting Started

The simplest way to use `@mehulbaid/nest-sendgrid` is to use `SendGridModule.forRoot`

```typescript
import { Module } from '@nestjs/common';
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
import { Module } from '@nestjs/common';
import { SendGridModule } from '@mehulbaid/nest-sendgrid';
import { ConfigModule, ConfigService } from '@nestjs/config';

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

## License

Distributed under the MIT License. See `LICENSE` for more information.


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fmehulbaid%2Fnest-sendgrid.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fmehulbaid%2Fnest-sendgrid?ref=badge_large)

## Acknowledgements

- [nestjs](https://nestjs.com)
- [@sendgrid/mail](https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail)
