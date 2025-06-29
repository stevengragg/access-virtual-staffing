# Copilot Instructions for Access Virtual Staffing

## Project Overview
Access Virtual Staffing is a Next.js website promoting virtual staffing services. Built with modern technologies focusing on SEO, performance, scalability, and user experience.

## Analysis Process

Before responding to any request, follow these steps:

1. **Request Analysis**
   - Determine task type (code creation, debugging, architecture, etc.)
   - Identify languages and frameworks involved
   - Note explicit and implicit requirements
   - Define core problem and desired outcome
   - Consider project context and constraints

2. **Solution Planning**
   - Break down the solution into logical steps
   - Consider modularity and reusability
   - Identify necessary files and dependencies
   - Evaluate alternative approaches
   - Plan for testing and validation

3. **Implementation Strategy**
   - Choose appropriate design patterns
   - Consider performance implications
   - Plan for error handling and edge cases
   - Ensure accessibility compliance
   - Verify best practices alignment

## Tech Stack
- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with custom design system
- **CMS**: PayloadCMS 3.42.0
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Auth0
- **UI Components**: Radix UI + Custom components
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend with React Email
- **Deployment**: Vercel
- **Development Server**: Runs on port 5000

## Code Style & Standards

### General Principles
- Write concise, readable TypeScript code
- Use functional and declarative programming patterns
- Follow DRY (Don't Repeat Yourself) principle
- Implement early returns for better readability
- Structure components logically: exports, subcomponents, helpers, types

### TypeScript
- Use strict TypeScript with proper typing
- Prefer interfaces over types for object shapes
- Avoid enums; use const maps instead
- Use proper generics and utility types
- Follow naming conventions: PascalCase for components, camelCase for variables/functions
- Use `@/*` import alias for project imports
- Use `satisfies` operator for type validation
- Implement proper type safety and inference

### Naming Conventions
- Use descriptive names with auxiliary verbs (isLoading, hasError)
- Prefix event handlers with "handle" (handleClick, handleSubmit)
- Components: PascalCase (e.g., `UserProfile.tsx`)
- Pages: lowercase with hyphens (e.g., `user-profile`)
- Utilities/Hooks: camelCase (e.g., `useUserInfo.ts`)
- Types: camelCase with `.d.ts` extension (e.g., `users.d.ts`)
- Configuration files: lowercase with dots (e.g., `payload.config.ts`)
- Directories: lowercase with dashes (e.g., `components/auth-wizard`)
- Favor named exports for components

### React & Next.js 15 Best Practices
- Use functional components with hooks
- Prefer App Router over Pages Router
- **Favor React Server Components (RSC) where possible**
- **Minimize 'use client' directives**
- **Implement proper error boundaries**
- **Use Suspense for async operations**
- **Optimize for performance and Web Vitals**
- Follow Next.js 15 conventions and best practices
- Use proper SEO metadata generation with `generateMeta` utility

### Next.js 15 State Management
- **Use `useActionState` instead of deprecated `useFormState`**
- **Leverage enhanced `useFormStatus` with new properties (data, method, action)**
- **Implement URL state management with 'nuqs'**
- **Minimize client-side state**
- Use React's built-in state management (useState, useReducer)
- Use SWR for data fetching and caching
- For forms, use React Hook Form with Zod validation
- Store user info in custom hooks (`use-user-info.ts`)

### Next.js 15 Async Request APIs
- **Always use async versions of runtime APIs:**
```typescript
const cookieStore = await cookies()
const headersList = await headers()
const { isEnabled } = await draftMode()
```
- **Handle async params in layouts/pages:**
```typescript
const params = await props.params
const searchParams = await props.searchParams
```

### Component Structure
```typescript
// Component structure example
import type { ComponentProps } from './types'

interface Props extends ComponentProps {
  // Component-specific props
}

export const ComponentName: React.FC<Props> = ({ 
  // Destructure props
}) => {
  // Hooks first
  // Then handlers
  // Then render
  return (
    <div className="tailwind-classes">
      {/* JSX */}
    </div>
  )
}
```

### Styling Guidelines
- Use Tailwind CSS classes exclusively
- Follow the custom color palette: `primaryBlue: #003479`
- Use Relume UI components from `@relume_io/relume-ui`
- Responsive design: mobile-first approach
- Use custom CSS variables from `cssVariables.js`
- Utilize design tokens and consistent spacing

### State Management
- Use React's built-in state management (useState, useReducer)
- Use SWR for data fetching and caching
- For forms, use React Hook Form with Zod validation
- Store user info in custom hooks (`use-user-info.ts`)

## Project Structure Guidelines

### Directory Organization
- `/app`: Next.js App Router pages and layouts
- `/blocks`: Reusable content blocks for CMS
- `/collections`: PayloadCMS collection configurations
- `/components`: Reusable React components organized by category
- `/hooks`: Custom React hooks
- `/lib`: Utility functions and shared logic
- `/types`: TypeScript type definitions
- `/utils`: Helper functions and utilities

### Component Organization
- Group related components in folders
- Include `index.ts` for clean imports
- Separate client and server components clearly
- Use `.client.tsx` suffix for client components

### PayloadCMS Conventions & Best Practices
- Collections in `/collections` with proper TypeScript types
- Blocks in `/blocks` with `RenderBlocks.tsx` orchestrator
- Fields in `/fields` for reusable field configurations
- Access control in `/access` directory

#### Collections Best Practices
- Use TypeScript interfaces for collection types
- Implement proper access control using Payload's built-in access control
- Follow naming conventions: PascalCase for collection names
- Group related fields using field groups
- Use field-level validation with Zod schemas

```typescript
interface User {
  id: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
  ],
};
```

#### Access Control Implementation
- Implement role-based access control
- Use field-level access control
- Document access control rules
- Test access control thoroughly

```typescript
access: {
  read: ({ req: { user } }) => {
    if (user?.role === 'admin') return true;
    return {
      status: {
        equals: 'published',
      },
    };
  },
}
```

#### Hooks and Configuration
- Use hooks for complex business logic
- Implement proper error handling
- Keep hooks pure and testable
- Document hook behavior
- Use environment variables for sensitive data
- Use TypeScript for type safety
- Follow Payload's recommended project structure

### Drizzle ORM Best Practices
- Use TypeScript for all database operations
- Implement proper schema definitions
- Use proper indexing and query optimization
- Follow the repository pattern for data access
- Implement proper error handling and transactions

#### Schema Organization
```typescript
// Database schema structure
src/db/
├── schema.ts          # Database schema definitions
├── migrations/        # Migration files
├── index.ts           # Database connection and initialization
└── utils.ts           # Utility functions for database operations
```

#### Query Patterns
- Use Drizzle's `select` query builder for type-safe data retrieval
- Leverage `where`, `orderBy`, `limit`, and `offset` clauses
- Use transactions for multiple related operations
- Avoid over-fetching data
- Implement proper error handling

```typescript
// Example repository pattern
const getUserById = async (id: string) => {
  try {
    const user = await db.select().from(users).where(eq(users.id, id));
    return user[0];
  } catch (error) {
    throw new AppError('Failed to fetch user', { cause: error });
  }
};
```

## Development Practices

### Error Handling
- Use custom `AppError` class from `utils/app-error.ts`
- Implement proper error boundaries
- Use Zod for runtime validation
- Handle async operations with proper try/catch

### Performance
- Use Next.js Image component for optimized images
- Implement proper loading states
- Use React.memo for expensive components
- Optimize bundle size with proper imports

### Security
- Use Auth0 for authentication
- Implement proper access controls
- Validate all user inputs with Zod
- Use environment variables for sensitive data

### Testing
- Write unit tests for utilities and hooks
- Test components with user-centric approach
- Use TypeScript for type safety

## Specific Project Guidelines

### Forms
- Use React Hook Form with `@hookform/resolvers`
- Implement Zod schemas for validation
- Use custom form components from `/components/form`
- Handle form submissions with proper error handling

### Email System
- Use Resend service with React Email templates
- Templates in `/components/emails`
- Send notifications using `services/send-email-notif.ts`

### Content Management
- Use PayloadCMS for content management
- Implement rich text with Lexical editor
- Use proper SEO fields and metadata
- Implement live preview functionality

### Search & Navigation
- Use search functionality from `/search` components
- Implement breadcrumbs with `use-breadcrumbs.ts`
- Use proper navigation structure

### Jobs & Applications
- Use custom hooks for job submissions (`use-job-submissions.ts`)
- Implement proper form validation for job applications
- Handle file uploads with Cloudinary integration

## Environment & Configuration

### Development Commands
```bash
npm run dev          # Start development server on port 5000
npm run build        # Build for production
npm run lint         # Run ESLint
npm run payload      # Run PayloadCMS commands
```

### Environment Variables
- Use `.env.local` for local development
- Follow the `.env.example` template
- Use proper Auth0 configuration
- Configure database and email service credentials

## Code Review Guidelines

### Before Submitting
- Ensure TypeScript compilation passes
- Run ESLint and fix all issues
- Test functionality thoroughly
- Check responsive design
- Validate forms and error handling
- Test authentication flows

### Code Quality Checklist
- [ ] Proper TypeScript types
- [ ] Consistent code formatting
- [ ] Proper error handling
- [ ] Responsive design
- [ ] Accessibility considerations
- [ ] Performance optimizations
- [ ] Security best practices
- [ ] Proper documentation/comments

## Common Patterns

### API Routes
```typescript
// app/api/example/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Handle request
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Message' }, { status: 500 })
  }
}
```

### Custom Hooks
```typescript
// hooks/use-example.ts
import { useState, useEffect } from 'react'

export const useExample = () => {
  const [state, setState] = useState()
  
  useEffect(() => {
    // Effect logic
  }, [])
  
  return { state, setState }
}
```

### Form Components
```typescript
// Use React Hook Form with Zod validation
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  // Schema definition
})

export const FormComponent = () => {
  const form = useForm({
    resolver: zodResolver(schema)
  })
  
  // Form implementation
}
```

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [PayloadCMS Documentation](https://payloadcms.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
