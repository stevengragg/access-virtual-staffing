## General Guidelines

### Development Environment

- **Node.js**: latest LTS version
- **npm**: latest version

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use feat, fix, docs, style, refactor, test, chore, and ci as the type
- Use the imperative mood in the subject line

### General File naming conventions

- Use kebab-case for filenames
- Use PascalCase for class names
- Use camelCase for variables and functions
- Use UPPERCASE for constants
- Use snake_case for database columns
- Use UPPERCASE for environment variables

### Code formatting

- Use prettier for code formatting (`.prettierrc`)

### Code quality

- Always run build and tests before finalizing a PR
- do manual testing before finalizing a PR

## Development Workflow

### Branching

- Use the following branch naming convention: `{number}-description`
- Do not push anything in Development or Master branch directly (Let me know first because I worked with these branches from time to time)
- Always create an Issue in Github and click "Create Branch" to create new branch for every feature or bug fix
- Always create a new branch from the `development` branch

### Pull Requests

- Always create a PR for every feature or bug fix
- Tag me as a reviewer

### Workflow

1. Create a Github Issue
2. Create a new branch from `development` branch via Github Issue you created (lower right corner)
3. Work on the feature or bug fix
4. Run manual tests for now (In the future we will setup automated tests)
5. Run `npm run build` to build the project
6. Create a PR
7. Tag the project manager as a reviewer
8. Do revisions if necessary (from the comments of the reviewer)
9. The project manager will be the one to merge the PR (unless given permission to do so)

## Particulars in Frontend Development

### Styling

- Use Tailwind CSS for styling

### Naming Conventions\*\*

- **File names** should always follow **kebab-case** (e.g., `my-component.tsx`)

### Component Structure

- Use function components with `export default`.
- Always type props explicitly using interfaces:

```typescript
interface Props {
  userId: string;
  userCreationDate: Date;
}
```

- Structure component files by:
  - **Imports** at the top, separating third-party libraries, hooks, and local imports.
  - **Types/interfaces** definition after imports.
  - **Component declaration** after types.

**Example:**

```tsx
import { Text } from "@chakra-ui/react";
import { LocalizationContext } from "../hooks/use-localization";

interface Props {
  fontSize: string;
}

export default function RedLabel(props: Props) {
  const { l } = useContext(LocalizationContext);

  return (
    <Text fontSize={props.fontSize} color="brand.red.400">
      {l["dashboard.learningStreaks"]}
    </Text>
  );
}
```

### TypeScript Best Practices

- Types are optional if the system can infer it
- Avoid `any` where possible. Use `unknown` if necessary, but ensure proper type assertions before using the variable.
- Use **strict null checks** and avoid non-null assertions (`!`) unless necessary.
- Do not use optional chaining unless necessary, see example below.

Example:

```tsx
const obj = {
  thisExistsForSure: true,
};

// Bad
obj?.thisExistsForSure;

// Good
obj.thisExistsForSure;
```

### Hooks

- Custom hooks should follow a `useSomething` pattern and be located in the `/hooks` folder:

```typescript
const { settings } = useSettings();
```

### State Management

The project utilizes React's built-in state management through hooks and contexts.

Apply contexts where appropriate.

### Imports

- Follow a clean import order:
  1. **External libraries** (e.g., React, SWR, Chakra UI).
  2. **Hooks** (local or external).
  3. **Local components**, utilities, and constants.
- Use relative paths when importing local files from the same directory.

## Particulars in Backend Development

### API Calls

- Use **SWR** for data fetching in frontend together with `fetchApi` utility.

```typescript
const response = useSWR(`/user/${userId}`, fetchApi, {
  /* options */
});
```

- Ensure API calls are modular and placed in the `/services` folder.

### Rest API

The page router in Next.js automatically generates API routes based on folder structure. When creating these routes, aim to follow RESTful best practices.

> While much of the app currently deviates from REST conventions, we intend to align future code with these standards.

1. **Clear Resource Naming**: Use consistent and intuitive URL paths that represent resources, such as `/users` or `/orders/{id}`. Paths should be nouns and follow a clear structure.
2. **HTTP Methods**: Make sure to use the correct HTTP methods—`GET` for retrieving data, `POST` for creating, `PUT/PATCH` for updating, and `DELETE` for removal.

3. **Status Codes**: Return appropriate HTTP status codes (`200 OK`, `404 Not Found`, `201 Created`) to indicate the result of each request clearly.

4. **Documentation**: Provide clear and detailed API documentation using tools like Swagger or OpenAPI, making it easy for developers to understand how to interact with your API.

## General Best Practices

- Keep functions concise, breaking down logic into smaller helper functions where possible.
- Always **memoize** values where necessary with `useMemo` or `useCallback` to prevent unnecessary re-renders.
- When handling dates, use appropriate libraries like **date-fns** or **dayjs**.
