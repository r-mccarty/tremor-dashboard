# Technical Context

## Technologies Used

### Core Framework
- **Next.js 14.2.23**: React framework with server-side rendering and App Router
- **React 18.2.0**: UI library for component-based development
- **TypeScript 5.8.2**: Typed JavaScript for better developer experience and code quality

### Styling
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **tailwind-merge**: Utility for merging Tailwind CSS classes
- **tailwind-variants**: Creating variants of components with different styles
- **@tailwindcss/forms**: Form styling plugin for Tailwind

### Fonts
- **Colfax**: Primary sans-serif font (Regular 400, Medium 500)
- **Barlow**: Heading font (Regular 400, Medium 500, Bold 700)
- **Feature Flat**: Additional font family (Condensed Regular, Condensed Medium, Headline, Text Bold)

### UI Components
- **Radix UI**: Headless UI components for accessibility
  - Components include: Checkbox, Dialog, Dropdown Menu, Label, Navigation Menu, Popover, Radio Group, Select, Slot, Switch, Tooltip
- **@remixicon/react 4.6.0**: Icon library

### Data Visualization
- **Recharts 2.15.1**: React charting library for data visualization
- **date-fns 3.6.0**: Date utility library
- **cobe 0.6.3**: Interactive 3D globe visualization library

### Data Management
- **@tanstack/react-table 8.21.2**: Table library for React
- **@internationalized/date 3.7.0**: Internationalization utilities for dates

### Drag and Drop
- **@atlaskit/pragmatic-drag-and-drop**: Drag and drop functionality
  - Includes core, flourish, hitbox, live-region, and react-drop-indicator packages

### Utilities
- **clsx 2.1.1**: Utility for constructing className strings
- **next-themes 0.4.6**: Theme management for Next.js
- **tiny-invariant 1.3.3**: Invariant checking utility
- **use-debounce 10.0.4**: Debounce hook for React

### Development Tools
- **ESLint 8.57.1**: JavaScript linter
- **Prettier 3.5.3**: Code formatter
- **prettier-plugin-tailwindcss 0.6.11**: Tailwind CSS integration for Prettier
- **TypeScript ESLint Parser 8.28.0**: TypeScript support for ESLint

## Development Setup

### Prerequisites
- Node.js (compatible with Next.js 14.2.23)
- pnpm (recommended) or npm

### Installation
```bash
pnpm install
```

### Development Server
```bash
pnpm run dev
```
This starts the development server at [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
pnpm run build
```

### Start Production Server
```bash
pnpm start
```

### Linting
```bash
pnpm run lint
```

### Generate Sample Data
```bash
pnpm run generate
```

## Technical Constraints

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- No explicit support for legacy browsers mentioned

### Performance Considerations
- Next.js optimizations for server-side rendering and static generation
- Font optimization via next/font
- Component-level optimizations should be considered for data-heavy visualizations

### Accessibility Requirements
- Radix UI provides accessible base components
- Additional accessibility considerations should be maintained when extending components

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive components for various screen sizes
- Custom hook (useOnWindowResize) for handling window resize events

### State Management
- React's built-in state management (useState, useContext)
- No external state management library (Redux, Zustand, etc.)

## Tool Usage Patterns

### Component Development
- Create reusable components in `src/components/`
- Use TypeScript interfaces for props
- Leverage Tailwind CSS for styling
- Extend Radix UI components for complex interactions

### Page Development
- Use Next.js App Router conventions
- Create pages in appropriate directories under `src/app/`
- Utilize layouts for shared UI elements

### Data Handling
- Sample data generation with `generateData.js`
- Type definitions in `schema.ts`
- Table data handling with TanStack Table

### Styling Approach
- Utility-first with Tailwind CSS
- Component variants with tailwind-variants
- Class merging with tailwind-merge and clsx

### Project Structure
- Feature-based organization within `src/app/`
- Component categorization in `src/components/`
- Utility functions in `src/lib/`
- Data-related files in `src/data/`

## Development Workflow

### Recommended Process
1. Understand requirements
2. Identify or create necessary components
3. Implement page layout and functionality
4. Connect to data sources (or use sample data)
5. Test across different screen sizes
6. Ensure accessibility compliance
7. Optimize for performance

### Code Style
- Follow ESLint and Prettier configurations
- Maintain consistent naming conventions
- Use TypeScript types for all components and functions
