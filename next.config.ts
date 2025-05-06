import type { NextConfig } from 'next';
import bcrypt from 'bcryptjs';

const hash = await bcrypt.hash(password, 10);
const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
