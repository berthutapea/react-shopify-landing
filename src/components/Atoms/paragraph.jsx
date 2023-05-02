export default function Paragraph({ children, fontSize, color, style}) {
  return <p className={`font-body ${color ? color : "text-black-300"} ${fontSize} ${style}`}>{children}</p>
}