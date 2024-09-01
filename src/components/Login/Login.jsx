import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const { loading, setLoading, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Handle Sign In
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);

    signIn(email, password)
      .then((result) => {
        toast.success("Admin Login Success");
        navigate("/admin/dashboardCard");
      })
      .catch((err) => {
        setLoading(false);
        setErrors({
          email: "Invalid email or password",
          password: "Invalid email or password",
        });
        toast.error("Something went wrong. Please try again.");
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <div className="relative rounded-none bg-[url('https://i.ibb.co/cCHBSnZ/Hacker-Wallpaper-For-PC.jpg')] bg-cover bg-center bg-no-repeat h-screen">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full flex justify-start items-center"
          style={{
            backgroundColor: "oklch(32.1785% .02476 255.701624 / .6)",
          }}
        >
          <div className="w-80 md:w-96  mx-auto md:ml-[5em]">
            <form
              onSubmit={handleSignIn}
              className="overflow-hidden rounded bg-white shadow-xl py-5"
            >
              <div className="p-6">
                <header className="mb-4 text-center">
                  <h3 className="text-3xl font-bold color">Admin Panel</h3>
                </header>
                <div className="flex flex-col justify-start space-y-8">
                  {/* Email Input */}
                  <div className="relative mt-6">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className={`peer relative h-10 w-full rounded border px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 ${
                        errors.email
                          ? "border-pink-500 text-pink-500"
                          : "border-slate-200 focus:border-emerald-500"
                      }`}
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-2 -top-2 z-[1] px-2 text-xs transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs ${
                        errors.email
                          ? "text-pink-500"
                          : "text-slate-400 peer-focus:text-emerald-500"
                      }`}
                    >
                      Your Email
                    </label>
                    {errors.email && (
                      <p className="text-pink-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  {/* Password Input */}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Your password"
                      className={`peer relative h-10 w-full rounded border px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 ${
                        errors.password
                          ? "border-pink-500 text-pink-500"
                          : "border-slate-200 focus:border-emerald-500"
                      }`}
                    />
                    <label
                      htmlFor="password"
                      className={`absolute left-2 -top-2 z-[1] px-2 text-xs transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs ${
                        errors.password
                          ? "text-pink-500"
                          : "text-slate-400 peer-focus:text-emerald-500"
                      }`}
                    >
                      Your Password
                    </label>
                    <div
                      className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? <IoEyeOff /> : <IoEye />}
                    </div>
                    {errors.password && (
                      <p className="text-pink-500 text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* Action buttons */}
              <div className="flex flex-col justify-end p-6 gap-3">
                <button type="submit" className="btn shadow-xl rounded-lg">
                  {loading ? (
                    <TbFidgetSpinner
                      className="m-auto animate-spin"
                      size={24}
                    />
                  ) : (
                    "Log In"
                  )}
                </button>
                <Link to="/">
                  <button
                    className="py-4 btn w-full tracking-[2px] font-t shadow-xl rounded-lg"
                    type="button"
                  >
                    Go Back Home
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
