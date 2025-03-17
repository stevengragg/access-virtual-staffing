# Access Virtual Staffing

Access Virtual Staffing is a Next.js application designed to provide virtual staffing services. This project includes features for managing talent requests, job applications, and personal information collection.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x) or pnpm (>= 6.x) or bun (>= 0.x)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/access-virtual-staffing.git
cd access-virtual-staffing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create a `.env.local` file based on `.env.example` and fill in the necessary environment variables.

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

### Building for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Starting the Production Server

To start the production server, run:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

### Running Migrations

To generate and run database migrations, use the following commands:

```bash
npm run migration:generate
npm run migration:run
# or
yarn migration:generate
yarn migration:run
# or
pnpm migration:generate
pnpm migration:run
# or
bun migration:generate
bun migration:run
```

### Linting

To lint the codebase, run:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## Project Structure

```
.env.example
.env.local
.eslintrc.json
.gitignore
.prettierignore
.prettierrc
BACKLOGS.md
components.json
drizzle.config.ts
next-env.d.ts
next.config.mjs
package.json
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
.next/
    app-build-manifest.json
    build-manifest.json
    package.json
    react-loadable-manifest.json
    trace
    cache/
    server/
    static/
    types/
app/
    apple-icon.png
    favicon.ico
    globals.css
    icon.png
    ...
components/
context/
database/
hooks/
lib/
public/
services/
types/
```

### Key Directories

- **app/**: Contains the main application files, including pages and global styles.
- **components/**: Reusable UI components.
- **context/**: Context providers for state management.
- **database/**: Database configuration and migrations.
- **hooks/**: Custom React hooks.
- **lib/**: Utility functions and libraries.
- **public/**: Static assets like images and icons.
- **services/**: API service functions.
- **types/**: TypeScript type definitions.

## Technologies Used

- **Next.js**: The primary framework for building the application.
- **React**: For building UI components.
- **TypeScript**: For type safety.
- **Tailwind CSS**: For styling.
- **Auth0**: For authentication.
- **Radix UI**: For UI components.
- **Framer Motion**: For animations.
- **ESLint**: For linting.
- **Vercel**: For deployment.
- **PostgreSQL**: For the database.
- **Drizzle**: For database ORM and migrations.

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions, please contact us at:

**Access Virtual Staffing**  
105 S. Narcissus Ave. Suite 512  
West Palm Beach, FL 33401  
Email: support@accessvirtualstaffing.com
