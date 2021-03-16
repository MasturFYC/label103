import Link from 'next/link'
import {iGroup} from './interfaces'

export type TGroupParam = {
  group: iGroup,
  index: number
}

export default function Group({group, index}: TGroupParam) {
  return (
    <li>
      
      <Link href="/group/[id]" as={`/group/${group.group_id}`}>
        <a>{group.name}</a>
      </Link>
    </li>
  )
}