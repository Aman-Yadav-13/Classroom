import Selection from './Selection' // Importing the Selection component

const Identification = () => {
    return (
        <div>
            {/* Main container for the hero section */}
            <div className="hero bg-base-200 min-h-screen">
                {/* Centering the content within the hero section */}
                <div className="hero-content text-center">
                    {/* Limiting the maximum width for the content */}
                    <div className="max-w-md">
                        {/* Greeting message as a large header */}
                        <h1 className="text-5xl font-bold">"Greetings!"</h1>
                        {/* Subheading with a welcome message */}
                        <p className="py-6">Welcome to the Classroom – Your Gateway to Knowledge and Growth</p>
                        {/* Button that will render the Selection component */}
                        <button className="btn btn-primary"><Selection /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Identification;
