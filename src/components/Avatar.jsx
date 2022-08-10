
export default function Avatar({src, alt, size='sm'}) {
  return (
    <div className="user-avatar">
        <img className={`rounded-circle ${size}`} src={src} alt={alt} />
    </div>
  )
}
