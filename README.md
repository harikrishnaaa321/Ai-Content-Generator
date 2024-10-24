# AI Content Generator

The **AI Content Generator** is a tool designed to generate high-quality content using AI technology. Built using **Next.js** for the frontend, **PostgreSQL** for the database, and **Razorpay** for payment integration, this application enables users to easily create and manage diverse types of content through 18 different content generation templates. The app leverages the **Gemini API** for advanced content generation capabilities and features a user account system with specific token limits for both regular and premium users.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Payment Integration](#payment-integration)
- [Screenshots](#screenshots)

## Features

- **AI-powered content generation**: Generate dynamic and high-quality content using the Gemini API.
- **User account system**: Create accounts with different token limits:
  - **Regular users**: 10,000 tokens per month.
  - **Premium users**: 1 million tokens per month.
- **18 content generation templates**: Choose from a wide variety of templates for different content needs.
- **Razorpay integration**: Simple and secure payment gateway integration for premium account subscriptions.
- **PostgreSQL database**: Efficient data management for user details, content templates, and account limits.
- **PL/SQL**: Efficient backend operations with robust data retrieval and management.
  
## Tech Stack

- **Frontend**: Next.js
- **Backend**: Next.js API Routes, PostgreSQL
- **Database**: PostgreSQL
- **Payment Gateway**: Razorpay
- **API**: Gemini API for content generation
- **Languages**: JavaScript

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ai-content-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ai-content-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env.local` file in the root directory.
   - Add your **PostgreSQL** database credentials, **Gemini API key**, and **Razorpay** keys:

   ```bash
   DATABASE_URL=your_postgresql_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

5. Run the application:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

1. **Sign up** as a regular or premium user.
2. Choose from the **18 content generation templates** for generating the type of content you need.
3. Generate your content using the **Gemini API**.
4. Manage your token usage, ensuring you stay within your monthly limits.
5. **Upgrade to premium** for more tokens and additional features through the integrated **Razorpay** payment system.

## API Integration

The app uses the **Gemini API** for content generation. Ensure you have your API key set in the `.env.local` file. Here’s how the content generation feature works:

1. User selects a template.
2. The selected template is passed as a parameter to the Gemini API.
3. The Gemini API generates and returns the content.
4. The content is displayed on the user’s dashboard and stored in the PostgreSQL database.

## Payment Integration

The app uses **Razorpay** for processing payments. Premium users can make secure payments to unlock additional tokens and content templates. The Razorpay payment gateway is integrated for seamless payment processing:

- **Regular Account**: 10,000 tokens/month.
- **Premium Account**: 1 million tokens/month.

## Screenshots

Add screenshots of your app here to give users a preview of the AI Content Generator's UI and features.

1. **Home Page**: Display of the templates and token limits.
2. **User Dashboard**: Shows token usage and account status.
3. **Content Generation**: Interface for selecting templates and generating content.
4. **Payment Gateway**: Razorpay integration for upgrading accounts.
