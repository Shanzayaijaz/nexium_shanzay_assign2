"use client";
import React, { useState, useRef, useEffect } from "react";
import { CheckCircle, AlertCircle, FileText, Globe, Languages, Save, Sparkles, Copy, Check, Volume2, ChevronDown } from "lucide-react";
import AuthForm from "../components/AuthForm";
import { useSession } from '@supabase/auth-helpers-react';

function fakeScrape(url: string): string {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("techcrunch.com")) {
    return `TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news. From Silicon Valley to global innovation hubs, TechCrunch covers the latest in technology, venture capital, and entrepreneurship.

In recent years, the startup ecosystem has seen unprecedented growth, with new companies disrupting traditional industries at a rapid pace. Investors are pouring billions into AI, fintech, and green tech, betting on the next wave of innovation. TechCrunch’s reporters are on the ground at major conferences, interviewing founders and analyzing trends that shape the future of technology.

Whether it’s a deep dive into a unicorn’s journey, a review of the latest gadgets, or an exposé on industry challenges, TechCrunch delivers the stories that matter to tech professionals and enthusiasts alike.`;
  }
  if (lowerUrl.includes("theverge.com")) {
    return `The Verge explores how technology changes life in the future for a massive mainstream audience. With in-depth reporting, feature stories, and community content, The Verge covers the intersection of technology, science, art, and culture.

From the latest smartphone launches to the evolution of electric vehicles, The Verge’s team brings clarity to complex topics. Their long-form articles and video content break down how new inventions impact society, influence pop culture, and shape our digital lives.

Readers can find reviews, opinion pieces, and interviews with industry leaders, making The Verge a destination for anyone curious about the future of technology and its role in our world.`;
  }
  if (lowerUrl.includes("bbc.com")) {
    return `BBC News brings you trusted world and UK news as well as local and regional perspectives. Stay up to date with the latest breaking news, analysis, and reports from around the globe.

With correspondents in every major city, BBC News provides live updates on politics, science, health, and culture. Their investigative journalism uncovers stories that shape public opinion and policy, while their features offer context and background to the headlines.

From live coverage of elections to in-depth documentaries on global issues, BBC News is committed to impartial, accurate, and timely reporting for a worldwide audience.`;
  }
  if (lowerUrl.includes("cnn.com")) {
    return `CNN is a global leader in news, providing up-to-the-minute coverage of breaking events, in-depth analysis, and exclusive interviews from around the world.

Their newsrooms operate 24/7, delivering live reports on politics, business, health, and entertainment. CNN’s team of journalists and experts offer perspectives on the stories that matter, from natural disasters to scientific breakthroughs.

Special segments and investigative reports give viewers a deeper understanding of complex issues, making CNN a trusted source for news and information.`;
  }
<<<<<<< HEAD
=======
  if (lowerUrl.includes("newsportal.com")) {
    return `News Portal is your gateway to the world's most important stories, delivering breaking news and in-depth analysis from every corner of the globe.

With a dedicated team of journalists stationed in major cities, News Portal provides real-time updates on politics, science, health, business, and technology. Their correspondents report live from the scene of major events, offering eyewitness accounts and expert commentary that help readers understand the impact of global developments.

In addition to headline news, News Portal features investigative reports that uncover the stories behind the headlines, interviews with key figures shaping current affairs, and special segments that explore trends in society, culture, and innovation.

Whether you're following election coverage, tracking scientific breakthroughs, or seeking insights into economic trends, News Portal keeps you informed with accurate, timely, and comprehensive reporting. Join a global community of readers who rely on News Portal to stay ahead in a rapidly changing world.`;
  }
>>>>>>> 3e7528b (Made changes in features and added Hugging Face API)
  if (lowerUrl.includes("seriouseats.com")) {
    return `Serious Eats is a haven for food lovers, offering expert recipes, cooking tips, and food science insights. Since 2006, it has inspired millions with in-depth guides, world cuisines, and the latest trends in the culinary world.

Each week, Serious Eats features new recipes tested to perfection, from classic comfort foods to innovative fusion dishes. Their writers dive into the science behind cooking, explaining why certain techniques work and how to get the best results at home.

Beyond recipes, Serious Eats explores food culture, interviews chefs, and reviews kitchen equipment, making it a comprehensive resource for anyone passionate about cooking and eating well.`;
  }
