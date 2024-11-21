"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, Star, Coffee, Clock, Home, Building } from "lucide-react";
import confetti from "canvas-confetti";
import { Input } from "@/components/ui/input";

interface Answers {
  isAvailable: boolean | null;
  date: Date | null;
  time: string;
  food: string[];
  movie: string;
  excitement: number;
}

// Dynamic import of HeartBackground with no SSR
const HeartBackground = dynamic(() => import("@/components/HeartBackground"), {
  ssr: false,
});

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
};

export default function EnchantingDateProposalApp() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState<Answers>({
    isAvailable: null,
    date: null,
    time: "",
    food: [],
    movie: "",
    excitement: 50,
  });

  const handleAnswer = (key: keyof Answers, value: Answers[keyof Answers]) => {
    setAnswers({ ...answers, [key]: value });
    setStep(step + 1);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const steps = [
    // Step 0: Initial Question
    <motion.div key="step0" className="text-center" {...fadeInUp}>
      <h1 className="text-4xl font-bold mb-6 text-pink-600">
        quer ir num encontro comigo?
      </h1>
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src="https://media1.tenor.com/m/59regbBE_kwAAAAd/tkthao219-bubududu.gif"
        alt="Cute bear proposal gif"
        className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg"
      />
      <div className="space-x-4">
        <Button
          onClick={() => {
            handleAnswer("isAvailable", true);
            triggerConfetti();
          }}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          sim!!
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="border-pink-300 text-pink-500 hover:bg-pink-100 font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              não
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-pink-50 border-2 border-pink-300">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-pink-600">
                não tem opção não
              </DialogTitle>
              <DialogDescription className="text-lg text-pink-500">
                venha!!
              </DialogDescription>
            </DialogHeader>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="https://media1.tenor.com/m/2XJN2YEYbIAAAAAd/peach-and.gif"
              alt="Excited bear gif"
              className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg"
            />{" "}
            <Button
              onClick={() => {
                handleAnswer("isAvailable", true);
                triggerConfetti();
              }}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              okay
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>,

    // Step 1: Date and Time Selection
    <motion.div key="step1" className="text-center" {...fadeInUp}>
      <h2 className="text-3xl font-bold mb-6 text-pink-600">
        EEEEEEEEEEEEEE, QUANDO?
      </h2>
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src="https://media.tenor.com/WiQQRwR2QFAAAAAi/cute-panda.gif"
        alt="Excited bear gif"
        className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg"
      />
      <div className="mb-6 p-4 bg-white rounded-lg shadow-lg">
        <Calendar
          mode="single"
          selected={answers.date || undefined}
          onSelect={(date) => setAnswers({ ...answers, date: date || null })}
          className="mx-auto mb-4"
        />
        <Select onValueChange={(time) => setAnswers({ ...answers, time })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="horário" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
              <SelectItem
                key={hour}
                value={`${hour.toString().padStart(2, "0")}:00`}
              >
                {`${hour.toString().padStart(2, "0")}:00`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        onClick={() => setStep(step + 1)}
        disabled={!answers.date || !answers.time}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 animate-pulse disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Clock className="mr-2 h-5 w-5" /> essa é a data!{" "}
        <Heart className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>,

    // Step 2: Food Selection
    <motion.div key="step2" className="text-center" {...fadeInUp}>
      <h2 className="text-3xl font-bold mb-6 text-pink-600">
        doko ni?
      </h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        {[
          { name: "minha casa", icon: <Home /> },
          { name: "sua casa", icon: <Home /> },
          { name: "shopping", icon: <Building /> },
        ].map(({ name, icon }) => (
          <motion.button
            key={name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`h-32 flex flex-col items-center justify-center rounded-lg shadow-md transition-colors duration-300 ${answers.food.includes(name)
                ? "bg-pink-500 text-white"
                : "bg-white text-pink-600 hover:bg-pink-100"
              }`}
            onClick={() => {
              const newFood = answers.food.includes(name)
                ? answers.food.filter((f) => f !== name)
                : [name];
              setAnswers({ ...answers, food: newFood });
            }}
          >
            {icon}
            <span className="mt-2 font-semibold">{name}</span>
          </motion.button>
        ))}
        <motion.button
          key={"outro"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`h-32 flex flex-col p-2 items-center justify-center rounded-lg shadow-md transition-colors duration-300 ${answers.food.includes("outro")
              ? "bg-pink-500 text-white"
              : "bg-white text-pink-600 hover:bg-pink-100"
            }`}
          onClick={() => {
            const newFood = ["outro", input];
            setAnswers({ ...answers, food: newFood });
          }}
        >
          <Coffee />
          <span className="mt-2 font-semibold">outro</span>
          <Input className="bg-white text-black" value={input} onChange={(e) => {
            setInput(e.target.value)
            setAnswers({ ...answers, food: ["outro", e.target.value] })
          }}  />
        </motion.button>
      </div>
      <Button
        onClick={() => setStep(step + 1)}
        disabled={answers.food.length === 0}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ikou!
      </Button>
    </motion.div>,

    // Step 3: Excitement Rating
    <motion.div key="step4" className="text-center" {...fadeInUp}>
      <h2 className="text-3xl font-bold mb-6 text-pink-600">
        está animada?
      </h2>
      <div className="max-w-md mx-auto mb-6 p-4 bg-white rounded-lg shadow-lg">
        <motion.div className="relative h-6 mb-4">
          {[0, 25, 50, 75, 100].map((value) => (
            <motion.div
              key={value}
              className="absolute top-0 w-6 h-6 rounded-full bg-pink-300"
              style={{ left: `${value}%`, x: "-50%" }}
              animate={{ scale: answers.excitement === value ? 1.2 : 1 }}
            />
          ))}
        </motion.div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={25}
          onValueChange={(value) =>
            setAnswers({ ...answers, excitement: value[0] })
          }
        />
        <div className="flex justify-between mt-2">
          <span>ss</span>
          <span>sssssss</span>
        </div>
      </div>
      <motion.div
        className="text-2xl font-bold text-pink-600 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        nível de animação: {answers.excitement}%
      </motion.div>
      <Button
        onClick={() => {
          setStep(step + 1);
          setTimeout(triggerConfetti, 500);
        }}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
      >
        vamos!!
      </Button>
    </motion.div>,

    // Step 5: Final Message
    <motion.div key="step5" className="text-center" {...fadeInUp}>
      <h2 className="text-4xl font-bold mb-6 text-pink-600">
        marcado, meu amor
      </h2>
      <p className="text-xl mb-2 text-pink-500">
        vamos nos ver em
      </p>
      <p className="text-2xl font-bold mb-6 text-pink-600">
        {answers.date?.toLocaleDateString("pt-br", {dateStyle: 'full'})} às {answers.time}
      </p>
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src="https://media.tenor.com/yvUCU981VYoAAAAj/mochi-cat-goma.gif"
        alt="Excited bear gif"
        className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg"
      />{" "}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Star className="text-yellow-400 w-16 h-16 mx-auto mt-6" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 text-lg text-pink-500"
      >
        <p>vamos para {answers.food.join(", ")}.</p>
        <p className="mt-4 font-bold">
          Your excitement level: {answers.excitement}/100
        </p>
      </motion.div>
    </motion.div>,
  ];

  useEffect(() => {
    const saveAnswers = async () => {
      console.log('Saved answers:', answers);

      // Save to localStorage
      localStorage.setItem('dateProposalAnswers', JSON.stringify(answers));

      // Send to your email
      try {
        await fetch('/api/send-response', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(answers)
        });
      } catch (error) {
        console.error('Failed to send response:', error);
      }
    };

    if (step === steps.length - 1) {
      saveAnswers();
    }
  }, [step, answers, steps.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <Suspense fallback={null}>
        <HeartBackground />
      </Suspense>
      <motion.div
        className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 max-w-2xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">{steps[step]}</AnimatePresence>
      </motion.div>
    </div>
  );
}
