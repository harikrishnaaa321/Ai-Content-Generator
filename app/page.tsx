"use client"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HiTemplate, HiPencilAlt, HiUser, HiSupport } from 'react-icons/hi';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <header className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-500 to-gray-700 text-white shadow-lg"> 
        <div className="flex items-center space-x-4 ml-10">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} className="object-contain" />
          <h1 className="text-xl font-extrabold">Content Generator</h1>
        </div>
   
        <div className="space-x-4">
          <a href="/dashboard">
            <Button className="bg-white text-orange-700 hover:bg-gray-200">Get Started</Button>
          </a>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center p-8 space-y-8 bg-gray-100">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold">Revolutionize Your Content Creation</h1>
          <p className="text-lg">With our AI-powered app delivering engaging and high-quality text in seconds.</p>
          <br />
          <br />
          <a href="/dashboard">
            <Button className="bg-blue-500 hover:bg-blue-600">Get Started</Button>
          </a>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
          <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md bg-white">
            <HiTemplate className="text-4xl text-blue-500 mb-2" />
            <h3 className="text-lg font-semibold">25+ Templates</h3>
            <p className="text-gray-600">Diverse and customizable templates to fit your needs.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md bg-white">
            <HiPencilAlt className="text-4xl text-green-500 mb-2" />
            <h3 className="text-lg font-semibold">Customizable</h3>
            <p className="text-gray-600">Easily tailor the content to your preferences.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md bg-white">
            <HiUser className="text-4xl text-red-500 mb-2" />
            <h3 className="text-lg font-semibold">Free to Use</h3>
            <p className="text-gray-600">Access powerful tools at no cost.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md bg-white">
            <HiSupport className="text-4xl text-yellow-500 mb-2" />
            <h3 className="text-lg font-semibold">24/7 Support</h3>
            <p className="text-gray-600">We are here to help you at any time.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
