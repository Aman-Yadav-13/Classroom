const Error = () => {
    return (
        <div>
            {/* Main section that centers the content both vertically and horizontally */}
            <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                {/* Container to hold the content */}
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    {/* Text container with maximum width for the error message */}
                    <div className="max-w-md text-center">
                        {/* Large error code displayed */}
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        {/* Message informing the user that the page could not be found */}
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                        {/* Additional text to comfort the user */}
                        <p className="mt-4 mb-8 dark:text-gray-600">But don't worry, you can find plenty of other things on our homepage.</p>
                        {/* Link to navigate back to the homepage */}
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Error;
