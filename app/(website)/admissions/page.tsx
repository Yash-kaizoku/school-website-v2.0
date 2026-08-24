import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Admissions() {
    return (
        <div className="container py-12 md:py-20">
            <h1 className="mb-6 text-4xl font-bold">Admissions</h1>
            <p className="mb-8 text-muted-foreground">
                Join our community of learners. Admissions are open for the academic year 2025-2026.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Step 1</CardTitle>
                        <CardDescription>Fill the Application</CardDescription>
                    </CardHeader>
                    <CardContent>Complete the online application form with student details.</CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Step 2</CardTitle>
                        <CardDescription>Assessment</CardDescription>
                    </CardHeader>
                    <CardContent>Attend the entrance assessment and interaction.</CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Step 3</CardTitle>
                        <CardDescription>Enrollment</CardDescription>
                    </CardHeader>
                    <CardContent>Complete the fee payment and enrollment process.</CardContent>
                </Card>
            </div>
            <div className="mt-8">
                <Link href="/contact">
                    <Button size="lg">Contact Admissions Office</Button>
                </Link>
            </div>
        </div>
    );
}