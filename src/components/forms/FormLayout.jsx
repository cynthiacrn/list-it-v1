export default function FormLayout({ title, subtitle, children }) {

  return (
    <div className="flex flex-col items-center gap-10 justify-center">
      <div className="flex flex-col items-center">
        {title && (<h1 className="text-7xl font-medium">Add Wish</h1>)}
        {subtitle && (<p>Enter the product information you want</p>)}
      </div>
      {children}
    </div>
  );
}
