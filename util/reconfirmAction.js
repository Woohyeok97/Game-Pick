// 리컨펌 유틸함수
export default function reconfirmAction(message) {
    return confirm(message) ? true : false
}