<<<<<<< HEAD
=======
  if (lowerUrl.includes("blog.com/food-lovers")) {
    return `Food Lovers is a vibrant blog dedicated to celebrating the joy of cooking and eating. Here, you’ll discover creative recipes from around the world, step-by-step guides for both beginners and seasoned cooks, and inspiring food stories that connect cultures and generations.

Each week, Food Lovers features new culinary adventures, from exploring street food in Asia to mastering classic French pastries at home. The blog’s writers share personal essays about the memories tied to family recipes, interviews with renowned chefs, and tips for sourcing the freshest ingredients.

With stunning food photography and approachable writing, Food Lovers makes every dish feel accessible and exciting. Join a global community of passionate cooks and foodies—swap tips, share your own creations, and be inspired to try something new in the kitchen every day.`;
  }
>>>>>>> 3e7528b (Made changes in features and added Hugging Face API)
  if (lowerUrl.includes("foodie.com")) {
    return `Foodie celebrates the joy of cooking and eating, sharing creative recipes, food stories, and culinary adventures from around the world. Discover new flavors and connect with a community of fellow food enthusiasts.

Recent posts include step-by-step guides to mastering sourdough bread, explorations of street food in Asia, and personal essays on the memories tied to family recipes. Foodie’s vibrant photography and approachable writing make every dish feel accessible, no matter your skill level.

Join Foodie to swap tips, share your own creations, and be inspired by a global community that loves to cook and eat.`;
  }
  if (lowerUrl.includes("nomadicmatt.com")) {
    return `Nomadic Matt helps travelers explore the world on a budget, offering practical tips, destination guides, and inspiring stories from years of adventure.

Matt’s blog is filled with detailed itineraries, advice on finding cheap flights and accommodation, and honest reviews of destinations from Southeast Asia to South America. His travel philosophy centers on meaningful experiences, cultural immersion, and making travel accessible to everyone.

Readers can find interviews with fellow travelers, resources for digital nomads, and motivational stories that encourage people to step out of their comfort zones and see the world.`;
  }
  if (lowerUrl.includes("travelnow.com")) {
    return `Travel Now brings you the latest travel news, destination guides, and tips for making the most of your journeys. Discover hidden gems and plan your next adventure with expert advice.

Their writers cover everything from eco-friendly travel trends to must-see attractions in major cities. Travel Now’s guides include packing lists, safety tips, and recommendations for food, lodging, and activities.

Whether you’re a seasoned globetrotter or planning your first trip, Travel Now offers inspiration and practical information to help you travel smarter and more confidently.`;
  }
  if (lowerUrl.includes("healthline.com")) {
    return `Healthline provides trusted health information, expert advice, and the latest research to help you live a healthier, happier life.

Their articles cover nutrition, fitness, mental health, and medical news, all reviewed by professionals for accuracy. Healthline’s guides break down complex health topics into actionable steps, empowering readers to make informed decisions.

From healthy recipes to wellness trends and personal stories, Healthline is a comprehensive resource for anyone seeking to improve their well-being.`;
  }
  if (lowerUrl.includes("wellness.com")) {
    return `Wellness is your guide to a balanced life, offering tips on nutrition, fitness, mental health, and holistic well-being.

Recent features include mindfulness exercises, plant-based meal plans, and interviews with wellness experts. Wellness encourages readers to find harmony in their routines and prioritize self-care.

With a focus on sustainable habits and positive lifestyle changes, Wellness supports your journey to a healthier, happier you.`;
  }
  if (lowerUrl.includes("fitlife.com")) {
    return `FitLife motivates you to achieve your fitness goals with workout plans, healthy recipes, and wellness tips for every stage of your journey.

Their blog features beginner to advanced workout routines, advice on building strength and endurance, and nutrition guides for optimal performance. FitLife’s community shares success stories and challenges to keep you inspired.

Whether you’re training for a marathon or just starting out, FitLife provides the tools and encouragement you need to live your healthiest life.`;
  }
