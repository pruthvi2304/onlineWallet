import { LockClosedIcon } from '@heroicons/react/solid';

export function Heading({label}) {
    return <div>
        <LockClosedIcon className="mx-auto h-12 w-auto text-indigo-600" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {label}
        </h2>
    </div>
}