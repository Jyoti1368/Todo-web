import  {Router} from "express"
import { createUser } from "../controllers/signupController";
const router = Router();


router.use('/api/user',createUser)

export default router