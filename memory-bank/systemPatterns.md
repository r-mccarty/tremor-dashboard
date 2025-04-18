# System Patterns

## System Architecture

### Next.js App Router Structure
The project uses Next.js with the App Router pattern, organizing pages and layouts in a nested structure:
- `src/app/` - Root application directory
  - `(main)/` - Main application routes (overview, details)
  - `settings/` - Settings-related routes
  - `layout.tsx` - Root layout with global providers
  - `globals.css` - Global styles
  - `siteConfig.ts` - Site-wide configuration

### Component Organization
- `src/components/` - Reusable UI components
  - Base components (Button, Input, etc.)
  - Complex components (Calendar, LineChart, etc.)
  - `ui/` - Specialized UI components
    - `data-table/` - Table-related components
    - `icons/` - Icon components
    - `navigation/` - Navigation components
    - `overview/` - Dashboard-specific components
    - `settings/` - Settings-specific components

### Data Management
- `src/data/` - Data-related files
  - `data.ts` - Main data structures
  - `generateData.js` - Data generation utilities
  - `overview-data.ts` - Dashboard-specific data
  - `schema.ts` - Data type definitions

### Utilities
- `src/lib/` - Utility functions and hooks
  - `chartUtils.ts` - Chart-related utilities
  - `useOnWindowResize.tsx` - Window resize hook
  - `utils.ts` - General utility functions

## Key Technical Decisions

### Framework Selection
- **Next.js**: Chosen for server-side rendering capabilities, routing, and overall React framework
- **TypeScript**: Used for type safety and better developer experience
- **Tailwind CSS**: Selected for utility-first styling approach

### UI Component Strategy
- **Radix UI**: Used as the foundation for accessible, unstyled components
- **Custom Components**: Built on top of Radix UI with Tailwind styling
- **Component Composition**: Complex UI elements composed from simpler components

### Data Visualization
- **Recharts**: Chosen for flexible, React-based charting library
- **Custom Chart Wrappers**: Added to provide consistent styling and behavior

### Data Management
- **TanStack Table**: Used for advanced table functionality
- **Static Data Generation**: Sample data generated for demonstration purposes

### State Management
- **React Hooks**: Used for component-level state
- **Context API**: Used for theme and potentially other global state

## Design Patterns

### Component Patterns
- **Compound Components**: Used for complex UI elements with multiple parts
- **Render Props**: Used in some components for flexible rendering
- **Custom Hooks**: Encapsulating reusable logic

### Layout Patterns
- **Nested Layouts**: Using Next.js App Router for shared layouts
- **Responsive Design**: Mobile-first approach with breakpoints
- **Grid System**: Using Tailwind's grid utilities

### Data Patterns
- **Data Fetching**: Structured for compatibility with various data sources
- **Data Transformation**: Utilities for formatting and processing data
- **Type Safety**: Strong typing throughout the application

### Navigation Patterns
- **Hierarchical Navigation**: Main sections with sub-sections
- **Sidebar Navigation**: Primary navigation method
- **Breadcrumbs**: For context within nested pages

## Component Relationships

### Layout Hierarchy
```
RootLayout
├── MainLayout (for main content pages)
│   ├── Overview Page
│   └── Details Page
└── SettingsLayout (for settings pages)
    ├── General Settings Page
    ├── Billing Settings Page
    └── Users Settings Page
```

### Component Dependencies
- UI components have minimal dependencies on application logic
- Data visualization components depend on data formatting utilities
- Navigation components depend on route configuration

## Critical Implementation Paths

### Rendering Flow
1. Next.js server components render the initial HTML
2. Client components hydrate with interactivity
3. Data is loaded and displayed in tables and charts

### User Interaction Flow
1. User navigates via sidebar or navigation components
2. Content is loaded for the selected section
3. User interacts with data visualizations or tables
4. Settings changes update application state

### Customization Flow
1. Modify theme variables in Tailwind configuration
2. Update component styles using Tailwind classes
3. Extend or modify data structures
4. Add new pages following the established patterns
