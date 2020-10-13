"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSendGridProviders = void 0;
const sendgrid_constants_1 = require("../common/sendgrid.constants");
const sendgrid_util_1 = require("../common/sendgrid.util");
function createSendGridProviders(options) {
    return {
        provide: sendgrid_constants_1.SENDGRID_TOKEN,
        useValue: sendgrid_util_1.createSendGridClient(options),
    };
}
exports.createSendGridProviders = createSendGridProviders;
