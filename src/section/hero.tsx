"use client"
import { useState, useEffect } from 'react';
import ThemeToggle from "@/components/lib/theme/theme-toggle";
import SectionWrapper from '@/components/lib/section-wrapper';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Biker', 'Software Engineer', 'DevOps', 'IT Expert'];
  const typingSpeed = 80;
  const deletingSpeed = 50;
  const delaySpeed = 1000;

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex % words.length];
      const updatedText = isDeleting
        ? currentWord.substring(0, displayText.length - 1)
        : currentWord.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), delaySpeed);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex(wordIndex + 1);
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <div className="transition-all duration-500 dark:text-white text-black pt-20">
        <SectionWrapper>
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-normal tracking-wider mb-4 opacity-80">
                &gt; HELLO, I'M
              </h2>
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter mb-2 font-inconsolata dark:text-white text-black">
                {displayText}
                <span className="animate-pulse">|</span>
              </h1>
            </div>

            {/* Divider */}
            <div className="w-full h-px dark:bg-white bg-black opacity-30"></div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-sm lg:text-base tracking-wide opacity-70 leading-relaxed">
                &gt; "Passionate about transforming challenges into digital solutions."
              </p>
              <div className="flex gap-4 pt-4">
                <ThemeToggle/>
              </div>
            </div>
          </div>

          {/* Right Content - Decorative */}
          <div className="flex flex-col items-center justify-center space-y-8">

            {/* Stats Box */}
            <div className="w-full p-6 border-2 dark:border-white border-black">
              <div className='ml-3'>
                <p className="text-sm opacity-70">&#123;</p>
                <div className='ml-3'>
                    <p className="text-3xl font-bold">"name" : "jovis jocunda"</p>
                    <p className="text-sm opacity-70">"experience" : "5+ years"</p>
                    <p className="text-sm opacity-70">"tag" : "Building digital experiences with passion"</p>
                    <p className="text-sm opacity-70">"created_at" : "2025-06-21 13:05:12"</p>
                    <p className="text-sm opacity-70">"updated_at" : "2025-12-15 16:52:51"</p>
                </div>
                <p className="text-sm opacity-70">&#125;</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}