import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    return (
        <AppLayout>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-white text-black justify-center p-8">
                <h1 className="font-bold text-xl">Welcome to Kreavoks</h1>
                <h2>This is the Home Page</h2>
            </div>
        </AppLayout>
    );
}