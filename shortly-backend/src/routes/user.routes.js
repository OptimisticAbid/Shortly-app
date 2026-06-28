import express from 'express'
import {registerUser , loginUser, getMe, updateUser, deleteUser} from '../controllers/user.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js';
import { loginSchema, registerSchema, updateUserSchema}  from '../validators/user.validator.js'
import { validate } from '../middlewares/validation.middleware.js';

const router = express.Router()


router.post('/register', validate(registerSchema), registerUser)

router.post('/login', validate(loginSchema) ,loginUser)

router.get("/me", authMiddleware, getMe) ;

router.put('/me', authMiddleware, validate(updateUserSchema), updateUser)

router.delete('/me', authMiddleware, deleteUser)

export default router ;