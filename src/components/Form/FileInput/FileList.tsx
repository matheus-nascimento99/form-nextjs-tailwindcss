'use client'
import { Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const FileList = () => {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()
  return (
    <div className="mt-4 flex flex-col gap-3" ref={parent}>
      {files.map((file) => (
        <div
          key={file.name}
          className="group flex items-start gap-3 rounded-lg border border-zinc-200 p-4"
        >
          <div className="relative -left-0.5 -top-0.5 flex h-8 w-8 items-center justify-center rounded-full border-4 border-violet-50 bg-violet-100">
            <UploadCloud className="h-4 w-4 text-violet-600" />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-3">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700">
                {file.name}
              </span>
              <span className="text-sm text-zinc-500">{file.size}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-zinc-100">
                <div className="h-2 w-4/5 rounded-full bg-violet-600"></div>
              </div>

              <span>80%</span>
            </div>
          </div>
          <button
            type="button"
            className="mb-auto ml-auto rounded-lg p-2 hover:bg-zinc-50"
          >
            <Trash2 className="h-5 w-5 text-zinc-500" />
          </button>
        </div>
      ))}
    </div>
  )
}
