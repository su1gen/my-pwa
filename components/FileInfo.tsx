export default function FileInfo({ fileName }: { fileName: string }) {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl mb-2">Полученный файл:</h2>
      <p className="break-all">{fileName}</p>
    </div>
  )
}