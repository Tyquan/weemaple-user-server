"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexRouter {
    static getIndex(router) {
        router.get('^/$|/index(.html)?', (req, res, next) => {
            // ;
            next(res.render('index'));
        });
    }
}
exports.default = IndexRouter;
