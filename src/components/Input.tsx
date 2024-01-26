import { ComponentProps } from 'react'

type InputRootProps = ComponentProps<'div'>

export const Root = ({ ...rest }: InputRootProps) => {
  return (
    <div
      className="ml-px flex w-full items-center gap-2 rounded-lg border border-zinc-200 px-3.5 py-2.5 shadow-sm"
      {...rest}
    ></div>
  )
}

type InputPrefixProps = ComponentProps<'div'>

export const Prefix = ({ ...rest }: InputPrefixProps) => {
  return <div {...rest}></div>
}

type InputControlProps = ComponentProps<'input'>

export const Control = ({ ...rest }: InputControlProps) => {
  return (
    <input
      className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...rest}
    />
  )
}
