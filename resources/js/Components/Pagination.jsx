import { Link } from "@inertiajs/react";

export default function Checkbox({ links }) {
    return (
        <div className="flex space-x-1">
            {links.map((link, index) => (
                <Link
                    key={index}
                    className={
                        link.active
                            ? "bg-indigo-700 text-white px-4 py-2 border border-indigo-600 rounded-md"
                            : "text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 border rounded-md"
                    }
                    href={link.url === null ? "#" : link.url}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </div>
    );
}
