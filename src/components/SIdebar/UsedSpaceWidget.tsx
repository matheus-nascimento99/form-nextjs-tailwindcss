export const UsedSpaceWidget = () => {
  return (
    <div className="w-full space-y-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-0.5">
        <p className="text-sm/5 font-medium text-violet-700">Used space</p>
        <p className="text-sm/5 text-violet-500">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>
      <div className="h-2 w-full rounded-lg bg-violet-100">
        <div className="h-2 w-4/5 rounded-lg bg-violet-600"></div>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="text-sm/5 font-semibold text-violet-500 hover:text-violet-700"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm/5 font-semibold text-violet-700 hover:text-violet-900"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
