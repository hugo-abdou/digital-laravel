import React from "react";

export default function UserInfo() {
    return (
        <div>
            <div className="flex space-x-3">
                <div className="flex-shrink-0">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                        <a href="#" className="hover:underline">
                            Chelsea Hagon
                        </a>
                    </p>
                    <p className="text-sm text-gray-500">
                        <a href="#" className="hover:underline">
                            December 9 at 11:43 AM
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
