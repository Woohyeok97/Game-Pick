import Link from "next/link";

export default function List() {
  return (
    <div>
      <h1>저는 게임리스트 입니다.</h1>
      <ul>
        <li><Link href="/detail/게임1">게임1</Link></li>
        <li><Link href="/detail/게임2">게임2</Link></li>
        <li><Link href="/detail/게임3">게임3</Link></li>
      </ul>
    </div>
  )
}