import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div className="container py-12 md:py-20">
            <h1 className="mb-6 text-4xl font-bold">Contact Us</h1>
            <div className="grid gap-8 md:grid-cols-2">
                <div>
                    <form className="space-y-4">
                        <Input placeholder="Your Name" />
                        <Input type="email" placeholder="Email Address" />
                        <Input placeholder="Subject" />
                        <Textarea placeholder="Message" rows={5} />
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-muted-foreground">+1 234 567 890</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-medium">Email</p>
                            <p className="text-muted-foreground">info@excelacademy.edu</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-medium">Address</p>
                            <p className="text-muted-foreground">123 Education Street, City, State</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}