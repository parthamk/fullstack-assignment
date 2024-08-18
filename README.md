# Help Center API Assignment

## Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/parthamk/fullstack-assignment.git
   cd fullstack-assignment
   ```
   - open your favorite code editor in the current directory (VS code `preferred`)
   - now open terminal or command prompt and follow the instructions
   
2. **Frontend:**

   - I have used `vite` and `tailwindcss` for `frontend`.
   - Follow the instructions below to run the frontend.

   `to run the frontend on local machine`

   ```bash
   cd frontend
   npm i
   ```

   ```bash
   npm run dev
   ```

   > Frontend file structure

   <details>
      <summary>Click to expand</summary>
      ```
      └── 📁frontend
         └── 📁public
            └── check.svg
            └── vite.svg
         └── 📁src
            └── 📁assets
                  └── react.svg
            └── 📁components
                  └── CardGrid.jsx
                  └── Footer.jsx
                  └── Header.jsx
                  └── SearchBar.jsx
            └── 📁context
                  └── CardContext.jsx
            └── App.css
            └── App.jsx
            └── index.css
            └── main.jsx
         └── .gitignore
         └── eslint.config.js
         └── index.html
         └── package-lock.json
         └── package.json
         └── postcss.config.js
         └── README.md
         └── tailwind.config.js
         └── vite.config.js
      ```
   </details>

   

3. **Backend:**

   > Npm packages used are following
      - @supabase/supabase-js
      - cors
      - dotenv
      - express
      - nodemon
      - pg


> Follow the instructions below to run the backend.

   ```bash
   cd backend
   ```

   `create a .env file in the root folder`

   paste the following supabase credential in the `.env` file

   <details>
      <summary>Spoiler warning</summary>

      ```
      SUPABASE_URL=https://wrgfkdrxzlonqznuqutg.supabase.co
      SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyZ2ZrZHJ4emxvbnF6bnVxdXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5MTYxNjAsImV4cCI6MjAzOTQ5MjE2MH0.ivvMmOjjDs_tyxg7mffLbJgd27IaKXSGegKqjnt-w4c
      ```
   </details>

   - install node modules

   ```bash
   npm i
   ```   
   - then run the backend with 

   ```bash 
   npm start
   ```

   - When back end starts you will get these logs in terminal
   ```bash
      Supabase connected successfully
      Server listening on port 3001
   ```

> Backend file structure

   <details>
      <summary>Click to expand</summary>
      ```
      └── 📁backend
         └── 📁routes
            └── cards.js
         └── .env
         └── .gitignore
         └── package-lock.json
         └── package.json
         └── server.js
      ```
   </details>
---
