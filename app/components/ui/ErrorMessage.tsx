import { AlertTriangle } from 'lucide-react'

interface ErrorMessageProps {
  title?: string
  message?: string
}

export function ErrorMessage({
  title = 'Something went wrong',
  message = 'Failed to load data. Please try again later.',
}: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
        <AlertTriangle size={28} className="text-red-400" />
      </div>
      <h3 className="font-display text-xl font-semibold text-ink mb-2">{title}</h3>
      <p className="text-stone max-w-md">{message}</p>
    </div>
  )
}
