
#  ShopNext — E-Commerce Mini Project

> **Frontend Mini Project**  
> Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and FakeShopAPI.


## Screenshots

| Page | Description |
|------|-------------|
| `/` | Hero + Featured Products |
| `/products` | Product listing with pagination & category filter |
| `/products/[id]` | Full product detail |
| `/users` | User community listing |
| `/users/[id]` | Full user profile |
| `/cart` | Shopping cart with quantity controls |
| `/admin` | Admin dashboard with stats |
| `/admin/products` | CRUD table for products |


## Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.escuelajs.co
```
## Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** | App Router, Server & Client Components |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **React Hook Form + Zod** | Admin form validation |
| **Lucide React** | Icons |
| **nuqs** | URL search param management |
| **FakeShopAPI** | Product & user data |


### Public
- Product listing page with **pagination** (`?page=&limit=`)
- **Category filter** via URL query params
- Product detail with full info + star rating
- User listing with avatars
- User profile with address and contact info
- Shopping cart with quantity management (client-side)

### Admin Dashboard
- Products CRUD table (create/edit/delete with modal form)
- Users management table





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
