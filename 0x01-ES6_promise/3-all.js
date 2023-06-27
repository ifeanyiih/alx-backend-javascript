import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  return Promise.all(promises)
    .then((response) => {
      const [{ body }, { firstName, lastName }] = response;
      console.log(`${body} ${firstName} ${lastName}`);
      return response;
    })
    .catch(() => console.log('Signup system offline'));
}
