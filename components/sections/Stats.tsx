import { Users, BookOpen, Award, Clock } from "lucide-react";

const stats = [
    { label: "Students", value: "2,500+", icon: Users },
    { label: "Teachers", value: "120+", icon: BookOpen },
    { label: "Awards", value: "50+", icon: Award },
    { label: "Years", value: "25+", icon: Clock },
];

export function Stats() {
    return (
        <section className="border-b bg-muted/30 py-12">
            <div className="container">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <stat.icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                            <div className="text-2xl font-bold md:text-3xl">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}