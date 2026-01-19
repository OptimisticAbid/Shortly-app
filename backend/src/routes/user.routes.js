import express from 'express'
import {registerUser , loginUser, getMe, updateUser, deleteUser} from '../controllers/user.controller.js'
import authMiddleware from '../middlewares/auth.middleware.js';


const router = express.Router()


router.post('/register' , registerUser)

router.post('/login', loginUser)

router.get("/me", authMiddleware, getMe) ;

router.put('/me', authMiddleware , updateUser)

router.delete('/me', authMiddleware , deleteUser)

export default router ;