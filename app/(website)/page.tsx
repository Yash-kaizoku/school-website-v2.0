import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { NoticeEvents } from "@/components/sections/NoticeEvents";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <NoticeEvents />
    </>
  );
}