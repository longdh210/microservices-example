"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const order_service_entity_1 = require("./entities/order-service.entity");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('ORDER_HOST'),
                    port: configService.get('ORDER_PORT'),
                    username: configService.get('ORDER_USER'),
                    password: configService.get('ORDER_PASSWORD'),
                    database: configService.get('ORDER_DB'),
                    entities: [order_service_entity_1.OrderEntity],
                    synchronize: true,
                }),
            }),
            typeorm_1.TypeOrmModule.forFeature([order_service_entity_1.OrderEntity]),
            microservices_1.ClientsModule.register([
                {
                    name: 'PRODUCT_CATALOG_PACKAGE',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        url: '0.0.0.0:3001',
                        package: 'productcatalog',
                        protoPath: (0, path_1.join)(__dirname, '../proto/product-catalog.proto'),
                    },
                },
                {
                    name: 'PAYMENT_PACKAGE',
                    transport: microservices_1.Transport.GRPC,
                    options: {
                        url: '0.0.0.0:3003',
                        package: 'payment',
                        protoPath: (0, path_1.join)(__dirname, '../proto/payment.proto'),
                    },
                },
            ]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map