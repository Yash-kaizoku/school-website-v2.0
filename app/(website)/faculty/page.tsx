import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faculty = [
    { name: "Dr. Sarah Johnson", role: "Principal", dept: "Administration" },
    { name: "Prof. Michael Chen", role: "Head of Science", dept: "Science" },
    { name: "Ms. Emily Davis", role: "Head of Arts", dept: "Humanities" },
    { name: "Mr. Robert Wilson", role: "Sports Director", dept: "Physical Education" },
];

export default function Faculty() {
    return (
        <div className="container py-12 md:py-20">
            <h1 className="mb-6 text-4xl font-bold">Our Faculty</h1>
            <p className="mb-8 text-muted-foreground">
                Meet our dedicated and experienced educators.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {faculty.map((member) => (
                    <Card key={member.name} className="text-center">
                        <CardHeader>
                            <div className="mx-auto h-24 w-24 rounded-full bg-muted" />
                            <CardTitle>{member.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="font-medium text-primary">{member.role}</p>
                            <p className="text-sm text-muted-foreground">{member.dept}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}