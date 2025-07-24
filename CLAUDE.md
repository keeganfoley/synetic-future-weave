# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Dev note: PRIORITIZE EDITING FILES rather than CREATING NEW ONES! unless necessary

## Development Commands

```bash
# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

This is a React-based company website for Synetic AI, built with TypeScript and Vite. The architecture follows a component-based structure with clear separation of concerns:

### Key Architectural Decisions

1. **Component Organization**:
   - `src/components/ui/` - shadcn-ui component library (50+ pre-built components)
   - `src/components/` - Business-specific components following single responsibility principle
   - **Modular Section Components**: PurposeSection, ContactSection, ProcessSection, NewsletterSection
   - **Reusable UI Components**: CTAButton for consistent call-to-action styling
   - **Composition Pattern**: MainSections acts as a pure composition component
   - Components use TypeScript interfaces for props and follow React best practices
   - All components are memoized with React.memo for performance optimization

2. **Routing Structure**:
   - React Router DOM v6 with routes defined in App.tsx
   - Main pages: Index (landing), Contact, and 404
   - Route components in `src/pages/`

3. **Styling System**:
   - Tailwind CSS with custom configuration
   - Design tokens: Cosmic color palette (black, gold, charcoal, white)
   - Custom fonts: DM Serif Display (headings), Space Grotesk (body)
   - CSS variables for theming in index.css
   - Custom animations defined in tailwind.config.js

4. **State Management**:
   - React Query (TanStack Query) for server state
   - React Hook Form with Zod validation for forms
   - Local state with React hooks

5. **TypeScript Configuration**:
   - **Strict Mode Enabled**: Full TypeScript strict checking for type safety
   - Path aliasing: `@/*` maps to `./src/*`
   - No implicit any types allowed
   - Separate configs for app and node environments

6. **Code Quality Standards**:
   - ESLint configured with TypeScript rules
   - No unused variables allowed (enforced by linter)
   - All components properly typed with FC or explicit interfaces
   - Error handling with proper type guards instead of any types

## Important Development Notes

- **Port Configuration**: Dev server runs on port 8080 (configured in vite.config.ts)
- **Build Output**: Production builds go to `dist/` directory
- **No Test Framework**: Currently no testing setup - consider adding Vitest or Jest if needed
- **Component Library**: Extensive use of shadcn-ui components - check `src/components/ui/` before creating new UI components
- **Form Handling**: Use React Hook Form with Zod schemas for any new forms
- **Animations**: Custom animation utilities available in tailwind.config.js

## Common Patterns

1. **Creating New Components**:
   - Use TypeScript interfaces for props with explicit typing
   - Export components with React.memo for performance
   - Follow single responsibility principle - one component, one purpose
   - Utilize shadcn-ui components from `src/components/ui/`
   - Example structure:
     ```typescript
     import { FC, memo } from 'react';
     
     interface ComponentProps {
       // Define props with strict types
     }
     
     const Component: FC<ComponentProps> = ({ prop }) => {
       // Component logic
     };
     
     export default memo(Component);
     ```

2. **Adding Routes**:
   - Add route in App.tsx
   - Create page component in `src/pages/`
   - Update Navigation component if needed

3. **Styling**:
   - Use Tailwind utility classes
   - Leverage custom color tokens (bg-cosmic-black, text-cosmic-gold, etc.)
   - Use CSS variables defined in index.css for dynamic theming
   - For reusable button styles, use the CTAButton component

4. **Error Handling**:
   - Always use proper type guards instead of `any`
   - Example:
     ```typescript
     catch (error) {
       if (error instanceof Error) {
         // Handle error with proper typing
       }
     }
     ```