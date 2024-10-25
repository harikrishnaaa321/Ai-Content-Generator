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

- ## Available AI Tools

### Blog Tools

1. **Blog Title Generator**
   - **Description**: An AI tool that generates blog titles based on your blog information.
   - **Category**: Blog
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/4186/4186534.png)
   - **Slug**: generate-blog-title

2. **Blog Content Generator**
   - **Description**: Generates engaging blog content based on the topic and outline you provide.
   - **Category**: Blog
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/4905/4905454.png)
   - **Slug**: blog-content-generation

3. **Blog Topic Ideas**
   - **Description**: Generates catchy and viral blog topic ideas based on a niche.
   - **Category**: Blog
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/11497/11497847.png)
   - **Slug**: blog-topic-idea

### YouTube Tools

1. **YouTube SEO Title Generator**
   - **Description**: Generates SEO-optimized titles for YouTube videos based on keywords and outline.
   - **Category**: YouTube Tools
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/402/402075.png)
   - **Slug**: youtube-seo-title

2. **YouTube Description Generator**
   - **Description**: Generates engaging YouTube descriptions under 4-5 lines, with emojis based on the video topic and outline.
   - **Category**: YouTube Tools
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/2111/2111748.png)
   - **Slug**: youtube-description

3. **YouTube Tag Generator**
   - **Description**: Generates up to 10 optimized YouTube tags based on the title and outline you provide.
   - **Category**: YouTube Tools
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/4674/4674918.png)
   - **Slug**: youtube-tag

### Rewriting Tools

1. **Rewrite Article (Plagiarism-Free)**
   - **Description**: Rewrites existing articles or blogs to be plagiarism-free and bypass AI detectors.
   - **Category**: Rewriting Tools
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/3131/3131607.png)
   - **Slug**: rewrite-article

### Writing Assistant Tools

1. **Text Improver**
   - **Description**: Refines your writing by eliminating errors and improving tone, word choice, and readability.
   - **Category**: Writing Assistant
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/1686/1686815.png)
   - **Slug**: text-improver

### Social Media Tools

1. **Instagram Post Generator**
   - **Description**: Generates Instagram post ideas based on given keywords.
   - **Category**: Social Media
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/15713/15713420.png)
   - **Slug**: instagram-post-generator

2. **Instagram Hashtag Generator**
   - **Description**: Generates up to 15 Instagram hashtags based on keywords.
   - **Category**: Social Media
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/7045/7045432.png)
   - **Slug**: instagram-hash-tag-generator

### Coding Tools

1. **Write Code**
   - **Description**: AI model generates code in any language based on your description.
   - **Category**: Coding
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/6062/6062646.png)
   - **Slug**: write-code

2. **Explain Code**
   - **Description**: AI model explains code line by line in any language.
   - **Category**: Coding
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/8488/8488751.png)
   - **Slug**: explain-code

3. **Code Bug Detector**
   - **Description**: Detects and fixes bugs in the provided code.
   - **Category**: Coding
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/4426/4426267.png)
   - **Slug**: code-bug-detector

### Marketing Tools

1. **Tagline Generator**
   - **Description**: Generates catchy taglines for your business or product based on the name and description.
   - **Category**: Marketing
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/2178/2178616.png)
   - **Slug**: tagline-generator

2. **Product Description Generator**
   - **Description**: Creates keyword-rich product descriptions for e-commerce platforms.
   - **Category**: Marketing
   - **Icon**: ![Icon](https://cdn-icons-png.flaticon.com/128/679/679922.png)
   - **Slug**: product-description

  
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
   
                 Show user-specific token limits (free and premium users).
   
   ![homepage](https://github.com/user-attachments/assets/fb1e0e23-e959-4fc9-b1da-819599c1ebc1)


3. **History**: Track user token usage over time.
   
                Display the current status of their account (e.g., number of tokens remaining)
   
      ![history](https://github.com/user-attachments/assets/3c9379e7-3ac1-4f23-8ab5-c365ae4f7914)

3. **Content Generation**:Allow users to select the templates .
   
                          Show an interface for inputting data and generating content.
     
   <img width="944" alt="hashtag generator" src="https://github.com/user-attachments/assets/4d769663-ec72-4499-a465-1017a48cad08">

4. **Payment Gateway**: Integrate with Razorpay for seamless payment processing. 

                      Include account upgrade options with pricing information.
   
   <img width="959" alt="payment_gateway" src="https://github.com/user-attachments/assets/1035ac86-406c-4332-a2e5-67135311f8f6">
