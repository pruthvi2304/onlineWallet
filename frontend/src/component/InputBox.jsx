export function InputBox({id, name, type, placeholder, onChange}) {
    return  <div>
    <label htmlFor={name} className="sr-only">
      {placeholder}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      required
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
}