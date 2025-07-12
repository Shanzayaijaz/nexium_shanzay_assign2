# Blog Summariser

A visually appealing Next.js app to summarise blog articles, translate summaries to Urdu, and save results to Supabase and MongoDB. Styled with Tailwind CSS and ShadCN-inspired UI.

## Features
- Input a blog URL and simulate scraping the text
- Generate an AI-like summary (static logic)
- Translate the summary to Urdu (full-sentence mapping)
- Save the summary to Supabase and the full text to MongoDB
- Modern, responsive UI with icons and gradients

## Tech Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS
- [lucide-react](https://lucide.dev/icons/) for icons
- Supabase (for summaries)
- MongoDB (for full blog text)

## Setup

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install dependencies**
   ```sh
   npm install
   npm install lucide-react @supabase/supabase-js mongodb
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the project root:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   MONGODB_URI=your_mongodb_connection_string
   ```
   - Get Supabase credentials from your [Supabase project settings](https://app.supabase.com/).
   - Get MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or your own server.

4. **Supabase Table Setup**
   - Create a table called `summaries` with columns:
     - `id` (uuid or int, primary key)
     - `url` (text)
     - `summary` (text)
     - `urdu_summary` (text)
     - `created_at` (timestamp, optional)

5. **Run the development server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- Enter a blog URL (e.g. `https://example.com/tech-latest`)
- Click **Summarise** to generate a summary and Urdu translation
- Click **Save to Database** to store the results in Supabase and MongoDB

<<<<<<< HEAD

=======
## Deployment
- Push your code to GitHub
- [Connect your repo to Vercel](https://vercel.com/import)
- Set the same environment variables in Vercel dashboard
- Deploy!

## Credits
- UI inspired by [ShadCN UI](https://ui.shadcn.com/)
- Icons from [lucide.dev](https://lucide.dev/)

---

**Enjoy summarising blogs with style!**
>>>>>>> 0448801 (local changes before pull)
