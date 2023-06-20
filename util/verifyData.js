// 컨텐츠 유효성 검사
export default function verifyContent(data) {
    // data가 빈객체 일경우 false 반환
    if(Object.keys(data).length == 0) return false

    for(let i in data) {
        if(i == 'like' || i == 'unlike') continue
        if(!data[i]) return false
    }
    return true
}