const images = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    title: `Gallery ${i + 1}`,
}));

export default function Gallery() {
    return (
        <div className="container py-12 md:py-20">
            <h1 className="mb-6 text-4xl font-bold">Gallery</h1>
            <p className="mb-8 text-muted-foreground">A glimpse into our campus life.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((img) => (
                    <div
                        key={img.id}
                        className="aspect-square rounded-lg bg-muted flex items-center justify-center border"
                    >
                        <span className="text-muted-foreground">{img.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}