<<<<<<< HEAD
=======
  if (lowerUrl.includes("adventure.com/travel-tips")) {
    return `Adventure.com’s travel tips blog is a treasure trove for explorers and thrill-seekers. The site offers practical advice for planning adventures, from choosing the right gear and packing efficiently to staying safe in remote destinations. Readers will find destination guides, personal travel stories, and expert tips on sustainable and responsible travel.

Adventure.com features interviews with seasoned travelers, recommendations for off-the-beaten-path experiences, and inspiration for both solo and group journeys. Whether you’re looking to hike mountain trails, discover hidden beaches, or immerse yourself in new cultures, the blog provides the insights and motivation you need to make every trip unforgettable.

With a focus on adventure, discovery, and personal growth, Adventure.com’s travel tips help you step out of your comfort zone and embrace the world with confidence.`;
  }
>>>>>>> 3e7528b (Made changes in features and added Hugging Face API)
  // Default generic blog
  return `Welcome to our blog! Here, we discuss trends, share stories, and keep you updated on the latest happenings in technology, news, food, travel, and health.\n\nOur mission is to inform, inspire, and connect readers from all walks of life. Stay connected for more insightful articles and join our community of curious minds.`;
}

<<<<<<< HEAD
function fakeSummary(text: string, url: string): string {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("techcrunch.com")) {
    return "TechCrunch delivers breaking news and in-depth analysis on startups, technology, and innovation, making it a go-to source for tech enthusiasts and professionals.";
  }
  if (lowerUrl.includes("theverge.com")) {
    return "The Verge provides insightful coverage of technology, science, and culture, highlighting how innovation shapes our world.";
  }
  if (lowerUrl.includes("bbc.com")) {
    return "BBC News offers comprehensive and reliable news coverage, delivering the latest updates and analysis on global events.";
  }
  if (lowerUrl.includes("cnn.com")) {
    return "CNN delivers real-time news, expert analysis, and exclusive stories, keeping audiences informed on major world events.";
  }
  if (lowerUrl.includes("seriouseats.com")) {
    return "Serious Eats is a leading food website offering expert recipes, cooking tips, and food science insights for passionate cooks.";
  }
  if (lowerUrl.includes("foodie.com")) {
    return "Foodie inspires creativity in the kitchen with diverse recipes and stories, connecting food lovers everywhere.";
  }
  if (lowerUrl.includes("nomadicmatt.com")) {
    return "Nomadic Matt empowers travelers with budget tips, destination advice, and inspiration for exploring the world.";
  }
  if (lowerUrl.includes("travelnow.com")) {
    return "Travel Now offers up-to-date travel news, guides, and tips to help you plan unforgettable trips.";
  }
  if (lowerUrl.includes("healthline.com")) {
    return "Healthline delivers reliable health information and expert guidance for well-being and healthy living.";
  }
  if (lowerUrl.includes("wellness.com")) {
    return "Wellness supports a balanced lifestyle with advice on nutrition, fitness, and mental health.";
  }
  if (lowerUrl.includes("fitlife.com")) {
    return "FitLife inspires healthy living with fitness routines, nutritious recipes, and wellness advice.";
  }
  if (lowerUrl.includes("seriouseats.com")) {
    return "Serious Eats is a leading food website offering expert recipes, cooking tips, and food science insights. Since 2006, it has inspired millions of food lovers with in-depth guides, world cuisines, and the latest trends in the culinary world.";
  }
  if (lowerUrl.includes("nomadicmatt.com")) {
    return "Travel opens doors to new experiences, cultures, and perspectives. Whether exploring hidden gems or famous destinations, each journey offers stories, memories, and a deeper appreciation for the world’s diversity.";
  }
  if (lowerUrl.includes("cnn.com") || lowerUrl.includes("bbc.com") || lowerUrl.includes("newsportal.com")) {
    return "The news landscape is constantly evolving, bringing major global events and discoveries to the forefront. Expert analysis and real-time updates help readers stay informed and make sense of a rapidly changing world.";
  }
  if (lowerUrl.includes("techcrunch.com") || lowerUrl.includes("theverge.com") || lowerUrl.includes("example.com/tech-latest")) {
    return "Technology is rapidly transforming our world, with artificial intelligence and robotics now part of everyday life. As innovation accelerates, society faces new opportunities and challenges, from smarter devices to important questions about privacy and ethics.";
  }
  if (lowerUrl.includes("foodie.com") || lowerUrl.includes("blog.com/food-lovers") || lowerUrl.includes("seriouseats.com")) {
    return "Food connects cultures and inspires creativity in the kitchen. From traditional recipes to modern fusion, exploring new flavors and cooking techniques brings people together and celebrates the joy of eating.";
  }
  if (lowerUrl.includes("travelnow.com") || lowerUrl.includes("nomadicmatt.com") || lowerUrl.includes("adventure.com")) {
    return "Travel opens doors to new experiences, cultures, and perspectives. Whether exploring hidden gems or famous destinations, each journey offers stories, memories, and a deeper appreciation for the world’s diversity.";
  }
  if (lowerUrl.includes("wellness.com") || lowerUrl.includes("fitlife.com") || lowerUrl.includes("healthline.com")) {
    return "Health and wellness are the foundation of a fulfilling life. Building healthy habits, managing stress, and staying active empower individuals to achieve well-being and long-term happiness.";
  }
  if (lowerUrl.includes("news")) {
    return "The news landscape is constantly evolving, bringing major global events and discoveries to the forefront. Expert analysis and real-time updates help readers stay informed and make sense of a rapidly changing world.";
  }
  if (lowerUrl.includes("tech")) {
    return "Technology is rapidly transforming our world, with artificial intelligence and robotics now part of everyday life. As innovation accelerates, society faces new opportunities and challenges, from smarter devices to important questions about privacy and ethics.";
  }
  if (lowerUrl.includes("food")) {
    return "Food connects cultures and inspires creativity in the kitchen. From traditional recipes to modern fusion, exploring new flavors and cooking techniques brings people together and celebrates the joy of eating.";
  }
  if (lowerUrl.includes("travel")) {
    return "Travel opens doors to new experiences, cultures, and perspectives. Whether exploring hidden gems or famous destinations, each journey offers stories, memories, and a deeper appreciation for the world’s diversity.";
  }
  if (lowerUrl.includes("health")) {
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
=======
function translateToUrdu(url: string): string {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes("techcrunch.com")) {
    return "ٹیک کرنچ (TechCrunch) ایک معروف ٹیکنالوجی میڈیا پلیٹ فارم ہے جو اسٹارٹ اپس کی پروفائلنگ میں مہارت رکھتا ہے۔ سلیکن ویلی سے لے کر عالمی انوویشن ہبز تک، ٹیک کرنچ ٹیکنالوجی، وینچر کیپیٹل، اور انٹرپرینیورشپ کی تازہ ترین خبریں فراہم کرتا ہے۔ حالیہ برسوں میں، اسٹارٹ اپ ایکو سسٹم میں بے مثال ترقی ہوئی ہے، جہاں نئی کمپنیاں روایتی صنعتوں کو تیزی سے بدل رہی ہیں۔";
  }
  if (lowerUrl.includes("theverge.com")) {
    return "دی ورج (The Verge) ٹیکنالوجی، سائنس، آرٹ اور ثقافت کے ملاپ پر روشنی ڈالتا ہے۔ ان کے طویل مضامین اور ویڈیو مواد یہ واضح کرتے ہیں کہ نئی ایجادات پاپ کلچر کو کیسے متاثر کرتی ہیں۔ دی ورج ان لوگوں کے لیے ایک بہترین ذریعہ ہے جو ٹیکنالوجی کے مستقبل اور ہماری زندگیوں میں اس کے کردار کے بارے میں جاننا چاہتے ہیں۔ مزید معلومات کے لیے دی ورج کی ویب سائٹ ملاحظہ کریں۔";
  }
  if (lowerUrl.includes("bbc.com")) {
    return "بی بی سی نیوز آپ کو دنیا اور برطانیہ کی معتبر خبریں فراہم کرتا ہے، ساتھ ہی مقامی اور علاقائی نقطہ نظر بھی پیش کرتا ہے۔ ہر بڑے شہر میں نمائندوں کے ساتھ، بی بی سی نیوز سیاست، سائنس، صحت اور ثقافت پر براہ راست اپ ڈیٹس فراہم کرتا ہے۔ ان کی تحقیقی صحافت وہ کہانیاں سامنے لاتی ہے جو عوامی رائے اور پالیسی کو تشکیل دیتی ہیں، جبکہ ان کی فیچرز سرخیوں کے پس منظر اور سیاق و سباق کو اجاگر کرتی ہیں۔";
  }
  if (lowerUrl.includes("cnn.com")) {
    return "سی این این (CNN) خبروں میں عالمی رہنما ہے، جو تازہ ترین واقعات کی لمحہ بہ لمحہ کوریج فراہم کرتا ہے۔ ان کے نیوز رومز چوبیس گھنٹے کام کرتے ہیں، اور سیاست، کاروبار، صحت اور تفریح پر براہ راست رپورٹس پیش کرتے ہیں۔ خصوصی سیگمنٹس اور تحقیقی رپورٹس ناظرین کو پیچیدہ مسائل کی گہری سمجھ فراہم کرتی ہیں۔";
  }
  if (lowerUrl.includes("newsportal.com")) {
    return "نیوز پورٹل سیاست، سائنس، صحت، کاروبار اور ٹیکنالوجی پر بروقت اپ ڈیٹس فراہم کرتا ہے۔ سرخیوں کے علاوہ، نیوز پورٹل تحقیقاتی رپورٹس بھی پیش کرتا ہے جو خبروں کے پیچھے چھپی کہانیاں سامنے لاتی ہیں۔ تیزی سے بدلتی ہوئی دنیا میں باخبر رہنے کے لیے نیوز پورٹل پر بھروسہ کرنے والے قارئین کی عالمی کمیونٹی میں شامل ہوں۔";
  }
  if (lowerUrl.includes("seriouseats.com")) {
    return "ہر ہفتے، سیریئس ایٹس بہترین طریقے سے آزمائے گئے نئے پکوانوں کی تراکیب پیش کرتا ہے۔ ان کے لکھاری کھانا پکانے کے پیچھے سائنس کی وضاحت کرتے ہیں، کہ کون سی تکنیک کیوں کام کرتی ہے اور بہترین نتائج کیسے حاصل کیے جائیں۔ تراکیب کے علاوہ، یہ ویب سائٹ کھانے کی ثقافت، شیفس کے انٹرویوز، اور کچن کے سامان کے جائزے بھی پیش کرتی ہے۔";
  }
  if (lowerUrl.includes("blog.com/food-lovers")) {
    return "فوڈ لوورز ایک بلاگ ہے جو کھانا پکانے اور کھانے کی خوشی کو منانے کے لیے وقف ہے۔ ہر ہفتے، فوڈ لوورز میں نئی ذائقہ دار مہمات پیش کی جاتی ہیں، جن میں ایشیا کے اسٹریٹ فوڈ سے لے کر گھر پر کلاسیکی فرانسیسی پیسٹری بنانے تک سب کچھ شامل ہے۔ اس بلاگ کے لکھاری ذاتی کہانیاں شیئر کرتے ہیں جو خاندانی تراکیب سے جڑی یادوں اور مشہور شیفس کے انٹرویوز پر مبنی ہوتی ہیں۔";
  }
  if (lowerUrl.includes("foodie.com")) {
    return "فوڈی (Foodie) کھانا پکانے اور کھانے کی خوشی کو مناتا ہے، تخلیقی تراکیب، کھانوں کی کہانیاں، اور دنیا بھر کی ذائقہ دار مہمات شیئر کرتا ہے۔ فوڈی کی جاندار فوٹوگرافی اور آسان زبان ہر ڈش کو ہر مہارت کے فرد کے لیے قابل رسائی بناتی ہے۔ اپنے تجربات شیئر کریں، ٹپس کا تبادلہ کریں، اور اس عالمی کمیونٹی کا حصہ بنیں جو کھانا پکانے اور کھانے سے محبت کرتی ہے۔";
  }
  if (lowerUrl.includes("nomadicmatt.com")) {
    return "نومیڈک میٹ (Nomadic Matt) کا بلاگ تفصیلی سفری منصوبوں، سستے ٹکٹ اور رہائش کے مشوروں، اور مختلف مقامات کے ایماندار جائزوں سے بھرا ہوا ہے۔ ان کا سفری فلسفہ بامعنی تجربات، ثقافتی میل جول، اور ہر ایک کے لیے سفر کو قابل رسائی بنانے پر مرکوز ہے۔ قارئین کو ہم سفر مسافروں کے انٹرویوز، ڈیجیٹل نومیڈز کے وسائل، اور متاثر کن کہانیاں ملتی ہیں جو لوگوں کو اپنے کمفرٹ زون سے باہر نکلنے کی ترغیب دیتی ہیں۔";
  }
  if (lowerUrl.includes("travelnow.com")) {
    return "ٹریول ناؤ (Travel Now) آپ کو تازہ ترین سفری خبریں، منزل کی رہنمائیاں، اور سفر سے بھرپور فائدہ اٹھانے کے مشورے فراہم کرتا ہے۔ یہاں آپ پوشیدہ مقامات دریافت کریں، ماہرین کے مشورے سے اپنی اگلی مہم کی منصوبہ بندی کریں، اور ماحول دوست سفری رجحانات سے لے کر بڑے شہروں کی اہم جگہوں تک سب کچھ جانیں۔ ان کی رہنمائیاں پیکنگ لسٹ، حفاظتی تدابیر، اور کھانے، رہائش اور سرگرمیوں کی سفارشات بھی فراہم کرتی ہیں۔";
  }
  if (lowerUrl.includes("healthline.com")) {
    return "ہیلتھ لائن (Healthline) آپ کو معتبر صحت کی معلومات، ماہرین کے مشورے، اور تازہ ترین تحقیق فراہم کرتا ہے تاکہ آپ صحت مند اور خوش باش زندگی گزار سکیں۔ ان کے مضامین میں غذائیت، فٹنس، ذہنی صحت اور طبی خبریں شامل ہیں۔ ہیلتھ لائن کی رہنمائیاں پیچیدہ صحت کے موضوعات کو آسان اقدامات میں تقسیم کرتی ہیں، تاکہ قارئین باخبر فیصلے کر سکیں۔";
  }
  if (lowerUrl.includes("wellness.com")) {
    return "ویلنیس (Wellness) متوازن زندگی کے لیے آپ کی رہنمائی ہے، جو غذائیت، فٹنس، ذہنی صحت اور مجموعی تندرستی پر مشورے فراہم کرتا ہے۔ حالیہ فیچرز میں مائنڈفولنیس ایکسرسائزز، پودوں پر مبنی کھانے کے منصوبے، اور ویلنیس ماہرین کے انٹرویوز شامل ہیں۔ ویلنیس قارئین کو اپنی روٹین میں ہم آہنگی اور خود کی دیکھ بھال کو ترجیح دینے کی ترغیب دیتا ہے۔";
  }
  if (lowerUrl.includes("fitlife.com")) {
    return "فٹ لائف (FitLife) آپ کو صحت مند زندگی گزارنے کے لیے ضروری اوزار اور حوصلہ افزائی فراہم کرتا ہے۔ ان کا بلاگ ابتدائی سے ایڈوانسڈ ورزش کے روٹینز، طاقت اور برداشت بڑھانے کے مشورے، اور بہترین کارکردگی کے لیے غذائیت کی رہنمائی پیش کرتا ہے۔ فٹ لائف کی کمیونٹی کامیابی کی کہانیاں اور چیلنجز شیئر کرتی ہے تاکہ آپ کو مسلسل متاثر کیا جا سکے۔";
  }
  if (lowerUrl.includes("adventure.com/travel-tips")) {
    return "ایڈونچر ڈاٹ کام (Adventure.com) کا ٹریول ٹپس بلاگ مہم جوئی کے شوقین افراد کے لیے قیمتی خزانہ ہے۔ یہ سائٹ ایڈونچر کی منصوبہ بندی کے لیے عملی مشورے فراہم کرتی ہے، جیسے صحیح سامان کا انتخاب اور مؤثر طریقے سے پیکنگ کرنا۔ قارئین کو منزل کی رہنمائیاں، ذاتی سفری کہانیاں، اور پائیدار و ذمہ دارانہ سفر کے ماہر مشورے ملتے ہیں۔";
  }
  // Default generic blog
  return "خوش آمدید! یہاں ہم رجحانات پر بات کرتے ہیں، کہانیاں شیئر کرتے ہیں، اور آپ کو ٹیکنالوجی، خبریں، کھانا، سفر اور صحت کے تازہ ترین واقعات سے باخبر رکھتے ہیں۔";
>>>>>>> 3e7528b (Made changes in features and added Hugging Face API)
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

<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    // Remove setUrduEdited
    // Simulate scraping
    const scraped = fakeScrape(url);
    setFullText(scraped);
    // Simulate summary
    const sum = fakeSummary(scraped, url);
    setSummary(sum);
    // Translate
    const urduSum = translateToUrdu(sum);
    setUrdu(urduSum);
=======
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    // Simulate scraping
    const scraped = fakeScrape(url);
    setFullText(scraped);
    // Call Hugging Face summary API
    try {
      const res = await fetch('/api/summarise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: scraped }),
      });
      const data = await res.json();
      if (data.success && data.summary) {
        setSummary(data.summary);
        // Generate Urdu summary based on blog URL
        const urduSum = translateToUrdu(url);
        setUrdu(urduSum);
      } else {
        setSummary('');
        setUrdu('');
        setMessage('❌ Failed to generate summary');
      }
    } catch {
      setSummary('');
      setUrdu('');
      setMessage('❌ Error generating summary');
    }
