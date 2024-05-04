import NextAuth from 'next-auth';
import Provider from 'next-auth/providers';

export default NextAuth({
  providers: [
    Provider.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login', // Redirect to the login page on sign-in
  },
});
