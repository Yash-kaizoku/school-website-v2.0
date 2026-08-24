import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Users, Globe, Award } from "lucide-react";

const features = [
    {
        title: "Expert Faculty",
        description: "Learn from qualified and experienced educators.",
        icon: Users,
    },
    {
        title: "Modern Curriculum",
        description: "Blended learning with technology and innovation.",
        icon: Book,
    },
    {
        title: "Global Exposure",
        description: "Exchange programs and international collaborations.",
        icon: Globe,
    },
    {
        title: "Holistic Growth",
        description: "Sports, arts, and personality development.",
        icon: Award,
    },
];

export function Features() {
    return (
        <section className="py-16 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Why Choose Us</h2>
                    <p className="mt-4 text-muted-foreground">
                        We create an environment where every student thrives.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <Card key={feature.title} className="border-2 text-center">
                            <CardHeader>
                                <feature.icon className="mx-auto h-12 w-12 text-primary" />
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{feature.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}