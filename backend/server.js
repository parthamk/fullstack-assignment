const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3001;

// Create a function to initialize Supabase
function initializeSupabase() {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('Supabase connected successfully');
    return supabase;
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
    process.exit(1);
  }
}

// Initialize Supabase
const supabase = initializeSupabase();

app.use(cors());
app.use(express.json());

// Pass supabase to the routes
const cardsRouter = require('./routes/cards')(supabase);

app.use('/cards', cardsRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});