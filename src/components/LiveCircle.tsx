export default function LiveCircle({ live }) {

  if (!live) return <div className="w-6 h-6 bg-black rounded-full absolute top-[10px]" />

  return (
    <span className="live-icon" />
  )
}
