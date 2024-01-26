import { ComponentProps } from 'react'

type Props = ComponentProps<'textarea'>

export const TextArea = ({ ...rest }: Props) => {
  return (
    <textarea
      className="h-[128px] w-full rounded-lg border border-zinc-200 px-3.5 py-2.5 shadow-sm"
      {...rest}
    />
  )
}
