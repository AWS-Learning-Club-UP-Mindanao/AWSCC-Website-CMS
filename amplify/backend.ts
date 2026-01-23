import { defineBackend } from '@aws-amplify/backend';
import { secret } from '@aws-amplify/backend'; // Use this utility
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

// To use a secret (e.g., for a Lambda or custom resource later):
// const mySecret = secret('EXTERNAL_API_KEY');