// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { GraduationCap } from "lucide-react";

// export default function LoginPage() {
//     return (
//         <div className="container flex min-h-[calc(100vh-12rem)] items-center justify-center py-12">
//             <Card className="w-full max-w-md">
//                 <CardHeader className="text-center">
//                     <div className="flex justify-center mb-4">
//                         <GraduationCap className="h-12 w-12 text-primary" />
//                     </div>
//                     <CardTitle className="text-2xl">Welcome Back</CardTitle>
//                     <CardDescription>
//                         Sign in to access your dashboard
//                     </CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                     <div className="space-y-2">
//                         <Input type="email" placeholder="Email Address" />
//                     </div>
//                     <div className="space-y-2">
//                         <Input type="password" placeholder="Password" />
//                     </div>
//                     <Button className="w-full">Sign In</Button>
//                     <p className="text-center text-sm text-muted-foreground">
//                         Demo credentials: admin@school.com / password123
//                     </p>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Loader2 } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Basic validation
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        setIsLoading(true);

        // --- 🔌 SIMULATED API CALL ---
        // Later, replace this with a real fetch to your backend:
        // const res = await fetch("/api/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

        // Hardcoded demo login (remove this when you connect your backend)
        if (email === "admin@school.com" && password === "password123") {
            // Store a fake token (your real JWT will go here)
            localStorage.setItem("token", "demo-jwt-token");
            router.push("/admin"); // Redirect to admin dashboard
        } else {
            setError("Invalid email or password. Try admin@school.com / password123");
            setIsLoading(false);
        }
    };

    return (
        <div className="container flex min-h-[calc(100vh-12rem)] items-center justify-center py-12">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="mb-4 flex justify-center">
                        <GraduationCap className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Welcome Back</CardTitle>
                    <CardDescription>Sign in to access your dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                                required
                            />
                        </div>

                        {error && (
                            <p className="text-sm text-destructive">{error}</p>
                        )}

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing in...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </Button>

                        <p className="text-center text-sm text-muted-foreground">
                            Demo: admin@school.com / password123
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}