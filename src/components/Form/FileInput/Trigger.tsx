'use client'
import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export const Trigger = () => {
  const { id } = useFileInput()
  return (
    <label
      htmlFor={id}
      className="group flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-zinc-200 px-6 py-4 shadow-sm hover:cursor-pointer hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-6 border-zinc-50 bg-zinc-100 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>
      <div className="flex flex-col items-center justify-center gap-px">
        <span className="text-sm text-zinc-500 group-hover:text-violet-500">
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          or drag and drop
        </span>
        <span className="text-xs text-zinc-500 group-hover:text-violet-500">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </span>
      </div>
    </label>
  )
}
