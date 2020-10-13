"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectSendGrid = void 0;
const common_1 = require("@nestjs/common");
const sendgrid_constants_1 = require("./sendgrid.constants");
function InjectSendGrid() {
    return common_1.Inject(sendgrid_constants_1.SENDGRID_TOKEN);
}
exports.InjectSendGrid = InjectSendGrid;
