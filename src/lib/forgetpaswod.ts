// Define the URL of your backend API
// forgetauth.ts

// Assume this function makes an API call to your backend to reset the password using the provided token and new password
export async function resetPassword(token: string, newPassword: string): Promise<Response> {
  try {
    const response = await fetch('http://localhost:1700/api/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, newPassword }),
    });

    return response;
  } catch (error) {
    throw new Error('Failed to reset password');
  }
}

