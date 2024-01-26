'use client'
import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type Props = Select.SelectItemProps & {
  text: string
}

export const SelectItem = ({ text, ...rest }: Props) => {
  return (
    <Select.SelectItem
      className="flex items-center justify-between bg-white px-3.5 py-2.5 data-[highlighted]:bg-zinc-100 data-[highlighted]:outline-none"
      {...rest}
    >
      <Select.ItemText>{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-zinc-500" />
      </Select.ItemIndicator>
    </Select.SelectItem>
  )
}
