import aws from 'aws-sdk'
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    
    if(req.method == 'GET') {
        if(!session || session.user.role != 'admin') return res.status(400).json({ message : '관리자 권한이 없습니다.' })

        try {
            aws.config.update({
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_SECRET_KEY,
                region: 'ap-northeast-2',
                signatureVersion: 'v4',
            })
          
            const s3 = new aws.S3();
            const presignedURL = await s3.createPresignedPost({
            Bucket: process.env.S3_BUCKET_NAME,
            Fields: { key : req.query.id },
            Expires: 300, // presignedURL 유효시간(초)
            Conditions: [
                    ['content-length-range', 0, 1048576], //파일용량 1MB 까지 제한
                ],
            })
          
            return res.status(200).json(presignedURL)
            
        } catch(err) {
            console.log(err)
            return res.status(500).json({ message : '서버에러 발생' })
        }
    }
}

