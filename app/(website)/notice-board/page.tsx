const notices = [
    { title: "Winter Break", date: "Dec 20, 2024", content: "School will remain closed from Dec 20 to Jan 5." },
    { title: "PTM Schedule", date: "Dec 15, 2024", content: "Parent-Teacher meeting scheduled for all classes." },
    { title: "Sports Day", date: "Dec 22, 2024", content: "Annual Sports Day will be held at the main ground." },
];

export default function NoticeBoard() {
    return (
        <div className="container py-12 md:py-20">
            <h1 className="mb-6 text-4xl font-bold">Notice Board</h1>
            <div className="space-y-6">
                {notices.map((notice) => (
                    <div key={notice.title} className="rounded-lg border p-6">
                        <h3 className="text-xl font-bold">{notice.title}</h3>
                        <p className="text-sm text-muted-foreground">{notice.date}</p>
                        <p className="mt-2">{notice.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}