'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

type Props = ComponentProps<'input'>

export const Control = ({ multiple = false, ...rest }: Props) => {
  const { id, onFileSelect } = useFileInput()

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)
    onFileSelect(files, multiple)
  }

  return (
    <input
      type="file"
      id={id}
      multiple={multiple}
      className="sr-only"
      onChange={handleFileInputChange}
      {...rest}
    />
  )
}
