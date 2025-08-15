# Contributing to Sypnex OS VS Code Extension

This extension provides IntelliSense support for the Sypnex OS API.

This VS Code extension is part of the Sypnex OS ecosystem:
- **[sypnex-os](https://github.com/Sypnex-LLC/sypnex-os)**: Core operating system
- **[sypnex-os-apps](https://github.com/Sypnex-LLC/sypnex-os-apps)**: Apps and development guide  
- **[sypnex-os-vscode-extension](https://github.com/Sypnex-LLC/sypnex-os-vscode-extension)**: This repository

## Setup

### Prerequisites
- Node.js and npm
- VS Code with TypeScript support
- Git

### Development Environment

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/sypnex-os-vscode-extension.git
   cd sypnex-os-vscode-extension
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open in VS Code:
   ```bash
   code .
   ```
4. Press F5 to launch the extension in a new Extension Development Host window

## Contributing Areas

### API Coverage
- Adding new SypnexAPI methods to autocomplete
- Improving method documentation and signatures
- Adding parameter hints and return type information

### Extension Features
- Better error handling and validation
- Code snippets for common app patterns
- Enhanced hover documentation

### Developer Experience
- Improved IntelliSense accuracy
- Better integration with VS Code features
- Performance optimizations

### Testing
- Unit tests for extension functionality
- Integration tests with VS Code
- Testing across different VS Code versions

## Development Workflow

1. Create a branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following coding standards:
   - Use TypeScript for extension code
   - Follow VS Code extension development best practices
   - Update API definitions in `sypnex-api.js`
   - Test your changes in the Extension Development Host

3. Test your changes:
   - Launch the extension in Extension Development Host (F5)
   - Test autocomplete functionality
   - Verify hover documentation works
   - Check for console errors

4. Commit your changes with clear messages:
   ```bash
   git commit -m "Add autocomplete for new SypnexAPI methods"
   ```

5. Push to your fork and create a Pull Request with:
   - Clear title and description
   - Reference to related issues
   - Screenshots showing the new functionality
   - Testing instructions for reviewers

## Code Style

### TypeScript (Extension Code)
- Follow TypeScript best practices and strict mode
- Use meaningful variable and function names
- Add JSDoc comments for functions and interfaces
- Prefer explicit typing over `any`

### JavaScript (API Definitions)
- Use camelCase for variables and functions
- Add comprehensive JSDoc comments for all API methods
- Include parameter types and return value descriptions
- Follow existing patterns in `sypnex-api.js`

## Testing

Test extension functionality in VS Code Extension Development Host:
- Verify autocomplete works for all SypnexAPI methods
- Check hover documentation displays correctly
- Test with JavaScript files

## Getting Help

- Check existing [GitHub Discussions](https://github.com/Sypnex-LLC/sypnex-os/discussions) (main OS repository)
- Create a new discussion for general questions about extension development
- Use GitHub Issues for specific bugs or feature requests for this extension

By contributing, you agree that your contributions will be licensed under the MIT License.
