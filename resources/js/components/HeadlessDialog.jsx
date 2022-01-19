import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Button from "./Button";
import InputFeild from "./InputFeild";

export default function HeadlessuiModal(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: null,
    });
    function handelSubmit() {
        post("/influencer/create", {
            preserveScroll: true,
            onSuccess() {
                closeDialog();
            },
        });
    }
    function closeDialog() {
        reset("name", null);
        props.setIsOpen(false);
    }
    return (
        <Transition appear show={props.isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="absolute inset-0 z-10 overflow-y-auto"
                onClose={closeDialog}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                    </Transition.Child>
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white border shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                Add one to the top 5 influencers.
                            </Dialog.Title>

                            <div className="mt-4 flex items-center justify-around">
                                <div className="rounded-full h-28 w-28 overflow-hidden shadow-md ring ring-d-yellow">
                                    <img
                                        src="/assets/avatar101.jpg"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <InputFeild
                                        type="text"
                                        className="!py-2"
                                        placeholder="new Influencer Name"
                                        value={data.name}
                                        handelChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <Button
                                    text="Save"
                                    processing={processing}
                                    className="w-full"
                                    onClick={handelSubmit}
                                />
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}
