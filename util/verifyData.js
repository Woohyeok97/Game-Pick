// 컨텐츠 유효성 검사
export default function verifyContent(data) {
    for(let i in data) {
        if(i == 'like' || i == 'unlike') continue
        if(!data[i]) return false
    }
    return true
}