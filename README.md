
# Quote Generator

**Author:** March Lihour

## Brief Description
A web application that displays random inspirational quotes. Built with Next.js (React + TypeScript) for the frontend and backend, and uses Supabase as the database to store and fetch quotes.

## Setup Instructions
```bash
# Clone the repository
git clone https://github.com/marchlihour24/quote01.git
cd quote01

# Install dependencies
npm install

# Add your Supabase environment variables to .env.local
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key # (if using backend admin access)

# Start the development server
npm run dev
```

## Architecture Explanation
- **Frontend:** Built with Next.js, fetches random quotes from the backend API.
- **Backend:** Next.js API route (`/api/random-quote`) connects to Supabase and returns a random quote from the database.
- **Database:** Supabase hosts a `quotes` table. The backend fetches a random quote using a stored procedure or query, and the frontend displays it.

All components communicate securely using environment variables and RESTful API calls.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
