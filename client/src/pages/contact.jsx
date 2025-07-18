import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import API from "../services/api";
import { Link } from "react-router-dom"

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const handleContact = async () => {
        if (!name || !email || !message) return alert("All fields required");
        setLoading(true);
        try {
        await API.post("/contact", { name, email, message });
        alert("Message sent successfully!");
        navigate("/");
        } catch (err) {
        alert(err.response?.data?.message || "Failed to send message");
        } finally {
        setLoading(false);
        }
    };
    
    return (
        <div className="flex min-h-screen items-center justify-center bg-blue-200 dark:bg-zinc-900 px-4">
        <Card className="w-full max-w-md shadow-xl animate-fade">
            <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
            <Input
                className="mb-3"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Input
                className="mb-3"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Textarea
                type="text"
                placeholder="Your Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            </CardContent>
            <CardFooter>
            <Button onClick={handleContact} disabled={loading} className="w-full bg-blue-500 hover:bg-blue-600">
                {loading ? "Sending..." : "Send Message"}
            </Button>
            </CardFooter>
        </Card>
        </div>
    );
    }