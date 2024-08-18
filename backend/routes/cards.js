const express = require('express');

module.exports = function(supabase) {
  const router = express.Router();

  // Create a card
  router.post('/', async (req, res) => {
    const { title, description, link } = req.body;

    try {
      const { data, error } = await supabase
        .from('cards')
        .insert([{ title, description, link }]);

      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Database error' });
      }

      res.status(201).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Get all cards
  router.get('/', async (req, res) => {
    try {
      const { data, error } = await supabase.from('cards').select('*');

      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Database error' });
      }

      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Get a specific card
  router.get('/:title', async (req, res) => {
    const { title } = req.params;

    try {
      const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq('title', title)
        .single();

      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'Database error' });
      }

      if (!data) {
        return res.status(404).json({ error: 'Card not found' });
      }

      res.json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
};