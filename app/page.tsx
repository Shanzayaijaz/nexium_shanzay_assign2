"use client";
import React, { useState, useRef, useEffect } from "react";
import { CheckCircle, AlertCircle, FileText, Globe, Languages, Save, Sparkles, Copy, Check, Volume2, ChevronDown } from "lucide-react";
import AuthForm from "../components/AuthForm";
import { useSession } from '@supabase/auth-helpers-react';

function fakeScrape(url: string): string {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("tech")) {
    return `Technology is evolving at a rapid pace, transforming the way we live, work, and connect. In recent years, artificial intelligence and robotics have moved from science fiction to everyday reality, powering everything from smart assistants to automated factories.\n\nOne of the most exciting breakthroughs is in machine learning, which enables computers to learn from data and improve over time. This has led to smarter devices, personalized recommendations, and even self-driving cars.\n\nThe tech industry continues to innovate, with startups and giants alike racing to develop the next big thing. As we look to the future, it's clear that technology will play an even greater role in shaping society, raising important questions about ethics, privacy, and the human experience.`;
  }
  if (lowerUrl.includes("news")) {
    return `Breaking news: Major events are unfolding around the world, capturing the attention of millions. From political shifts to scientific discoveries, the news landscape is constantly changing.\n\nOur team of experts provides in-depth analysis and insights on the latest developments, helping readers make sense of complex issues. Whether it's a global summit, a natural disaster, or a breakthrough in medicine, we bring you the most important stories as they happen.\n\nStay informed with our comprehensive coverage, exclusive interviews, and real-time updates. In a world where information moves fast, we help you stay ahead.`;
  }
  if (lowerUrl.includes("food")) {
    return `Food lovers rejoice! Discover delicious recipes, culinary tips, and the stories behind your favorite dishes. From street food to gourmet meals, our blog explores the world of flavors and the cultures that inspire them.\n\nCooking at home has never been more exciting, with new ingredients and fusion cuisines sparking creativity in kitchens everywhere. We share step-by-step guides, chef interviews, and food photography that will make your mouth water.\n\nJoin us as we celebrate food culture, explore hidden gems, and connect with fellow foodies from around the globe.`;
  }
  if (lowerUrl.includes("travel")) {
    return `Travel the globe with us as we uncover hidden gems, share travel tips, and tell inspiring stories from adventurers. Whether you're planning a weekend getaway or a round-the-world journey, our guides help you make the most of every destination.\n\nExperience the beauty and diversity of cultures worldwide, from bustling cities to tranquil nature escapes. Our blog features destination reviews, packing lists, and personal anecdotes that bring each place to life.\n\nYour next journey awaits—let us help you discover it!`;
  }
  if (lowerUrl.includes("health")) {
    return `Health and wellness are essential for a happy, fulfilling life. Our blog covers nutrition, exercise, mental well-being, and the latest research in health science.\n\nOur experts share advice on building healthy habits, managing stress, and staying active in a busy world. We believe that small changes can make a big difference, and we're here to support you every step of the way.\n\nStart your health journey today with our tips, recipes, and motivational stories from people who have transformed their lives.`;
  }
  // Default generic blog
  return `Welcome to our blog! Here, we discuss trends, share stories, and keep you updated on the latest happenings in technology, news, food, travel, and health.\n\nOur mission is to inform, inspire, and connect readers from all walks of life. Stay connected for more insightful articles and join our community of curious minds.`;
}

function fakeSummary(text: string): string {
  if (text.includes("technology")) {
    return "Technology is rapidly transforming our world, with artificial intelligence and robotics now part of everyday life. As innovation accelerates, society faces new opportunities and challenges, from smarter devices to important questions about privacy and ethics.";
  }
  if (text.includes("news")) {
    return "The news landscape is constantly evolving, bringing major global events and discoveries to the forefront. Expert analysis and real-time updates help readers stay informed and make sense of a rapidly changing world.";
  }
  if (text.includes("food")) {
    return "Food connects cultures and inspires creativity in the kitchen. From traditional recipes to modern fusion, exploring new flavors and cooking techniques brings people together and celebrates the joy of eating.";
  }
  if (text.includes("travel")) {
    return "Travel opens doors to new experiences, cultures, and perspectives. Whether exploring hidden gems or famous destinations, each journey offers stories, memories, and a deeper appreciation for the world’s diversity.";
  }
  if (text.includes("health")) {
    return "Health and wellness are the foundation of a fulfilling life. Building healthy habits, managing stress, and staying active empower individuals to achieve well-being and long-term happiness.";
  }
  return "Welcome to our blog! Here, we discuss trends, share stories, and keep you updated on the latest happenings in technology, news, food, travel, and health.";
}

