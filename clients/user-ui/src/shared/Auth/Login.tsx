import styles from "../../utils/style";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8characters long!"),
  });
  
  type LoginSchema = z.infer<typeof formSchema>;

const Login = ({ setActiveState } :{ setActiveState: (e: string) => void }) => {

    const {register,handleSubmit, formState: {errors, isSubmitting},reset} = useForm<LoginSchema>({
        resolver: zodResolver(formSchema),
    })

    const [show, setShow] = useState(false);

    const onSubmit = (data: LoginSchema) => {
        console.log(data);
        reset();
    }

    return (
    <div>
      <h1 className={`${styles.title}`}>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label className={`${styles.label}`}>Enter your Email</label>
      <input {...register("email")} 
        type="email" placeholder="loginmail@gmail.com" className={`${styles.input}`} 
      />
      {
        errors.email && (
            <span className="text-red-500 block mt-1">
                {`${errors.email.message}`}
            </span>
        )}
        <div className="w-full mt-5 relative mb-1">
            <label htmlFor="password" className={`${styles.label}`}>
                Enter your password
            </label>
        
        <input
            {...register("password")}
            type={!show ? "password" : "text"}
            placeholder="password!@%"
            className={`${styles.input}`}
          />
          
           {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer text-white"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer text-white"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
        </div>
        {errors.password && (
          <span className="text-red-500">{`${errors.password.message}`}</span>
        )}
        <div className="w-full mt-5">
        <span className={`${styles.label} block text-right cursor-pointer`}
        style={{ color: '#2190ff' }}
        >
            Forgot your password
        </span>
        <input
            type="submit"
            value="Login"
            disabled={isSubmitting}
            className={`${styles.button} mt-3`}
          />
        </div>
        <br />
        <h5 className="text-center pt-4 font-Poppins text-[16px] text-white">
          Or join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle size={30} className="cursor-pointer mr-2" />
          <AiFillGithub size={30} className="cursor-pointer ml-2 text-white"/>
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-white">
          Not have any account?
          <span className="text-[#2190ff] pl-1 cursor-pointer" onClick={() => setActiveState("Signup")}
            >
                Sign up
            </span>
        </h5>
        <br />
      </form>
    </div>
    )
}

export default Login;