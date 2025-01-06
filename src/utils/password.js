import bcrypt from 'bcryptjs';

export async function saltAndHashPassword(password) {
  const saltRounds = 12;
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
}

export function comparePasswords(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}
