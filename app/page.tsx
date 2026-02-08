'use client';

import { useState } from 'react';
import { Button, Card, CardHeader, CardBody, CardFooter, Input, Badge } from '@/lib/speck-kit';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Speck-Kit Demo
          </h1>
          <p className="text-xl text-gray-600">
            A lightweight UI component library for React
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <Badge variant="info">v1.0.0</Badge>
            <Badge variant="success">TypeScript</Badge>
            <Badge variant="default">Tailwind CSS</Badge>
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Buttons Card */}
          <Card hover>
            <CardHeader>
              <h2 className="text-2xl font-semibold text-gray-800">Buttons</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 mb-4">
                Multiple variants and sizes available
              </p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
                <div>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Badges Card */}
          <Card hover>
            <CardHeader>
              <h2 className="text-2xl font-semibold text-gray-800">Badges</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 mb-4">
                Status indicators with multiple variants
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">Status:</span>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">Priority:</span>
                  <Badge variant="error">High</Badge>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Form Card */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-800">Form Components</h2>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  helperText="We'll never share your email"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  helperText="Must be at least 8 characters"
                />
              </div>
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                label="Error Example"
                type="text"
                placeholder="This field has an error"
                error="This field is required"
              />
              <div className="flex gap-2">
                <Button type="submit" variant="primary">
                  Submit Form
                </Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </div>
              {showSuccess && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Form submitted successfully!</p>
                </div>
              )}
            </form>
          </CardBody>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hover>
            <CardBody>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                🎨 Customizable
              </h3>
              <p className="text-gray-600">
                Built with Tailwind CSS, easily customizable to match your brand
              </p>
            </CardBody>
          </Card>
          <Card hover>
            <CardBody>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                ⚡ Lightweight
              </h3>
              <p className="text-gray-600">
                Minimal dependencies, optimized for performance
              </p>
            </CardBody>
          </Card>
          <Card hover>
            <CardBody>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                🔒 TypeScript
              </h3>
              <p className="text-gray-600">
                Fully typed with TypeScript for better development experience
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Footer Card */}
        <Card className="mt-8">
          <CardFooter>
            <div className="text-center w-full">
              <p className="text-gray-600">
                Built with Next.js 16 and Tailwind CSS 4
              </p>
              <div className="mt-2 flex justify-center gap-4">
                <Button variant="ghost" size="sm">Documentation</Button>
                <Button variant="ghost" size="sm">GitHub</Button>
                <Button variant="ghost" size="sm">npm</Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
