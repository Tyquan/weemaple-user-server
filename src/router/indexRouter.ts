import { Request, Response, NextFunction, Router} from "express";

const router = Router();

router.get('^/$|/index(.html)?', (req: Request, res: Response, next: NextFunction) => {
    next(res.render('index'));
});

export default router;