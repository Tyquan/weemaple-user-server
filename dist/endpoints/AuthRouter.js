"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
router.post('/register', (req, res) => {
    userController.postNewUser(req, res);
});
router.post('/login', (req, res) => {
    res.sendStatus(200).json({ message: "Successful" });
});
class AuthRouter {
    static postNewUser() {
    }
}
exports.default = AuthRouter;
