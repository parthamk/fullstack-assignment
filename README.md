# Help Center API Assignment

## Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/parthamk/fullstack-assignment.git
   cd fullstack-assignment
   ```

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

3. **Backend:**

   - Create a Node.js app in the `backend` folder.
   - Follow the `backend.md` instructions to complete the backend.

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
   
   - then run the backend with 

   ```bash 
   npm start
   ```

   - When back end starts you will get these logs in terminal
   ```bash
      Supabase connected successfully
      Server listening on port 3001
   ```

---
