# Project Structuring

> Folder structure options and naming conventions for my current projects

### Component Folder Structure Convention
```
.
├── ...
├── Component                           # Component's Name
│   ├── Component.helper.tsx            # Logic, Interface, Props of the component
│   ├── Component.tsx                   # React Component
│   ├── index.ts                        # Used solely for the purpose to export * to its parent directory
│   └── styles.ts (*)                   # (*) Used when using styled-components in the project 
├── index.ts                            # Used solely for the purpose to export * to its parent directory
└── ...
```

> Use lowercase on every folder and file except Components
