import { signIn, confirmSignIn } from 'aws-amplify/auth';

export async function attemptSignIn(email: string, pass: string) {
  try {
    const { nextStep } = await signIn({ username: email, password: pass });
    return nextStep.signInStep;
  } catch (error) {
    throw error;
  }
}

export async function completeNewPassword(newPass: string) {
  try {
    await confirmSignIn({ challengeResponse: newPass });
    return "SUCCESS";
  } catch (error) {
    throw error;
  }
}