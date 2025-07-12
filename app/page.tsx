"use client";
import React, { useState } from "react";
import { CheckCircle, AlertCircle, FileText, Globe, Languages, Save } from "lucide-react";

function fakeScrape(url: string): string {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("tech")) {
    return `Technology is evolving at a rapid pace. Artificial intelligence and robotics are shaping the future. Stay tuned for more tech updates!`;
  }
  if (lowerUrl.includes("news")) {
    return `Breaking news: Major events are unfolding around the world. Experts provide insights on the latest developments. Stay informed with our news coverage.`;
  }
  if (lowerUrl.includes("food")) {
    return `Food lovers rejoice! Discover delicious recipes and culinary tips. From street food to gourmet meals, explore the world of flavors.`;
  }
  if (lowerUrl.includes("travel")) {
    return `Travel the globe with us. Explore hidden gems, travel tips, and inspiring stories from adventurers. Your next journey awaits!`;
  }
  if (lowerUrl.includes("health")) {
    return `Health and wellness are essential for a happy life. Learn about nutrition, exercise, and mental well-being. Start your health journey today!`;
  }
  // Default generic blog
  return `This is a sample blog article about technology and news. Today, the world is changing rapidly. Welcome to the blog!`;
}

function fakeSummary(text: string): string {
  if (text.includes("technology")) {
    return "Technology is evolving at a rapid pace. Artificial intelligence and robotics are shaping the future.";
  }
  if (text.includes("news")) {
    return "Major events are unfolding around the world. Experts provide insights on the latest developments.";
  }
  if (text.includes("food")) {
    return "Discover delicious recipes and culinary tips. Explore the world of flavors.";
  }
  if (text.includes("travel")) {
    return "Explore hidden gems and inspiring stories from adventurers. Your next journey awaits!";
  }
  if (text.includes("health")) {
    return "Health and wellness are essential for a happy life. Learn about nutrition and well-being.";
  }
  return "This is a sample blog article about technology and news. Today, the world is changing rapidly.";
}

function translateToUrdu(text: string): string {
  switch (text.trim()) {
    case "Technology is evolving at a rapid pace. Artificial intelligence and robotics are shaping the future.":
      return "ٹیکنالوجی تیزی سے ترقی کر رہی ہے۔ مصنوعی ذہانت اور روبوٹکس مستقبل کی تشکیل کر رہے ہیں۔";
    case "Major events are unfolding around the world. Experts provide insights on the latest developments.":
      return "دنیا بھر میں بڑے واقعات رونما ہو رہے ہیں۔ ماہرین تازہ ترین ترقیات پر بصیرت فراہم کرتے ہیں۔";
    case "Discover delicious recipes and culinary tips. Explore the world of flavors.":
      return "لذیذ ترکیبیں اور کھانا پکانے کے مشورے دریافت کریں۔ ذائقوں کی دنیا کو دریافت کریں۔";
    case "Explore hidden gems and inspiring stories from adventurers. Your next journey awaits!":
      return "مہم جوؤں کی حوصلہ افزا کہانیاں اور پوشیدہ جواہرات دریافت کریں۔ آپ کا اگلا سفر منتظر ہے!";
    case "Health and wellness are essential for a happy life. Learn about nutrition and well-being.":
      return "صحت اور تندرستی خوشگوار زندگی کے لیے ضروری ہیں۔ غذائیت اور اچھی حالت کے بارے میں سیکھیں۔";
    case "This is a sample blog article about technology and news. Today, the world is changing rapidly.":
      return "یہ ایک نمونہ بلاگ مضمون ہے جو ٹیکنالوجی اور خبروں کے بارے میں ہے۔ آج دنیا تیزی سے بدل رہی ہے۔";
    default:
      return text; // fallback if unknown
  }
}

export default function Home() {
  const [url, setUrl] = useState("");
  const [fullText, setFullText] = useState("");
  const [summary, setSummary] = useState("");
  const [urdu, setUrdu] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 transition-colors duration-500">
      <div className="w-full max-w-xl bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 backdrop-blur-md">
        <h1 className="text-3xl font-extrabold mb-2 text-center tracking-tight text-gray-900 dark:text-white flex items-center justify-center gap-2">
          <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" /> Blog Summariser
        </h1>
        <div className="flex justify-center mb-6">
          <span className="inline-block w-16 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
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
          <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 animate-fade-in ${message.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message.includes('✅') ? <CheckCircle className="w-5 h-5 text-green-600" /> : <AlertCircle className="w-5 h-5 text-red-600" />} {message}
          </div>
        )}
        {summary && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <FileText className="w-5 h-5 text-blue-500" />
              <h2 className="font-semibold">Summary (English):</h2>
            </div>
            <p className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-gray-800 dark:text-gray-100 shadow-inner transition">{summary}</p>
          </div>
        )}
        {urdu && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <Languages className="w-5 h-5 text-pink-500" />
              <h2 className="font-semibold">Summary (Urdu):</h2>
            </div>
            <p className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 font-[Noto Nastaliq Urdu,serif] text-right shadow-inner transition">{urdu}</p>
          </div>
        )}
        {fullText && (
          <details className="mt-4">
            <summary className="cursor-pointer font-semibold flex items-center gap-2"><Globe className="w-5 h-5 text-purple-500" /> Show Full Blog Text</summary>
            <p className="mt-2 text-sm bg-gray-50 dark:bg-gray-900 rounded-lg p-3 border dark:border-gray-700 shadow-inner transition">{fullText}</p>
          </details>
        )}
        {summary && urdu && fullText && (
          <button
            onClick={handleSave}
            disabled={saving}
            className="mt-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-lg px-4 py-2 font-semibold shadow hover:from-green-700 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Save className="w-5 h-5" /> {saving ? "Saving..." : "Save to Database"}
          </button>
        )}
      </div>
      <footer className="mt-8 text-gray-500 text-xs text-center">
        &copy; {new Date().getFullYear()} Blog Summariser
      </footer>
    </div>
  );
}
