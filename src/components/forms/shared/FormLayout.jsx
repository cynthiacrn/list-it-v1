export default function FormLayout({ title, subtitle, children }) {

  return (
    <div className="flex flex-col items-center gap-10 justify-center">
      <div className="flex flex-col items-center">
        {title && (<h1 className="text-7xl font-medium">{title}</h1>)}
        {subtitle && (<p>{subtitle}</p>)}
      </div>
      {children}
    </div>
  );
}
