import Link from "next/link";

export default function Admin() {
    return (
        <div>
            <h1>저는 관리자 페이지 입니다.</h1>
            <h3>엄.근.진</h3>
            <Link href="/admin/contentUpload">컨텐츠 업로드</Link>
        </div>
    )
}