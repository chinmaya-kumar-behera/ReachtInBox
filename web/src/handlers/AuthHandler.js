'use client';
import { loginService } from '@/services/loginServices'

const AuthHandler = () => {
  
    const loginHandler = async() => {
        const result = await loginService();
        console.log(result)
    }
    return { loginHandler };
}

export default AuthHandler