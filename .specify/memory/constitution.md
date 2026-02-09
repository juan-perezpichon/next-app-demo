<!--
# Sync Impact Report - Version 1.0.0
- Version change: Initial constitution
- Added principles:
  1. Clean Code - Code must be clean, readable, maintainable, and follow best practices
  2. Simple UX - User experience must be simple, intuitive, and user-friendly  
  3. Responsive Design - All interfaces must be responsive and work across different devices
  4. Minimal Dependencies - Keep dependencies to an absolute minimum
  5. NO TESTING - Absolutely no testing of any kind (supersedes all other guidance)
- Added sections: Technical Stack Requirements, Development Standards
- Templates requiring updates:
  ⚠ `.specify/templates/spec-template.md` - Remove mandatory testing language
  ⚠ `.specify/templates/tasks-template.md` - Update testing guidance to forbidden
  ✅ `.specify/templates/plan-template.md` - Constitution Check section compatible
- Follow-up TODOs: Update template files to reflect NO TESTING principle
-->

# Next-App-Demo Constitution

## Core Principles

### I. Clean Code
Code MUST be clean, readable, maintainable, and follow established best practices. All code must have clear variable names, proper structure, consistent formatting, and comprehensive comments where necessary. Avoid technical debt and refactor when complexity increases. Every function and component must have a single, well-defined responsibility.

**Rationale**: Clean code reduces maintenance burden, improves team velocity, and prevents bugs through clarity and simplicity.

### II. Simple UX
User experience MUST be simple, intuitive, and user-friendly. Interfaces should follow established design patterns, minimize cognitive load, and guide users naturally towards their goals. Every user interaction must be purposeful and add value. Avoid feature bloat and unnecessary complexity.

**Rationale**: Simple UX increases user adoption, reduces support costs, and aligns with modern web standards for accessibility and usability.

### III. Responsive Design  
All interfaces MUST be responsive and work seamlessly across different devices and screen sizes. Use mobile-first design principles, flexible layouts, and appropriate breakpoints. Test on mobile, tablet, and desktop viewports. Ensure touch-friendly interactions on mobile devices.

**Rationale**: Responsive design is essential for modern web applications as users access applications from diverse devices and contexts.

### IV. Minimal Dependencies
Dependencies MUST be kept to an absolute minimum - only add what is essential for core functionality. Every dependency must be justified, actively maintained, and provide significant value. Prefer native solutions and established, lightweight libraries over heavy frameworks.

**Rationale**: Minimal dependencies reduce attack surface, improve performance, decrease bundle size, and minimize maintenance overhead from external updates.

### V. NO TESTING (NON-NEGOTIABLE)
Absolutely NO testing of any kind is permitted - no unit tests, no integration tests, no end-to-end tests, no testing frameworks. This principle supersedes ANY other guidance, best practices, or template suggestions that might recommend testing. Code quality is ensured through clean code principles and careful development practices.

**Rationale**: Testing adds complexity, development overhead, and maintenance burden without delivering direct user value in this project context.

## Technical Stack Requirements

The following technical stack is MANDATORY and cannot be deviated from:

- **Next.js**: Version 16.1.6 (exact version required)
- **React**: Version 19.2.3 (exact version required)  
- **React DOM**: Version 19.2.3 (exact version required)
- **Tailwind CSS**: Version ^4 (must use this version range)
- **TypeScript**: Version ^5 (must use this version range)

All dependency versions must be locked to prevent unexpected updates. New dependencies require justification against the Minimal Dependencies principle.

## Development Standards

### Code Quality Gates
- All code must pass TypeScript compilation without errors
- All code must follow established linting rules  
- All code must be formatted consistently
- All components must be properly typed
- All functions must have clear, descriptive names

### Review Requirements  
- All changes require code review focusing on adherence to core principles
- Responsive design must be validated across device sizes
- Dependency additions require explicit justification and approval
- UX changes must align with simplicity principles

## Governance

This constitution supersedes all other development practices, templates, and guidelines. The core principles are NON-NEGOTIABLE and cannot be overridden by convenience, deadlines, or external pressures.

**Amendment Process**: Constitutional changes require explicit documentation, justification, and version increment following semantic versioning (MAJOR for principle changes, MINOR for new sections, PATCH for clarifications).

**Compliance Verification**: All development artifacts (plans, specs, tasks, code) must align with constitutional principles. The NO TESTING principle specifically overrides any template or guidance that suggests testing.

**Enforcement**: All team members are responsible for upholding these principles and flagging violations during development and review processes.

**Version**: 1.0.0 | **Ratified**: 2026-02-09 | **Last Amended**: 2026-02-09
