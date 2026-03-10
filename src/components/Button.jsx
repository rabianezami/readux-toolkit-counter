export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) {

  const base =
    "px-4 py-2 rounded-xl font-semibold border transition transform active:scale-95"

  const variants = {
    primary:
      "bg-white/10 text-white border-white/20 hover:bg-white/20",
    ghost:
      "bg-transparent text-white border-white/20 hover:bg-white/10",
  }

  const disabledStyle = disabled
    ? "opacity-60 cursor-not-allowed"
    : "cursor-pointer"

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${disabledStyle}`}
    >
      {children}
    </button>
  )
}