function translateToUrdu(text: string): string {
  switch (text.trim()) {
    case "Technology is rapidly transforming our world, with artificial intelligence and robotics now part of everyday life. As innovation accelerates, society faces new opportunities and challenges, from smarter devices to important questions about privacy and ethics.":
      return "ٹیکنالوجی تیزی سے ہماری دنیا کو بدل رہی ہے، جہاں مصنوعی ذہانت اور روبوٹکس اب روزمرہ زندگی کا حصہ ہیں۔ جیسے جیسے جدت میں تیزی آ رہی ہے، معاشرہ نئے مواقع اور چیلنجز کا سامنا کر رہا ہے، اسمارٹ ڈیوائسز سے لے کر پرائیویسی اور اخلاقیات جیسے اہم سوالات تک؟";
    case "The news landscape is constantly evolving, bringing major global events and discoveries to the forefront. Expert analysis and real-time updates help readers stay informed and make sense of a rapidly changing world.":
      return "خبروں کی دنیا مسلسل بدل رہی ہے، جو اہم عالمی واقعات اور دریافتوں کو سامنے لا رہی ہے۔ ماہرین کی تجزیہ اور بروقت اپ ڈیٹس قارئین کو باخبر رہنے اور تیزی سے بدلتی دنیا کو سمجھنے میں مدد دیتی ہیں۔";
    case "Food connects cultures and inspires creativity in the kitchen. From traditional recipes to modern fusion, exploring new flavors and cooking techniques brings people together and celebrates the joy of eating.":
      return "کھانا ثقافتوں کو جوڑتا ہے اور کچن میں تخلیقی صلاحیت کو ابھارتا ہے۔ روایتی پکوانوں سے لے کر جدید فیوژن تک، نئے ذائقے اور پکانے کے طریقے دریافت کرنا لوگوں کو قریب لاتا ہے اور کھانے کی خوشی کو مناتا ہے۔";
    case "Travel opens doors to new experiences, cultures, and perspectives. Whether exploring hidden gems or famous destinations, each journey offers stories, memories, and a deeper appreciation for the world’s diversity.":
      return "سفر نئے تجربات، ثقافتوں اور نقطہ نظر کے دروازے کھولتا ہے۔ چاہے آپ پوشیدہ مقامات دریافت کریں یا مشہور منزلیں، ہر سفر کہانیاں، یادیں اور دنیا کی تنوع کی گہری قدر لے کر آتا ہے۔";
    case "Health and wellness are the foundation of a fulfilling life. Building healthy habits, managing stress, and staying active empower individuals to achieve well-being and long-term happiness.":
      return "صحت اور تندرستی بھرپور زندگی کی بنیاد ہیں۔ صحت مند عادات اپنانا، دباؤ کو سنبھالنا اور متحرک رہنا انسان کو خوشحالی اور طویل مدتی خوشی حاصل کرنے کے قابل بناتا ہے۔";
    case "Welcome to our blog! Here, we discuss trends, share stories, and keep you updated on the latest happenings in technology, news, food, travel, and health.":
      return "خوش آمدید! یہاں ہم رجحانات پر بات کرتے ہیں، کہانیاں شیئر کرتے ہیں، اور آپ کو ٹیکنالوجی، خبریں، کھانا، سفر اور صحت کے تازہ ترین واقعات سے باخبر رکھتے ہیں۔";
    default:
      return text; 
  }
}

