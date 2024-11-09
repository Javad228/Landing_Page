"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  CircleDollarSign 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Component() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const signupRef = useRef<HTMLDivElement | null>(null);
  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    try {
      // Replace your-email@example.com with your actual email
      const response = await fetch('https://formsubmit.co/loggerwork3@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          subject: "New FitQuest RPG Signup!",
          message: `New signup from: ${email}`
        })
      });

      if (response.ok) {
        setEmail('');
        alert('Thanks for signing up! We\'ll notify you when the game launches and send you exclusive gifts!');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, there was an error signing up. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScrollToSignup = () => {
    signupRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Parallax effect using Framer Motion
  const { scrollY } = useScroll();

  // Adjust the parallax effect
  const imageMoveUp = 370; // Adjust this value as needed
  const scrollRangeStart = 0;
  const scrollRangeEnd = 1000; // Adjust based on your content height

  // Create the parallax effect for the image inside the phone
  const y = useTransform(
    scrollY,
    [scrollRangeStart, scrollRangeEnd],
    [0, -imageMoveUp]
  );


  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Floating Phone Container */}
      <div className="fixed bottom-10 right-10 w-[200px] h-[400px] z-50 hidden md:block">
        {/* Phone Mockup */}
        <div className="relative w-full h-full bg-black rounded-[40px] border-8 border-gray-800 shadow-xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-lg "></div>
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


      {/* Rest of the content */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-700 bg-gray-900 z-20">
        <Link className="flex items-center justify-center" href="#">
          <Sword className="h-6 w-6 text-purple-500" />
          <span className="ml-2 text-2xl font-bold text-white">
            FitQuest RPG
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
            href="#signup"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  FitQuest RPG: Coming Soon
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Sign up now to receive exclusive updates and be notified when FitQuest RPG launches!!
                </p>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl font-bold">
                  100% Free, No Ads Ever!
                </p>
              </div>
              <div className="space-x-4">
              <Button
                className="bg-purple-600 text-white hover:bg-purple-700"
                onClick={handleScrollToSignup}
              >
                Get Notified
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Upcoming Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Existing Features */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 p-6 bg-gray-800 rounded-lg shadow-lg"
              >
                <Users className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold">Multiplayer Dungeons</h3>
                <p className="text-center text-gray-400">
                  Team up or compete with other players in dynamic,
                  ever-changing dungeons.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 p-6 bg-gray-800 rounded-lg shadow-lg"
              >
                <Coins className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold">Player Economy</h3>
                <p className="text-center text-gray-400">
                  Trade, steal, or earn your way to riches in a player-driven
                  economy.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 p-6 bg-gray-800 rounded-lg shadow-lg"
              >
                <Gem className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Treasure Hunting</h3>
                <p className="text-center text-gray-400">
                  Discover and open chests filled with rare loot and powerful
                  artifacts.
                </p>
              </motion.div>

              {/* New Features */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 p-6 bg-gray-800 rounded-lg shadow-lg"
              >
                <Sword className="h-12 w-12 text-red-500" />
                <h3 className="text-xl font-bold">PvP Dungeons</h3>
                <p className="text-center text-gray-400">
                  Engage in thrilling battles with other players, fighting to be the last one standing.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 p-6 bg-gray-800 rounded-lg shadow-lg"
              >
                <CircleDollarSign className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold">Track Workouts</h3>
                <p className="text-center text-gray-400">
                  Track your real-life workouts to level up your in-game character and unlock new abilities.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center space-y-2 p-6 bg-gray-800 rounded-lg shadow-lg"
              >
                <Gift className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold">500+ Unique Items</h3>
                <p className="text-center text-gray-400">
                  Collect over 500 items, including rare gear and powerful artifacts to enhance your character.
                </p>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Gameplay Section */}


        {/* Signup Section */}
        <section
          id="signup"
          ref={signupRef}
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Be the First to Play
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Sign up now to receive exclusive updates and be notified when
                  FitQuest RPG launches!
                </p>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl font-bold">
                  <Gift className="inline-block mr-2 h-6 w-6 text-yellow-500" />
                  Early sign-ups get exclusive in-game gifts!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  className="flex-grow bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="bg-purple-600 text-white hover:bg-purple-700"
                  disabled={isSubmitting}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Signing up...' : 'Sign Up'}
                </Button>
              </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700 bg-gray-900">
        <div className="container flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            © 2024 FitQuest RPG. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link
              className="text-xs text-gray-400 hover:text-white hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs text-gray-400 hover:text-white hover:underline underline-offset-4"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-xs text-gray-400 hover:text-white hover:underline underline-offset-4"
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
