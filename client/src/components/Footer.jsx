import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { DribbbleIcon, GithubIcon, TwitchIcon, TwitterIcon } from "lucide-react";

const footerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Compare Users",
    href: "/compare",
  },
  {
    title: "Repository Insights",
    href: "/repo",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/email/newsletter`, {
        email,
      });
      setEmail("");
      // You can add a toast here if needed
    } catch (error) {
      // Optionally handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 flex flex-col sm:flex-row items-start justify-between gap-x-8 gap-y-10 px-4 sm:px-6 xl:px-0">
          <div>
            <div className="flex items-center gap-2">
              <GithubIcon className="w-8 h-8 text-primary" />
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                en-git
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Analyze GitHub profiles, compare users, and get AI-powered insights to level up your
              development journey.
            </p>

            <ul className="mt-6 flex items-center gap-3 sm:gap-4 flex-wrap text-sm">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-xs w-full">
            <h6 className="font-semibold text-base sm:text-lg">Stay up to date</h6>
            <form
              onSubmit={handleSubmit}
              className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <Separator />

        <div className="py-6 sm:py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-4 sm:px-6 xl:px-0">
          <span className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <a href="/" className="hover:text-foreground transition-colors">
              en-git
            </a>
            . Built by Tejas. All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href="https://github.com/TejasS1233"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/TejasS1233"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
