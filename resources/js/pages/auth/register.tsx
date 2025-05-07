import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('register', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div>
            <Head title="Register" />
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">Sign Up</h2>
                    <form onSubmit={submit} className="space-y-4">
                        {/* Name Input */}
                        <div>
                            <label className="block text-gray-700">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                autoFocus
                                tabIndex={1}
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Your Full Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                tabIndex={2}
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="email@example.com"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type="password"
                                    tabIndex={3}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="Password"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-2 text-gray-600 text-sm">
                                    <i className="fas fa-eye"></i>
                                </button>
                            </div>

                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        {/* Password Confirmation Input */}
                        <div>
                            <label className="block text-gray-700">Confirm Password</label>
                            <div className="relative">
                                <input
                                    id="password_confirmation"
                                    type="password"
                                    tabIndex={4}
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="Confirm Password"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-2 text-gray-600 text-sm">
                                    <i className="fas fa-eye"></i>
                                </button>
                            </div>

                            {errors.password_confirmation && <p className="text-red-500 text-sm mt-1">{errors.password_confirmation}</p>}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" disabled={processing}>
                            Sign Up
                        </button>

                        <p className="text-center text-gray-700 mt-4">
                            Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
