# Next.js Demo App with Speck-Kit

A modern demo application showcasing **Speck-Kit**, a lightweight UI component library built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern UI Components**: Button, Card, Input, Badge, and more
- **TypeScript Support**: Fully typed for better developer experience
- **Tailwind CSS**: Utility-first styling with Tailwind CSS 4
- **Next.js 16**: Built with the latest Next.js App Router
- **Responsive Design**: Mobile-friendly and accessible components
- **Customizable**: Easy to customize and extend

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/juan-perezpichon/next-app-demo.git
cd next-app-demo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the demo.

## 📦 Speck-Kit Components

### Button
Multiple variants (primary, secondary, outline, ghost) and sizes (sm, md, lg)
```tsx
import { Button } from '@/lib/speck-kit';

<Button variant="primary" size="md">Click Me</Button>
```

### Card
Flexible card component with Header, Body, and Footer subcomponents
```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@/lib/speck-kit';

<Card>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Input
Form input with label, error, and helper text support
```tsx
import { Input } from '@/lib/speck-kit';

<Input 
  label="Email" 
  type="email"
  error="Invalid email"
  helperText="Enter your email address"
/>
```

### Badge
Status indicators with multiple variants
```tsx
import { Badge } from '@/lib/speck-kit';

<Badge variant="success">Active</Badge>
<Badge variant="error">Error</Badge>
```

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Demo page showcasing components
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── lib/
│   └── speck-kit/         # Speck-Kit component library
│       ├── components/    # Individual components
│       │   ├── Button.tsx
│       │   ├── Card.tsx
│       │   ├── Input.tsx
│       │   └── Badge.tsx
│       └── index.ts       # Main export file
└── public/                # Static assets
```

## 🛠️ Built With

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [ESLint](https://eslint.org/) - Code linting

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

Speck-Kit components are built with Tailwind CSS and can be easily customized:

1. Modify component styles in `lib/speck-kit/components/`
2. Extend component props for additional functionality
3. Update Tailwind configuration in `tailwind.config.ts`

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

Juan Perez Pichon - [@juan-perezpichon](https://github.com/juan-perezpichon)

Project Link: [https://github.com/juan-perezpichon/next-app-demo](https://github.com/juan-perezpichon/next-app-demo)
