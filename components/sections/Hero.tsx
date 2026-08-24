import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20 text-white md:py-32">
            <div className="container relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                        Shaping Future Leaders
                    </h1>
                    <p className="mb-8 text-lg text-blue-100 md:text-xl">
                        Excel Academy provides a holistic education that nurtures academic excellence,
                        creativity, and character development.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/admissions">
                            <Button size="lg" variant="secondary" className="font-semibold">
                                Apply Now
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </section>
    );
}