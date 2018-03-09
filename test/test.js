"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_typescript_1 = require("mocha-typescript");
const chai_1 = require("chai");
let Suite = Suite_1 = class Suite {
    first() {
        chai_1.assert.isAbove(Suite_1.tries2++, 2);
    }
    second() {
        chai_1.assert.isAbove(Suite_1.tries1++, 3);
    }
};
Suite.tries1 = 0;
Suite.tries2 = 1;
__decorate([
    mocha_typescript_1.test
], Suite.prototype, "first", null);
__decorate([
    mocha_typescript_1.test(mocha_typescript_1.retries(5))
], Suite.prototype, "second", null);
Suite = Suite_1 = __decorate([
    mocha_typescript_1.suite(mocha_typescript_1.retries(2))
], Suite);
var Suite_1;
//# sourceMappingURL=test.js.map