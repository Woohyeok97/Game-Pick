import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    // 프로바이더 배열
  providers: [
    GithubProvider({
        clientId: '908221489c50b65390f5',
        clientSecret: '41321eb27d5b2703ea83a0f3f6c9ac0cfebdccb6',
    }),
    GoogleProvider({
        clientId:'228392099530-2be3sp8d2ds8l75kqjt0fmmrvup08t1s.apps.googleusercontent.com',
        clientSecret: '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'
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
                if(user.email == 'qordngur156@gmail.com') {
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
    secret : 'asdwkkjadwkiofe'
};
export default NextAuth(authOptions); 