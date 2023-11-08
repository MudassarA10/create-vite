import React from "react";
const Form = () => {
    return (
        <React.Fragment>
            <div className=" bg-blue-200 p-4 ">
                <form className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-bold mb-4">My Form</h2>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                        <input type="text" id="username" className="w-full p-2 border rounded" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" className="w-full p-2 border rounded" required />
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Submit</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}
export default Form;