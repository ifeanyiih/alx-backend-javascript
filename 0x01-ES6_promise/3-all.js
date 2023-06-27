import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  Promise.all(promises)
    .then((response) => {
      const [body, name] = response;
      console.log(body.body, name.firstName, name.lastName);
      return response;
    });
}
