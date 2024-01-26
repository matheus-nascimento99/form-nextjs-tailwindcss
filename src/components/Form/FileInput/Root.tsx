'use client'
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type Props = ComponentProps<'div'>

type FileInputContextProps = {
  id: string
  files: File[]
  onFileSelect: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export const Root = ({ ...rest }: Props) => {
  const [files, setFiles] = useState<File[]>([])

  const id = useId()

  const onFileSelect = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((oldValues) => [...oldValues, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFileSelect }}>
      <div {...rest} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
