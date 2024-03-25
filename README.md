### A Vue 3 Firebase web porfolio.

Adam Loewen does software development, multimedia art, and holistic coaching. Seeking remote work.

This is an open source website so feel welcome to help make it cooler. 🫶🏽

# Stein Unlimited

*Stein Unlimited is a Second Tier, decreasingly imaginary company (or network state) providing access to a product called Disconnectors. ~We create The Future~*

**Contents:**
- [unThinkMe](https://www.youtube.com/channel/UC6i8QNmPT1buzJqLZFS5aNQ): YouTube Integral Theory ([Ken Wilber](https://en.wikipedia.org/wiki/Ken_Wilber)) channel. 

- zenTime: a clock and calendar designed to make time less stupid for humans. 

- Beacon: Web-based science fiction mystery fiction series "Beacon". 

- An interactive representation of the Integral "AQAL" model.

- Member chat service.

- Links to portfolio video, comedy, and music projects.

# Developer Guide

**Install dependencies:**

`npm install`

`npm i -g firebase-tools`

**Firebase:**

To create a fully functional version of this project, you would need to create your own Firebase project with hosting, storage, Firestore and realtime databases. I was aiming to explore all of the primary Firebase features.

.env.example file contains your credentials. In order to use admin services, you would need to create an admin auth token (not covered here). That section is not visible to the public and most of it does not appear in this repo.

**Development:**

*All collaborative work must conform to TypeScript and pass all tests.* 🙏🏿
- `npm run dev` Start Vite server locally.
- `npm run typecheck` Ensure TypeScript is error free.
- `npm run build` Build to dist folder.
- `npm run preview` Build project to ensure that dist performs like dev.
- `npm run test:unit` Run Vitest .spec files for unit and integration testing.
- `npm run test:e2e` Run Playwright tests.
- `npm run lint` In case you don't have a good IDE.