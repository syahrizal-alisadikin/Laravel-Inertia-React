//import React
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";

export default function UserIndex({ className = "max-w-xl" }) {
    const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("user.store"), {
            preserveScroll: true,
            onSuccess: () => {
                alert("user created");
            },
            onError: () => {
                alert("error");
            },
        });
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    User Create
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* cari */}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg px-4 py-4">
                        <div className="p-6 text-gray-900">
                            <section className={className}>
                                {/* <header>
                                    <h2 className="text-lg font-medium text-gray-900">
                                        Profile Information
                                    </h2>


                                </header> */}

                                <form
                                    onSubmit={submit}
                                    className="mt-6 space-y-6"
                                >
                                    <div>
                                        <InputLabel
                                            htmlFor="name"
                                            value="Name"
                                        />

                                        <TextInput
                                            id="name"
                                            className="mt-1 block w-full"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            required
                                            isFocused
                                            autoComplete="name"
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.name}
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="email"
                                            value="Email"
                                        />

                                        <TextInput
                                            id="email"
                                            type="email"
                                            className="mt-1 block w-full"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            required
                                            autoComplete="username"
                                        />

                                        <InputError
                                            className="mt-2"
                                            message={errors.email}
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            htmlFor="password"
                                            value=" Password"
                                        />

                                        <TextInput
                                            id="password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            type="password"
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                        />

                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="password_confirmation"
                                            value="Confirm Password"
                                        />

                                        <TextInput
                                            id="password_confirmation"
                                            value={data.password_confirmation}
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value
                                                )
                                            }
                                            type="password"
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                        />

                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <PrimaryButton disabled={processing}>
                                            Simpan
                                        </PrimaryButton>

                                        <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-gray-600">
                                                Berhasil disimpan.
                                            </p>
                                        </Transition>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
