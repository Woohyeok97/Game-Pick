# GamePick
추천게임을 둘러보며 유저들과 의견을 나눌수 있는 커뮤니티 서비스<br>
<br>

**서비스 링크** : [GamePick](https://game-pick.vercel.app)<br>

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/e93c4509-ad67-422d-85b3-4823fd75cf7b">



<br>

# 서비스 소개
요즘 따라 할 게임이 없으신가요?<br>
그렇다면 **GamePick** 에서 다른 유저들이 추천하고 의견을 남긴 게임들을 둘러 보세요.<br>
<br>

### GamePick을 처음 이용한다면..
- 관심있는 게임에 좋아요, 싫어요 피드백을 남길수 있습니다.
- 구글, 깃허브 계정으로 소셜 로그인이 가능합니다.
- 유튜브 이동 없이 트레일러 감상이 가능합니다.
- 게임에 대한 유저들의 코멘트를 살펴볼수 있고 남길수도 있습니다.
- 재밌는 코멘트를 발견 하셨나요? 코멘트에 좋아요를 남겨보세요.
- 좋아요, 최근순 으로 코멘트를 정렬할수 있습니다.


### 관리자 권한이 있다면..
- 게임 업로드가 가능합니다.
- 변경이 필요한 게임을 수정하거나 삭제할수 있습니다.
- 불경스러운 코멘트를 발견 하셨나요? 관리자 권한으로 과감하게 삭제할수 있습니다.

<br>

# GamePick 미리보기
<details>
<summary><b>Home 화면</b></summary>
<div markdown="1">
 
<br>

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/c06b636b-1286-4310-aed1-de6030544c80"/>

</div>
</details>


<details>
<summary><b>GamePick 시작하기</b></summary>
<div markdown="1">

<br>

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/d10ab1b6-e7a0-4d7d-8ee0-d1a86c3f7cce"/>

</div>
</details>


<details>
<summary><b>소셜 로그인</b></summary>
<div markdown="1">

<br>

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/fd7647c3-e173-4fe4-8499-aec659018181"/>
 
</div>
</details>

<details>
<summary><b>트레일러</b></summary>
<div markdown="1">

<br>

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/c7ad1c3b-f596-465a-b6f9-0a87f2396bcb"/>
 
</div>
</details>

<details>
<summary><b>게임 추천하기</b></summary>
<div markdown="1">

<br>

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/89016234-b9ee-410e-9957-0864ece53ab5"/>
 
</div>
</details>


<details>
<summary><b>코멘트</b></summary>
<div markdown="1">

### 코멘트 작성

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/4f4830f7-5d73-4bff-aff5-3d42acea0254"/>

### 코멘트 피드백

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/17cb2d2d-eb6a-4aee-8a1b-d65484789b32"/>

### 코멘트 삭제하기
- 작성자 및 관리자만 가능합니다.<br>

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/024109d6-893d-4837-9918-363fabb20559"/>
 
</div>
</details>


<details>
<summary><b>게임 관리(관리자 전용)</b></summary>
<div markdown="1">
 
### 게임 업로드

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/e499ba3d-a0f7-4b07-b9e4-c11547f40d44"/><br>

<br>

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/86efb933-212b-414e-a9f9-61e6f8402726"/>
 
### 게임 수정

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/1b6e4096-0482-437b-8acd-a2081a09739f"/>

### 게임 삭제 

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/3804ec15-d991-45eb-bfa5-da83a86be20e"/>
 
</div>
</details>

<br>

# 개발 포인트
프로젝트를 진행하면서 여러가지 고민을 거쳤습니다.<br>
아래는 그 과정에서 세운 개발 방향에 대한 간략한 소개입니다.<br>
<br>
<details>
<summary><b>비지니스 & UI 로직분리</b></summary>
<div markdown="1">
<br/>

프로젝트를 개발하면서 확장성과 유지보수성의 중요함을 크게 체감했습니다.<br/>
그래서 비지니스, UI 로직 분리에 중점을 두었습니다.<br/>

제가 개발과정에서 느꼈던 비지니스 & UI 로직 분리의 장점들 입니다.<br/>

- 서로간에 의존성을 최소화하여 유연성을 높일수있다.
- 디버깅과 테스트가 간편하고 추적이 쉽다.
- 코드 변경시, 다른 부분에 미치는 영향이 줄어든다.
  
<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/a1f18579-30b6-4fe2-96a7-defdcccfbe59"/><br>

확실한 분리를 위해 그림과 같은 구조가 필요하다고 생각되었습니다.<br>
단순히 파일로 비지니스 로직과 UI 로직을 분리하는 단계를 넘어서, 각각의 로직이 자신의 역할에 집중하고<br>
서로한테 미치는 영향을 최소화 하도록 설계하였습니다.<br>
<br>
또한, 이를 구현하기 위해 비지니스 로직과 UI 로직의 구체적인 기준을 설정하였습니다.<br>

### 비지니스 로직
비지니스 로직은 커스텀 훅으로 관리하였습니다.<br/>
커스텀 훅에서는 컴포넌트에 필요한 상태와 해당 상태를 조작 할수있는 함수만을 제공하도록 하였습니다.<br/>
이런 방식으로 비지니스 로직이 UI 로직에 불필요하게 간섭하는 것을 방지하였습니다.<br/>

### UI 로직
UI 로직은 컴포넌트 내부에서 관리하였습니다.<br/>
커스텀 훅에서 제공된 데이터를 바탕으로 UI를 구성하며,<br/>
사용자 상호작용시 커스텀 훅에서 제공하는 함수를 통해 상태를 변경할수 있도록 하였습니다.<br/>
이 과정에서 비지니스 로직에 간섭하지 않고 오로지 UI에만 집중하도록 설계하였습니다.<br/>
<br/>

---

</div>
</details>

<details>
<summary><b>API 설계</b></summary>
<div markdown="1">
<br/>
요청 라이브러리로 axios를 선택하였습니다.<br/>
브라우저 호환성도 좋고, json()없이 데이터 변환이 가능하다는 장점 때문입니다.<br/>

### RESTful API

직관적인 HTTP 요청과 클라이언트, 서버의 독립적인 진화를 위해<br/>
최대한 RESTful한 API를 작성하려고 했습니다.<br/>
<br/>

1\. URI를 통해, 어떤 리소스에 접근하는지 파악이 가능하도록 하였습니다.<br/>
예를들어, 코멘트 삭제 요청을 한다고 했을때 'api/deleteComment' 같은 추상적인 URI 보다는<br/>
'api/comments/_id' 같은 방식으로 어떤 콜렉션, 어떤 도큐먼트에 접근하는지 파악할수있도록 URI를 작성했습니다.<br/>
<br/>

2\. CRUD를 수행할때 적절한 HTTP 메소드를 사용하였습니다.<br/>
```js
// 코멘트삭제 로직 
export default function useDeleteComment({ comment }) {

    //...
   
    const removeComment = async () => {
        try {
            const submission = { userEmail : comment.userEmail }
            const response = await commentInstance.delete(`/${comment._id}`, { params : submission })
            // 삭제라는 목적에 맞게 delete 메소드 사용

            //...
            return { severity : 'success', message : response.message }
        } catch(err) {
            console.error(err)
            return { severity : 'error', message : err.message }
        }
    }

    return { removeComment }
}
```
상황과 목적에 따라 get, post, update, delete 메소드를 사용하여<br/>
접근하는 리소스에 대한 행위가 무엇인지 표현하였습니다.<br/>
<br/>

3\. delete, put 메소드로 콜렉션에 접근하는것을 지양했습니다.<br/>
특정 도큐먼트가 아닌, 콜렉션에 delete, put 메소드로 접근하면 의도치 않게 대량의 데이터가 손실될수있고<br/>
콜렉션 전체가 대상이 되기때문에 서버부하 문제도 발생하기 때문입니다.<br/>
그래서 DELETE, UPDATE 요청의 엔드포인트는 항상 도큐먼트Id로 설정했습니다.<br/>
<br/>

### API 모듈화
axios를 사용하는 과정에서 instance와 interceptor에 대해 알게되어 모듈화를 진행하였습니다.<br/>
접근하는 콜렉션에 따라 instance를 생성하였고, util/api/intance 디렉토리에서 관리하였습니다.<br/>
```js
// util/api/intance/contentInstance.js

export const contentInstance = axios.create({
    baseURL : process.env.NEXT_PUBLIC_CONTENTS_API,
})

// 에러처리 인터셉터
contentInstance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        throw error
    }
)
```
create()함수로 instance를 생성하여 API 요청 로직의 재사용성을 높였고<br/>
interceptor에 에러처리를 추가하여 불필요한 코드중복을 줄였습니다.<br/>

---

<br/>
</div>
</details>

<details>
<summary><b>DB & 백엔드 로직</b></summary>
<div markdown="1">
<br/>
 
다음과 같은 장점들 때문에 프로젝트 DB로 MongoDB를 선택했습니다.<br/>

- 자바스크립트와 어울리는 JSON형식의 도큐먼트
- 데이터 구조 변경의 유연함
- 대량의 데이터 처리에 뛰어난 성능

<img width="100%" src="https://github.com/Woohyeok97/Game-Pick/assets/75671909/63d17874-9997-4c0c-9f15-0fe91ce79d38"/>

**프로젝트 스키마** : [DB Schema](https://dbdiagram.io/d/64bf860902bd1c4a5ea593f9)

개발과정에서 여러 수정이 있었지만 프로젝트의 DB는<br/>
API 요청의 직관성, 데이터관리 최적화, 일관성의 이유로 3개의 콜렉션으로 구성하였습니다.

- **contents** : 게임데이터를 저장합니다.
- **comments** : contents에 대한 코멘트를 저장합니다.
- **feedback** : contents, comments에 대한 피드백을 저장합니다.

전체적인 DB구조는 콜렉션 서로가 부모-자식 관계를 갖는 구조로 설계했습니다.<br>
예를들어 comments,feedback 콜렉션은 'parent' 필드에 부모 도큐먼트ID를 저장하여<br>
도큐먼트 간의 부모-자식 관계를 나타냅니다.<br/>
<br>
이러한 구조로 인해, 부모 도큐먼트 삭제시 연관된 자식 도큐먼트도 함께 삭제하는 로직이 필요했습니다.<br/>
만약 부모 도큐먼트만 삭제하게 되면, 해당 자식 도큐먼트들이 부모잃은 상태로 남아있기 때문에 데이터의 일관성이 저하되고 DB도 낭비되기 때문입니다.<br/>
```js
export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('project')
    //...

    // 컨텐츠 삭제하기
    if(req.method == 'DELETE') {
        if(!session || session.user.role != 'admin') return res.status(400).json({ message : '관리자 권한이 없습니다.' }) 

        try {
            const contentComments = await db.collection('comments').find({ parent : req.query.id }).toArray()
            const commentIds = contentComments.map(item => item._id.toString()) // 연관된 코멘트ID 추출
            // 1. 컨텐츠 코멘트 피드백 삭제
            await db.collection('feedback').deleteMany({ parent : { $in : commentIds }})

            // 2. 컨텐츠 코멘트 삭제
            await db.collection('comments').deleteMany({ parent : req.query.id })

            // 3. 컨텐츠 피드백 삭제
            await db.collection('feedback').deleteMany({ parent : req.query.id })

            // 4. 컨텐츠 삭제
            const result = await db.collection('contents').deleteOne({ _id : new ObjectId(req.query.id) })

            return res.status(200).json({ result, message : '컨텐츠 삭제완료!' })
        }catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
}
```
예시로 게임(content)삭제 로직 입니다.<br/>
상위 도큐부터 삭제하게되면 잉여 도큐먼트가 생기는 문제가 있을수있다고 생각되어,
먼저 연관된 모든 하위 도큐먼트들을 삭제한 후에 마지막으로 상위 도큐먼트를 삭제하는 방식으로 작성하였습니다.<br/>
<br>

또한 contents,comments의 like,dislike 필드에 피드백 개수가 직접 저장되는 비정규화 방식을 사용했습니다.<br/>
그 이유는 클라이언트에서 contents나 comments의 피드백 개수를 조회할때 추가적인 쿼리없이 바로 접근할수있어<br/>
성능 최적화와 코드복잡성을 낮추는 효과가 있기 때문입니다.<br/>

하지만 이러한 방식은 데이터 무결성 측면에서 문제가 있을수있다고 판단되어<br/>
백엔드에서 피드백 관련 로직을 구현할때 데이터 무결성을 최대한 지키기 위한 방법을 사용했습니다. <br/>
```js
export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    const db = (await connectDB).db('project')
    //...

    // 피드백 생성
    if(req.method == "POST") {
        if(!session) return res.status(400).json({ message : '로그인 이후 이용해 주세요.' })

        try {
            const insertData = {
                parent : req.body.parent,
                userEmail : session.user.email,
                type : req.body.type
            }

            // 피드백 생성후, 부모 도큐먼트 피드백 개수 업데이트
            const feedbackResult = await db.collection('feedback').insertOne(insertData)
            const parentResult = await db.collection(req.body.collection).updateOne({ _id : new ObjectId(req.body.parent) }, { $inc : { [req.body.type]: 1 }  })

            // 부모 도큐먼트 업데이트 실패시 롤백
            if(parentResult.modifiedCount == 0) {
                await db.collection('feedback').deleteOne({ _id: feedbackResult.insertedId });
                throw new Error('피드백 개수 업데이트 실패');
            }
            return res.status(200).json({ message : '피드백 완료!' })
        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
}
```
예시로 피드백 생성 로직입니다.<br/>
먼저 피드백을 생성하고, 부모 도큐먼트의 'like' or 'dislike' 필드를 업데이트 합니다.<br/>
이때 부모 도큐먼트 업데이트 실패시, 롤백하는 로직을 추가하여 최대한 데이터 무결성이 유지되도록 하였습니다.<br/>

---

<br/>
</div>
</details>

<details>
<summary><b>소셜 로그인</b></summary>
<div markdown="1">
<br/>
 
로그인 기능을 구현함에 있어서<br>
사용자의 아이디와 비밀번호 같은 개인정보를 직접 DB에 저장하는것은 부담스럽기도하고 위험하다고 생각되었습니다.<br/>
그래서 next-auth 라이브러리를 이용해 소셜 로그인을 구현하였습니다.<br/>
```js
export const authOptions = {
    // 프로바이더
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
    //...

};

export default NextAuth(authOptions); 
```
Provider의 ID와 Secret Key는 env 파일로 관리하고 있습니다.<br/>
현재는 깃허브, 구글을 이용한 로그인이 가능하지만 추후에 더 늘려갈 계획입니다.<br/>
<br/>

```js
export const authOptions = {
    //...

    // jwt형식으로 저장
    session: {
        strategy: 'jwt',
        maxAge: 14 * 24 * 60 * 60 // 14일동안 jwt 저장
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
```
JWT토큰 생성시, 소셜 플랫폼에서 받아온 유저정보를 저장하고, role 프로퍼티를 추가하여<br/>
'일반 사용자'와 '관리자'를 구분하였습니다.<br/>
애플리케이션에서 관리자 권한이 필요한 페이지나, API 요청시 session.role을 확인하여 관리자를 확인하게 됩니다.<br/>

---

<br/>
</div>
</details>

<br>

# 기술스택
### 개발
![Next badge](https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Axios](https://img.shields.io/badge/axios-6236FF?style=for-the-badge&logo=axios&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/redux_toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Sass](https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
### DB & 저장소
![MongoDB badge](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongoDB&logoColor=white)
![Amazon S3](https://img.shields.io/badge/amazons3-232F3E?style=for-the-badge&logo=amazons3&logoColor=white)
### 배포 & 프로젝트 관리
![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)

<br>

# 시행착오 기록

프로젝트를 진행하면서 겪었던 시행착오를 기록 해보았습니다.<br>

**시행착오 링크** : [프로젝트 WIKI](https://github.com/Woohyeok97/Game-Pick/wiki)

<br>
<br>