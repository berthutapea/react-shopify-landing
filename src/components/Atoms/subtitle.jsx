export default function Subtitle({ children, style }) {
  return <p className={`text-primary-100 font-head font-medium ${style}`}>{children}</p>
}