# Access Virtual Staffing

Access Virtual Staffing is a Next.js application designed to promote virtual staffing services that will be provided by the AVS team in Florida, USA. This project includes features for managing talent requests, job applications, and personal information collection.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (latest)
- npm (latest)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/access-virtual-staffing.git
cd access-virtual-staffing
```

2. Install dependencies:

```bash
npm install

```

3. Create a `.env.local` file based on `.env.example` and fill in the necessary environment variables.

### Running the Development Server

To start the development server, run:

```bash
npm run dev

```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

### Building for Production

To build the project for production, run:

```bash
npm run build

```

### Starting the Production Server

To start the production server, run:

```bash
npm run start

```

### Running Migrations

To generate database migrations, use the following commands:

```bash
npm run migration:generate

```

To run the migrations, use the following command:

```bash
npm run migration:run

```

> Note: Make sure to communicate any needs to change the database schema with the team before generating or running migrations.

### Linting

To lint the codebase, run:

```bash
npm run lint

```

> Note: Use the prettier config saved on this repository to format the codebase. Do not alter the prettier configuration.

## Project Structure

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

## AVS Team

**Access Virtual Staffing**  
105 S. Narcissus Ave. Suite 512  
West Palm Beach, FL 33401  
Email: support@accessvirtualstaffing.com
