import { Request, Response, NextFunction, Router } from "express";
import asyncHandler from 'express-async-handler';
import { signUserUp } from "../controllers/signupController";

const router = Router();

// Register a new User
router.post('/register', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    // Pass user credentials to controller to be structured, validated, and saved to a database
    let newSavedUser = await signUserUp(req.body.email, req.body.password);

    //  If the signup process yielded no result (meaning any process has failed)
    if (newSavedUser == null) {
        next(res.status(404).json({ 'success': ``, 'error': 'Error signing up' }));
    }

    // If the signup process was successfull
    next(res.status(201).json({ 'success': `New user ${newSavedUser}created!`, 'error': '' }));

}));

export default router;