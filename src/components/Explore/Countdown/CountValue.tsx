interface ICountValueProps {
  children: string,
  label: string
}

export default function CountValue({ children, label }: ICountValueProps) {
  return (
    <div className={`border-2 border-solid border-lightGrey rounded-lg pb-4 bg-gradient-to-r from-cyan-500 to-blue-500`}>
      <div className={`border-b-2 border-solid border-lightGrey rounded-lg pb-4 bg-gradient-to-r from-sky-500 to-indigo-500`}>
        <li className="border-b-2 border-solid border-lightGrey rounded-lg flex flex-col items-center py-16 bg-black pb-16">
          <span className="text-9xl">{children}</span>
          <span className="text-xl">{label}</span>
        </li>
      </div>
    </div>
  )
}
