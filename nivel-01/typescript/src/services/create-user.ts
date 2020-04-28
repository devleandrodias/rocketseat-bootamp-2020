/**
 * Create User
 * @param name name
 * @param email email
 * @param password password
 */

interface TechObject {
  title: string;
  levelExperience: string;
}

interface CreateUserData {
  name: string;
  email: string;
  password?: string;
  techs: Array<string | TechObject>;
}

export default function createUser({
  name,
  email,
  password,
  techs,
}: CreateUserData) {
  const user = { name, email, password, techs };
  return user;
}
