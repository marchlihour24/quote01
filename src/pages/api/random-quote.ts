import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Use Supabase SQL to fetch a random quote efficiently
  const { data, error } = await supabase.rpc('get_random_quote');

  if (error || !data || data.length === 0) {
    return res.status(500).json({ error: 'No quotes found' });
  }

  res.status(200).json(data[0]);
}