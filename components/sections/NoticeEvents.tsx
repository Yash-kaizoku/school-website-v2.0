import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Bell } from "lucide-react";

const notices = [
    "Winter break from Dec 20 to Jan 5",
    "Parent-Teacher meeting on Dec 15",
    "Annual Sports Day on Dec 22",
];
const events = [
    { name: "Science Fair", date: "Dec 10, 2024" },
    { name: "Cultural Fest", date: "Jan 15, 2025" },
    { name: "Graduation Ceremony", date: "Mar 20, 2025" },
];

export function NoticeEvents() {
    return (
        <section className="border-t bg-muted/30 py-16 md:py-24">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                            <Bell className="h-6 w-6 text-primary" /> Notice Board
                        </h3>
                        <div className="space-y-3">
                            {notices.map((notice, i) => (
                                <Card key={i}>
                                    <CardContent className="p-4 text-sm">{notice}</CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                            <Calendar className="h-6 w-6 text-primary" /> Upcoming Events
                        </h3>
                        <div className="space-y-3">
                            {events.map((event, i) => (
                                <Card key={i}>
                                    <CardContent className="flex items-center justify-between p-4">
                                        <span className="font-medium">{event.name}</span>
                                        <span className="text-sm text-muted-foreground">{event.date}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}