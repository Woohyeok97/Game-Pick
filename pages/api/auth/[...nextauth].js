import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    // 프로바이더 배열
  providers: [
    GithubProvider({
        clientId : process.env.GITHUB_CLIENT_ID,
        clientSecret : process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
        clientId : process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
    // 유저 로그인시, 세션을 jwt형식으로 저장
    session: {
        strategy: 'jwt',
        maxAge: 14 * 24 * 60 * 60 // 14일동안 jwt토큰 저장
    },
  
    callbacks: {
      // jwt 생성시 실행되는 코드 
      // 소셜 플랫폼에서 받아온 정보(user)를 jwt(token)에 저장
      jwt: async ({ token, user }) => {
            if (user) {
                token.user = {};
                token.user.name = user.name
                token.user.email = user.email
                token.user.image = user.image
                token.user.role = 'nomal'

                // admin 유저 이메일 배열로 변환
                const adminEmails = process.env.ADMIN_EMAILS.split(',')

                // 토큰에 admin 유저 관리자 역할 설정
                if(adminEmails.includes(user.email)) {
                    token.user.role = 'admin'
                }
            }
            return token;
      },
      // getServerSession() 함수가 호출될때 실행되는 코드
        session: async ({ session, token }) => {
            session.user = token.user;  
            return session;
        },
    },
    // jwt 시크릿키
    secret : process.env.JWT_SECRET_KEY
};

export default NextAuth(authOptions); 