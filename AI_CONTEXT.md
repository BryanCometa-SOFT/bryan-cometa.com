# AI Context: Bryan Cometa Portfolio

## General Info
- **Project Type**: Angular Application
- **Version**: Angular 15.0.0
- **Purpose**: Personal portfolio
- **Deployment**: Firebase Hosting (public directory: `dist/portafolio`)

## Technology Stack
- **Framework**: Angular 15.0.0
- **UI Libraries**: 
  - Bootstrap 5.2.3
  - Angular Material 15.0.3
  - Animate.css 4.1.1
- **State/Reactivity**: RxJS 7.5.0
- **Utilities**: SweetAlert2 11.7.0

## Directory Structure (`src/app`)
- `components/`: Reusable UI elements (Navbar, Footer, Button). Encapsulated in `ComponentsModule`.
- `pages/`: Main application views.
  - `home/`: The main landing page.
  - `contact/`: Contact form page.
  - `admin/`: Admin section (not currently referenced in main routing, could be legacy or separate access).
  - Encapsulated in lazy-loaded `PagesModule` (`pages-routing.module.ts`).
- `services/`: Contains `contact.service.ts`, used for HTTP requests.
- `models/`: Interface definitions and data models (like `ContactModel`).

## Architectural Patterns
- **Routing Strategy**: The `AppRoutingModule` is configured with lazy loading for the main path (`''`), loading the `PagesModule`.
- **State Management**: Uses simple service-injected state and RxJS observables. No complex store (like NgRx) is present.
- **Backend / Database**: Connects to a Firebase Realtime Database using standard Angular `HttpClient` (`${environment.API_FIREBASE}/contacts.json`).

## Scripts (from `package.json`)
- `npm start` or `ng serve`: Spin up the development server.
- `npm run watch`: Run `ng build --watch --configuration development`.
- `npm run build` or `ng build`: Compile the application into the `dist/portafolio` directory.
- `npm run test` or `ng test`: Run Karma/Jasmine unit tests.

## Conventions for Future AI Interactions
1. **Modules**: Any new page should ideally go into `pages/` and be declared in `PagesModule`. Reusable UI components should go into `components/` and be declared/exported by `ComponentsModule`.
2. **Services / API**: Keep API calls in the `services/` directory. Rely on `environment` variables for configuration.
3. **Styling**: The app primarily uses Bootstrap alongside Angular Material. Be mindful of conflicting CSS rules when adding new elements.
