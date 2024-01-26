'use client'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

type Props = SelectPrimitive.SelectProps & {
  children: ReactNode
  placeholder: string
}

export const Select = ({ children, placeholder, ...rest }: Props) => {
  return (
    <SelectPrimitive.Root {...rest}>
      <SelectPrimitive.Trigger className="flex h-11 items-center justify-between gap-2 rounded-lg border border-zinc-200 px-3.5 py-2.5 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          className="text-black"
          placeholder={placeholder}
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="border-200 animate-slideFadeUpDown z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Group>{children}</SelectPrimitive.Group>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
