"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Sword,
  Users,
  Coins,
  Gem,
  Mail,
  Gift,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useViewportScroll,
  useTransform,
} from "framer-motion";

export default function Component() {
  const [theme, setTheme] = useState("dark");
  const [email, setEmail] = useState("");

  // Parallax effect using Framer Motion
  const { scrollY } = useViewportScroll();

  // Calculate the amount to move the image up
  const [imageMoveUp, setImageMoveUp] = useState(0);
  const [scrollRange, setScrollRange] = useState(0);
  const [imageContainerHeight, setImageContainerHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const vh = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      const totalScrollable = scrollHeight - vh;

      // Adjust speed based on viewport height
      const speedFactor = vh < 500 ? 0.5 : vh < 700 ? 0.7 : 1;
      const adjustedImageMoveUp = vh * speedFactor + 55;

      setImageMoveUp(adjustedImageMoveUp);
      setScrollRange(totalScrollable);
      setImageContainerHeight(Math.ceil(vh * 2.1));
    }
  }, []);


  // Create the parallax effect
  const y = useTransform(scrollY, [0, scrollRange], [0, -imageMoveUp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    alert(
      "Thanks for signing up! We'll notify you when the game launches and send you exclusive gifts!"
    );
  };

  return (
    <div className={`relative flex flex-col min-h-screen ${theme}`}>
      {/* Parallax Image on the Right Side */}
      <motion.div
        style={{ y, height: imageContainerHeight }}
        className="fixed top-0 right-0 w-1/4 z-10 overflow-hidden"
      >
        <Image
          src="/images/Screenshot.jpg"
          alt="App Screenshot"
          layout="fill"
          objectFit="contain"
          objectPosition="top center"
        />
      </motion.div>

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
            href="#gameplay"
          >
            Gameplay
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
      <main
        className="flex-1 bg-gray-900 text-white"
        style={{ marginRight: "25%" }}
      >
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
                  Prepare for an epic journey. Sign up now to be notified when
                  our legendary adventure begins!
                </p>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl font-bold">
                  100% Free, No Ads Ever!
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  className="bg-purple-600 text-white hover:bg-purple-700"
                  href="#signup"
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
            </div>
          </div>
        </section>

        {/* Gameplay Section */}
        <section
          id="gameplay"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Immersive Gameplay
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="FitQuest RPG Gameplay Concept"
                  className="rounded-lg object-cover"
                />
              </motion.div>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold">Dynamic World</h3>
                  <p className="text-gray-300">
                    Explore a vast, ever-changing landscape filled with quests,
                    monsters, and hidden treasures.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold">Player Interaction</h3>
                  <p className="text-gray-300">
                    Form alliances, engage in PvP battles, or attempt to steal
                    from other players in high-stakes dungeons.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold">Skill-based Progression</h3>
                  <p className="text-gray-300">
                    Develop your character's abilities through working out in
                    REAL LIFE.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <section
          id="signup"
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
                  />
                  <Button
                    type="submit"
                    className="bg-purple-600 text-white hover:bg-purple-700"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Sign Up
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
