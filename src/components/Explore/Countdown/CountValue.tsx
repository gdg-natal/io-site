interface ICountValueProps {
  children: string,
  label: string
}

export default function CountValue({ children, label }: ICountValueProps) {
  return (
    <li className="border-2 border-solid border-lightGrey rounded-lg flex flex-col items-center py-16">
      <span className="text-9xl">{children}</span>
      <span className="text-xl">{label}</span>
    </li>
  )
}