function speakText(text: string, lang: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  const voices = window.speechSynthesis.getVoices();
  let match = voices.find(v => v.lang.toLowerCase().startsWith(lang));
  if (!match && lang === 'ur') {
    // Try Hindi or Arabic as fallback
    match = voices.find(v => v.lang.toLowerCase().startsWith('hi')) ||
            voices.find(v => v.lang.toLowerCase().startsWith('ar'));
  }
  if (match) utterance.voice = match;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

export default function Home() {
  const [url, setUrl] = useState("");
  const [fullText, setFullText] = useState("");
  const [summary, setSummary] = useState("");
  const [urdu, setUrdu] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState<{ type: 'en' | 'ur' | null }>({ type: null });
  // Remove urduEdited and handlers for editing

  const session = useSession();
  const [guest, setGuest] = useState(false);

  // Grouped example blog URLs for dropdown
  const exampleBlogsDropdown = [
    {
      label: "Tech",
      links: [
        { name: "TechCrunch", url: "https://techcrunch.com/" },
        { name: "The Verge", url: "https://www.theverge.com/tech" },
        { name: "Example Tech", url: "https://example.com/tech-latest" },
      ],
    },
    {
      label: "News",
      links: [
        { name: "BBC News", url: "https://www.bbc.com/news" },
        { name: "CNN", url: "https://www.cnn.com/" },
        { name: "News Portal", url: "https://newsportal.com/breaking-news" },
      ],
    },
    {
      label: "Food",
      links: [
        { name: "Serious Eats", url: "https://www.seriouseats.com/" },
        { name: "Foodie", url: "https://foodie.com/recipes" },
        { name: "Example Food", url: "https://blog.com/food-lovers" },
      ],
    },
    {
      label: "Travel",
      links: [
        { name: "Nomadic Matt", url: "https://www.nomadicmatt.com/" },
        { name: "Travel Now", url: "https://travelnow.com/destinations" },
        { name: "Adventure", url: "https://adventure.com/travel-tips" },
      ],
    },
    {
      label: "Health",
      links: [
        { name: "Healthline", url: "https://www.healthline.com/nutrition" },
        { name: "Wellness", url: "https://wellness.com/health-tips" },
        { name: "FitLife", url: "https://fitlife.com/health-and-wellness" },
      ],
    },
  ];

  // Dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  if (!session && !guest) {
  return (
      <main className="flex flex-1 flex-col items-center justify-center z-10 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 min-h-screen">
        <div className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 backdrop-blur-md flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-6 text-center">Welcome to Blog Summariser</h1>
          <AuthForm />
          <div className="my-4 text-gray-500 text-sm">or</div>
          <button
            onClick={() => setGuest(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold shadow hover:from-emerald-600 hover:to-lime-600 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Try as Guest"
            type="button"
          >
            Try as Guest
          </button>
        </div>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    // Remove setUrduEdited
    // Simulate scraping
    const scraped = fakeScrape(url);
    setFullText(scraped);
    // Simulate summary
    const sum = fakeSummary(scraped);
    setSummary(sum);
    // Translate
    const urduSum = translateToUrdu(sum);
    setUrdu(urduSum);
    setLoading(false);
  };

  const handleSave = async () => {
    if (!url || !summary || !urdu || !fullText) {
      setMessage("Please generate a summary first");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch('/api/save-summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url,
          summary,
          urduSummary: urdu,
          fullText,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("✅ Summary saved successfully!");
      } else {
        setMessage("❌ Failed to save summary");
      }
    } catch {
      setMessage("❌ Error saving summary");
    } finally {
      setSaving(false);
    }
  };

  const handleCopy = (text: string, type: 'en' | 'ur') => {
    navigator.clipboard.writeText(text);
    setCopied({ type });
    setTimeout(() => setCopied({ type: null }), 1200);
  };

  // Remove handleSummaryChange and handleUrduChange

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-indigo-100 to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Overlay for focus */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30 pointer-events-none z-0" />
      {/* Classy header */}
      <header className="w-full flex flex-col items-center justify-center py-8 mb-2 z-30 relative">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg animate-fade-in">
            <Sparkles className="w-8 h-8 text-white" />
          </span>
          <span className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white animate-fade-in">Blog Summariser</span>
          {/* Dropdown menu for example blogs */}
          <div className="relative ml-6" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold shadow hover:from-blue-600 hover:to-emerald-600 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-label="Featured Blogs"
              type="button"
            >
              Featured Blogs <ChevronDown className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50 animate-fade-in">
                <div className="p-3">
                  {exampleBlogsDropdown.map((group) => (
                    <div key={group.label} className="mb-3 last:mb-0">
                      <div className="font-bold text-gray-700 dark:text-gray-200 mb-1 text-sm">{group.label}</div>
                      <ul className="space-y-1">
                        {group.links.map((link) => (
                          <li key={link.url}>
                            <button
                              onClick={() => { setUrl(link.url); setDropdownOpen(false); }}
                              className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1 text-xs transition-all duration-150 hover:scale-105"
                              type="button"
                            >
                              {link.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-base font-medium animate-fade-in delay-100">Summarise blogs, translate to Urdu, and save your insights.</p>
      </header>
      <div className="flex flex-1 flex-col lg:flex-row items-stretch justify-center z-10 w-full min-h-screen">
        {/* Sidebar for example blogs (desktop) */}
        {/* (Remove or comment out the old sidebar and mobile example blogs section) */}
        {/* Main content */}
        <main className="flex flex-1 flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 w-full">
          {/* Example blogs for mobile (above input) */}
          <div className="block lg:hidden w-full max-w-xl mx-auto mb-4">
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow p-3">
              <h3 className="font-bold mb-2 text-sm">Try these example blogs:</h3>
              <div className="flex flex-wrap gap-2">
                {exampleBlogsDropdown.map((group) => (
                  <div key={group.label} className="flex flex-col">
                    <div className="font-bold text-gray-700 dark:text-gray-200 mb-1 text-sm">{group.label}</div>
                    <div className="flex flex-wrap gap-2">
                      {group.links.map((link) => (
                        <button
                          key={link.url}
                          onClick={() => { setUrl(link.url); }}
                          className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded px-1 text-xs transition-all duration-150 hover:scale-105"
                          type="button"
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <AuthForm />
          {/* Main card */}
          <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl min-w-[320px] bg-white/95 dark:bg-gray-800/95 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-12 backdrop-blur-md flex flex-col items-center animate-fade-in">
            {/* Divider */}
            <div className="w-full flex justify-center my-6">
              <span className="inline-block w-24 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 rounded-full opacity-70"></span>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full mb-6">
              <input
                type="url"
                required
                placeholder="Enter blog URL..."
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-4 py-2 font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
                disabled={loading}
              >
                <FileText className="w-5 h-5" />
                {loading ? "Summarising..." : "Summarise"}
              </button>
            </form>
            {message && (
              <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 animate-fade-in w-full ${message.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                aria-live="polite"
              >
                {message.includes('✅') ? <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" /> : <AlertCircle className="w-5 h-5 text-red-600" aria-hidden="true" />} {message}
              </div>
            )}
            {summary && (
              <div className="mb-4 w-full animate-fade-in">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <h2 className="font-semibold">Summary (English):</h2>
                  <button
                    onClick={() => handleCopy(summary, 'en')}
                    className="ml-2 p-1 rounded hover:bg-blue-100 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    aria-label="Copy English summary"
                    type="button"
                  >
                    {copied.type === 'en' ? <Check className="w-4 h-4 text-green-600" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                  </button>
                  <button
                    onClick={() => speakText(summary, 'en')}
                    className="ml-1 p-1 rounded hover:bg-blue-100 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    aria-label="Listen to English summary"
                    type="button"
                  >
                    <Volume2 className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  </button>
                </div>
                <p className="bg-blue-50 dark:bg-blue-900 rounded-lg p-3 text-gray-800 dark:text-gray-100 shadow-inner transition">{summary}</p>
              </div>
            )}
            {urdu && (
              <div className="mb-4 w-full animate-fade-in">
                <div className="flex items-center gap-2 mb-1">
                  <Languages className="w-5 h-5 text-pink-500" />
                  <h2 className="font-semibold">Summary (Urdu):</h2>
                  <button
                    onClick={() => handleCopy(urdu, 'ur')}
                    className="ml-2 p-1 rounded hover:bg-pink-100 dark:hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                    aria-label="Copy Urdu summary"
                    type="button"
                  >
                    {copied.type === 'ur' ? <Check className="w-4 h-4 text-green-600" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                  </button>
                </div>
                <p className="bg-pink-50 dark:bg-pink-900 rounded-lg p-3 font-[Noto Nastaliq Urdu,serif] text-right shadow-inner transition">{urdu}</p>
              </div>
            )}
            {fullText && (
              <details className="mt-4 w-full animate-fade-in">
                <summary className="cursor-pointer font-semibold flex items-center gap-2"><Globe className="w-5 h-5 text-purple-500" /> Show Full Blog Text</summary>
                <p className="mt-2 text-sm bg-emerald-50 dark:bg-emerald-900 rounded-lg p-3 border dark:border-gray-700 shadow-inner transition">{fullText}</p>
              </details>
            )}
            {summary && urdu && fullText && (
              <button
                onClick={handleSave}
                disabled={saving}
                className="mt-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg px-4 py-2 font-semibold shadow hover:from-green-700 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 w-full"
              >
                <Save className="w-5 h-5" /> {saving ? "Saving..." : "Save to Database"}
              </button>
            )}
          </div>
        </main>
      </div>
      <footer className="w-full py-6 text-gray-400 text-xs text-center mt-auto z-10 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
        &copy; {new Date().getFullYear()} Blog Summariser &mdash; Crafted by Shanzay Aijaz
      </footer>
    </div>
  );
}
