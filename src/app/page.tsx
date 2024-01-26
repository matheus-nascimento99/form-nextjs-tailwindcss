import { SettingsTabs } from '@/components/Settings'
import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/Textarea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-b-zinc-200 pb-5">
          <div className="flex flex-col gap-0.5">
            <span className="text-lg font-medium text-zinc-900">
              Personal info
            </span>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="firstName"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Matheus" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Nascimento" />
              </Input.Root>
            </div>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="emailAddress"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="emailAddress"
                defaultValue="mnsergio59@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="photo"
            >
              Your photo
              <span className="block text-sm text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
            <div />
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="role">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Product Designer" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="country"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brasil" />
              <SelectItem value="us" text="United State" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="timezone"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc-8"
                text="Pacific Standard Time (PST) UTC-08:00"
              />
              <SelectItem
                value="utc-3"
                text="América São Paulo Standard Time (PST) UTC-03:00"
              />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label className="text-sm font-medium text-zinc-700" htmlFor="bio">
              Bio
              <span className="block text-sm text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal text" />
                  <SelectItem value="bold" text="Bold text" />
                  <SelectItem value="italic" text="Italic text" />
                </Select>

                <div className="flex gap-1">
                  <button
                    type="button"
                    className="rounded-lg p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-lg p-2 hover:bg-zinc-50"
                  >
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-lg p-2 hover:bg-zinc-50"
                  >
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-lg p-2 hover:bg-zinc-50"
                  >
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className="rounded-lg p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <TextArea
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                id="bio"
              />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              className="text-sm font-medium text-zinc-700"
              htmlFor="projects"
            >
              Portfolio projects
              <span className="block text-sm text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex justify-end gap-3 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
