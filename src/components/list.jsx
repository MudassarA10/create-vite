import React from "react";


const List = () => {
    return (
        <React.Fragment>
            <div className=" bg-blue-200 p-4">
                <h4 className="text-1xl font-bold dark:text-black m-2 ml-20">People that Joining you!</h4>
                <ol className="list-decimal list-inside">
                    <li className="mb-2 ml-20">Ali Cheema</li>
                    <li className="mb-2 ml-20">Ali Yaqoob</li>
                    <li className="mb-2 ml-20">Gulam Wattu</li>
                    {/* Add more items as needed */}
                </ol>

            </div>
        </React.Fragment>
    );
}

export default List;