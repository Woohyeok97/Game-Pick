export default function formatDate(isoString) {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');  // 월은 0부터 시작하므로 +1 필요
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}년 ${month}월 ${day}일`;
}