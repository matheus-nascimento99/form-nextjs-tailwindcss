import { Logo } from './Logo'
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  LifeBuoy,
  LogOut,
  Search,
  Settings,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import * as Input from '@/components/Input'
export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Settings} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px border border-zinc-200"></div>

        <div className="flex flex-1 gap-3">
          <img
            src="https://github.com/matheus-nascimento99.png"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col truncate">
            <span className="text-sm font-semibold text-zinc-700">
              Matheus Nascimento
            </span>
            <span className="truncate text-sm text-zinc-500">
              mnsergio59@gmail.com
            </span>
          </div>
          <button
            type="button"
            className="mb-auto ml-auto rounded-lg p-2 hover:bg-zinc-50"
          >
            <LogOut className="h-5 w-5 text-zinc-500" />
          </button>
        </div>
      </div>
    </aside>
  )
}
