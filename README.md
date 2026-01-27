# AWSCC Website Content Management System

A lightweight, serverless Content Management System built with Next.js 15 (App Router) and deployed on AWS Amplify.

## Design

[Figma Design](https://www.figma.com/design/i1jiVuIMbo85Q9cZ1qvriT/AWS-CMS?node-id=0-1&m=dev&t=Yr5vFVIHIg9usu4T-1)

## Deployment

This project uses AWS Amplify for CI/CD with branch-based deployments:

### Branch Strategy

- **main** - Production environment
- **staging** - Staging environment  
- **dev** - Development environment
- **pr-*** - Pull request previews (uses staging backend)

### Pipeline Configuration

The `amplify.yml` configures:

- **`ampx pipeline-deploy`** - Full backend deployment for main, staging, and dev branches. Creates and updates all backend resources including databases, APIs, and functions.
- **`ampx generate outputs`** - Lightweight operation for PR branches that generates configuration files without deploying backend resources. PR branches use staging backend, other branches fallback to dev.
- Frontend build with Next.js optimization
- Caching for `node_modules` and `.next/cache`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

