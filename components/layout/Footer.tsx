import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Excel Academy</h3>
                        <p className="text-sm text-muted-foreground">
                            Empowering students with quality education and modern technology.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-primary">About</Link></li>
                            <li><Link href="/admissions" className="hover:text-primary">Admissions</Link></li>
                            <li><Link href="/faculty" className="hover:text-primary">Faculty</Link></li>
                            <li><Link href="/events" className="hover:text-primary">Events</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-semibold">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" /> +1 234 567 890
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" /> info@excelacademy.edu
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" /> 123 Education St, City
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-semibold">Follow Us</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-primary"><FaFacebook /></Link>
                            <Link href="#" className="hover:text-primary"><FaTwitter /></Link>
                            <Link href="#" className="hover:text-primary"><FaInstagram /></Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Excel Academy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}