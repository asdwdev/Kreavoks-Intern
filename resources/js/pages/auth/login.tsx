import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div>
            <Head title="Login"></Head>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">Sign In</h2>
                    <form onSubmit={submit} className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                autoFocus
                                tabIndex={1}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="email@example.com"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Menampilkan Error Email */}
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type="password"
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Password"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-2 text-gray-600 text-sm">
                                    <i className="fas fa-eye"></i>
                                </button>
                            </div>

                            {/* Menampilkan Error Password */}
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-gray-700">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    tabIndex={3}
                                    checked={data.remember}
                                    onClick={() => setData('remember', !data.remember)}
                                    className="mr-2"
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                            Sign In
                        </button>

                        <div className="text-center text-gray-500">or</div>

                        {/* Google Login Button */}
                        <button type="button" className="w-full flex items-center justify-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                            <i className="fab fa-google mr-2"></i> Login with Google
                        </button>
                    </form>

                    <p className="text-center text-gray-700 mt-4">
                        Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
