import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

type Props = {
  title: string
  icon: ElementType
}

export const NavItem = ({ title, icon: Icon }: Props) => {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded-md px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-violet-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-700">
        {title}
      </span>
      <ChevronDown className="ml-auto text-zinc-400 group-hover:text-violet-400" />
    </a>
  )
}
