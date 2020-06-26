/**
 * create id from email
 * @param email - email id
 * @returns the created id
 */

export const createId = (email) => {
  let pos = email.search("@");
  return email.substring(0, pos);
};
