/*
  # Create Reviews Table

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key) - Unique identifier for each review
      - `name` (text) - Name of the reviewer
      - `email` (text) - Email of the reviewer
      - `rating` (integer) - Rating from 1-5
      - `message` (text) - Review message content
      - `created_at` (timestamptz) - Timestamp when review was created

  2. Security
    - Enable RLS on `reviews` table
    - Add policy for anyone to insert reviews (public submission)
    - Add policy for anyone to read reviews (public display)
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert reviews"
  ON reviews
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can read reviews"
  ON reviews
  FOR SELECT
  TO anon
  USING (true);