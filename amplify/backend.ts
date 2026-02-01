import { defineBackend } from '@aws-amplify/backend';
import { secret } from '@aws-amplify/backend'; // Use this utility
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

const { cfnUserPool } = backend.auth.resources.cfnResources;

cfnUserPool.adminCreateUserConfig = {
  allowAdminCreateUserOnly: true, 
};

cfnUserPool.policies = {
  passwordPolicy: {
    minimumLength: 8,
    requireLowercase: true,
    requireNumbers: true,
    requireSymbols: true,
    requireUppercase: true,
    temporaryPasswordValidityDays: 7,
  },
};

// To use a secret (e.g., for a Lambda or custom resource later):
// const mySecret = secret('EXTERNAL_API_KEY');