>>>>>>> 3e7528b (Made changes in features and added Hugging Face API)
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
      <header className="w-full flex flex-col items-center justify-center py-4 mb-0 z-30 relative">
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 shadow-lg animate-fade-in">
            <Sparkles className="w-8 h-8 text-white" />
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white animate-fade-in">Blog Summariser</span>
          {/* Dropdown menu for example blogs */}
          <div className="relative ml-6 w-full max-w-xs sm:max-w-none" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold shadow hover:from-blue-600 hover:to-emerald-600 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-label="Featured Blogs"
              type="button"
            >
              Featured Blogs <ChevronDown className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-full sm:w-72 max-w-xs sm:max-w-none bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50 animate-fade-in overflow-x-auto">
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
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-medium animate-fade-in delay-100 text-center">Summarise blogs, translate to Urdu, and save your insights.</p>
      </header>
      <div className="flex flex-1 flex-col lg:flex-row items-stretch justify-center z-10 w-full min-h-screen px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32">
        {/* Sidebar for example blogs (desktop) */}
        {/* (Remove or comment out the old sidebar and mobile example blogs section) */}
        {/* Main content */}
        <main className="flex flex-1 flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 w-full">
          <AuthForm />
          {/* Main card */}
          <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl min-w-0 bg-white/95 dark:bg-gray-800/95 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 backdrop-blur-md flex flex-col items-center animate-fade-in mt-2">
            {/* Divider */}
            <div className="w-full flex justify-center my-2">
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
<<<<<<< HEAD
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
=======
            {/* Loading indicator */}
            {loading && (
              <div className="mb-4 w-full flex items-center justify-center animate-fade-in">
                <span className="text-blue-600 dark:text-blue-300 font-semibold">Loading summary and translation...</span>
              </div>
            )}
            {/* Show summaries only when not loading and both are available */}
            {!loading && summary && urdu && (
              <>
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
              </>
>>>>>>> 3e7528b (Made changes in features and added Hugging Face API)
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
