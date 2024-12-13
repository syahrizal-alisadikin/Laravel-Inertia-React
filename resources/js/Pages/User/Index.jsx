//import React
import React from "react";
import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
import { Head, Link, usePage } from "@inertiajs/react";

export default function UserIndex({ users, filters }) {
    const {
        data: formData,
        get,
        setData,
    } = useForm({
        search: filters.search || "",
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route("user.index"), {
            preserveState: true,
            preserveScroll: true,
        });
    };
    console.log(session);
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    User
                </h2>
            }
        >
            <Head title="Dashboard" />
            {/* <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                {session?.success && (
                    <div className="bg-green-500 shadow-sm sm:rounded-lg px-4 py-4 text-white">
                        {session.success}
                    </div>
                )}
            </div> */}
            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* cari */}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg px-4 py-4">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                value={formData.search}
                                onChange={(e) =>
                                    setData("search", e.target.value)
                                }
                                placeholder="Cari..."
                                className="form-control rounded-md "
                            />

                            <button
                                type="submit"
                                className="bg-indigo-700 text-white px-4 py-2 border border-indigo-600 rounded-md mx-2"
                            >
                                Cari
                            </button>
                            <Link
                                className={
                                    "bg-green-600 text-white px-4 py-3 border border-green-600 rounded-md"
                                }
                                href={route("user.create")}
                            >
                                Create User
                            </Link>
                        </form>
                        <div className="p-6 text-gray-900">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b-2">
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">
                                            No
                                        </th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">
                                            Nama
                                        </th>
                                        <th className="px-6 py-3 text-left text-lg font-medium text-black">
                                            Email
                                        </th>
                                        {/* <th className="px-6 py-3 text-left text-lg font-medium text-black">
                                            Role
                                        </th> */}
                                        {/* <th className="px-6 py-3 text-left text-lg font-medium text-black">
                                            Aksi
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.data.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-lg text-gray-900">
                                                        {index + 1}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-lg text-gray-900">
                                                        {user.name}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-lg text-gray-900">
                                                        {user.email}
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    {/* {users.map((user, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-lg text-gray-900">
                                                    {index + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-lg text-gray-900">
                                                    {user.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-lg text-gray-900">
                                                    {user.email}
                                                </div>
                                            </td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </table>
                            <Pagination links={users.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
