type LogoProps = {
  className?: string;
  alt?: string;
};

export function Logo({ className, alt = "Libra" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt={alt}
      className={className}
      draggable={false}
    />
  );
}
