"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('^/$|/index(.html)?', (req, res, next) => {
    next(res.render('index'));
});
exports.default = router;
