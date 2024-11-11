"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from '@emailjs/browser';
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sword,
  Users,
  Coins,
  Gem,
  Mail,
  Gift,
  CircleDollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Component() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const signupRef = useRef<HTMLDivElement | null>(null);
  const form = useRef<HTMLFormElement | null>(null);
  const [imageMoveUp, setImageMoveUp] = useState(470);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",  
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",  
        { message: email },  // Sending the email as the message
        process.env.NEXT_PUBLIC_KEY || ""
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitting(false);
          setShowPopup(true); // Show success popup
          setEmail(""); // Reset email field
          setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };
  
  
  const handleScrollToSignup = () => {
    signupRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Adjust the parallax effect for the image inside the phone
  const { scrollY } = useScroll();
  const scrollRangeStart = 0;
  const scrollRangeEnd = 1000;
  const y = useTransform(
    scrollY,
    [scrollRangeStart, scrollRangeEnd],
    [0, -imageMoveUp]
  );

  useEffect(() => {
    const updateImageMoveUp = () => {
      if (window.innerWidth >= 1024 && window.innerWidth < 1380) {
        setImageMoveUp(265);
      } else if (window.innerWidth < 1024) {
        setImageMoveUp(200);
      } else {
        setImageMoveUp(470);
      }
    };

    updateImageMoveUp();
    window.addEventListener("resize", updateImageMoveUp);
    return () => window.removeEventListener("resize", updateImageMoveUp);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Success Popup */}
      {showPopup && (
        <div
        className="fixed top-0 left-0 right-0 flex justify-center mt-4"
        style={{ zIndex: 9999 }}
      >
      
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out animate-slide-in">
            🎉 Success! You&apos;ve signed up with {email}. Check your inbox for updates!
          </div>
        </div>
      )}

      {/* Floating Phone Container */}
      <div className="fixed bottom-10 right-10 lg:w-[250px] lg:h-[500px] z-50 hidden md:block md:w-[150px] md:h-[300px]">
        {/* Phone Mockup */}
        <div className="relative w-full h-full bg-black rounded-[40px] border-8 border-gray-800 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-lg"></div>
          {/* Parallax Image */}
          <div className="relative w-full h-full overflow-hidden rounded-[inherit]">
            <motion.div
              style={{ y }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src="/images/Screenshot.jpg"
                alt="App Screenshot"
                width={250}
                height={700}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-md z-50">
        <Link className="flex items-center justify-center" href="#">
          <Sword className="h-8 w-8 text-purple-500 animate-pulse" />
          <span className="ml-2 text-2xl font-bold text-white">
            FitQuest RPG
          </span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link
            className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4 transition duration-300"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4 transition duration-300"
            href="#signup"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 mt-16">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 overflow-hidden">
          {/* Background Particles */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{
                backgroundImage: 'url("/images/particles.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
          <div className="relative container mx-auto px-4 md:px-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <div className="space-y-4">
                <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-lg">
                  FitQuest RPG: Coming Soon
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-2xl">
                  Sign up now to receive exclusive updates and be notified when
                  FitQuest RPG launches!
                </p>
                <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl font-semibold">
                  100% Free, No Ads Ever!
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  className="bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transform transition duration-300 shadow-xl"
                  onClick={handleScrollToSignup}
                >
                  Get Notified
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-16 md:py-24 lg:py-32 bg-gray-900"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-white">
              Upcoming Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature Cards */}
              {[
                {
                  icon: <Users className="h-14 w-14 text-blue-500" />,
                  title: "Multiplayer Dungeons",
                  description:
                    "Team up or compete with other players in dynamic, ever-changing dungeons.",
                },
                {
                  icon: <Coins className="h-14 w-14 text-yellow-500" />,
                  title: "Player Economy",
                  description:
                    "Trade, steal, or earn your way to riches in a player-driven economy.",
                },
                {
                  icon: <Gem className="h-14 w-14 text-purple-500" />,
                  title: "Treasure Hunting",
                  description:
                    "Discover and open chests filled with rare loot and powerful artifacts.",
                },
                {
                  icon: <Sword className="h-14 w-14 text-red-500" />,
                  title: "PvP Dungeons",
                  description:
                    "Engage in thrilling battles with other players, fighting to be the last one standing.",
                },
                {
                  icon: (
                    <CircleDollarSign className="h-14 w-14 text-green-500" />
                  ),
                  title: "Track Workouts",
                  description:
                    "Track your real-life workouts to level up your in-game character and unlock new abilities.",
                },
                {
                  icon: <Gift className="h-14 w-14 text-pink-400" />,
                  title: "500+ Unique Items",
                  description:
                    "Collect over 500 items, including rare gear and powerful artifacts to enhance your character.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-8 bg-gray-800 rounded-xl shadow-lg transform transition duration-300"
                >
                  {feature.icon}
                  <h3 className="text-2xl font-bold mt-4 mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <section
          id="signup"
          ref={signupRef}
          className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden"
        >
          {/* Background Particles */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
              style={{
                backgroundImage: 'url("/images/particles2.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
          <div className="relative container mx-auto px-4 md:px-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
                  Be the First to Play
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                  Sign up now to receive exclusive updates and be notified when
                  FitQuest RPG launches!
                </p>
                <p className="mx-auto max-w-[600px] text-gray-100 md:text-lg font-semibold flex items-center justify-center">
                  <Gift className="mr-2 h-6 w-6 text-yellow-500 animate-bounce" />
                  Early sign-ups get exclusive in-game gifts!
                </p>
              </div>
              <div className="w-full max-w-md">
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 mt-6"
                >
                  <Input
                    className="flex-grow bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Enter your email"
                    name="message"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    className="bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transform transition duration-300 shadow-lg mt-4 sm:mt-0"
                    disabled={isSubmitting}
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Signing up..." : "Sign Up"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 w-full items-center px-4 md:px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 FitQuest RPG. All rights reserved.
          </p>
          <nav className="flex gap-6 mt-4 sm:mt-0">
            <Link
              className="text-sm text-gray-400 hover:text-white hover:underline underline-offset-4 transition duration-300"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm text-gray-400 hover:text-white hover:underline underline-offset-4 transition duration-300"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-gray-400 hover:text-white hover:underline underline-offset-4 transition duration-300"
              href="#"
            >
              Community Guidelines
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
