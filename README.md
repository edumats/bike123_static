# Bike123 Website

This is a Jamstack website built using [Next.js](https://nextjs.org/), leveraging static exports for optimized performance and deployment flexibility. The app is designed to deliver a fast, responsive, and scalable user experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Scripts](#scripts)

## Introduction

bike123_static is a modern web application designed with the Jamstack architecture, utilizing Next.js to generate static pages. This approach ensures high performance, scalability, and ease of deployment across various hosting platforms.

## Features

- **Static Generation:** The website is pre-rendered using Next.js's static generation, improving load times and SEO.
- **UI Components:** Integration of [Radix UI](https://www.radix-ui.com/) for accessible, customizable components.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **TypeScript Support:** Ensures type safety throughout the development process.
- **Linting and Formatting:** Eslint configured for maintaining code quality.

## Installation

To get started with bike123_static, clone the repository and install the dependencies:

```bash
git clone https://github.com/edumats/bike123_static.git
cd bike123_static
npm install
````

## Usage
### Development Server

To start the development server, run:

```bash
npm run dev
```

This will launch the app at http://localhost:3000, where you can view and interact with the website during development.

## Building for Production

To generate static files for production deployment:
```bash
npm run build
````
The static files will be created in the out directory, ready for deployment on any static hosting service.
### Running in Production

After building, take the contents of `out` folder and upload to a AWS S3 bucket and configure the bucket to [host a website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html).

## Dependencies
bike123_static utilizes the following key dependencies:

- Next.js: 14.2.5
- React: ^18
- Radix UI: Components like Dialog, Dropdown Menu, Label, etc.
- Tailwind CSS: ^3.4.4 for styling
- TypeScript: ^5 for static type checking

For a full list of dependencies, refer to the `package.json` file.

## Configuration
- ESLint: Configured for Next.js to enforce consistent code quality.
- Tailwind CSS: Customize the styling through the tailwind.config.js file.
- TypeScript: Type definitions and configurations are available in tsconfig.json.

## Scripts

Here are some useful scripts defined in package.json:

- npm run dev - Starts the development server.
- npm run build - Generates static files for production.
- npm start - Runs the app in production mode.
- npm run lint - Runs ESLint to check for code issues.