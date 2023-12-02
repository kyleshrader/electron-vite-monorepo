# electron-vite-monorepo

A yarn monorepo to demonstrate electron-vite.

Uses yarn + electron-vite + typescript + react.

This is a demonstration of a minimal configuration monorepo of electron-vite. I used the @quick-start/electron template as a guide.

# ⚠️ MINIMAL CONFIGURATION

This doesn't provide all configuration or scripts that are present in the quick-start template. I'd still recommend adding the following:

 - eslint
 - prettier
 - some cross-package dependency version constraints to keep dependencies the same versions
 - a monorepo management tool like nx, lerna, or turbo
 - typechecking at the beginning of the build
 - base tsconfigs
 - more tsconfig configuration (more rules)

Other considerations may be:

 - jest
 - storybook
 - ui libraries
    - tailwind
    - material
    - chakra
    - etc

# Support

If you have any questions, ask in the issues or discussions boards.