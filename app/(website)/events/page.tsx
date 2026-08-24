const events = [
    { title: "Science Fair 2024", date: "Dec 10, 2024", description: "Showcasing student innovations." },
    { title: "Cultural Fest", date: "Jan 15, 2025", description: "Music, dance, and drama performances." },
    { title: "Parent-Teacher Meet", date: "Feb 20, 2025", description: "Discuss student progress." },
];

export default function Events() {
    return (
        <div className="container py-12 md:py-20">
            <h1 className="mb-6 text-4xl font-bold">Events</h1>
            <div className="space-y-6">
                {events.map((event) => (
                    <div key={event.title} className="border-l-4 border-primary pl-4">
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <p className="mt-1">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}