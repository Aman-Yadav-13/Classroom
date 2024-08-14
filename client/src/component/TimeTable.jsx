import Lecture from "./Lecture";

const TimeTable = () => {
    return (
        <>
        <div className="space-y-2 text-center mt-11">
			<h2 className="text-3xl font-bold">Time Table</h2>
		</div>
        <div className="flex flex-wrap justify-center">
            <Lecture />
            <Lecture />
            <Lecture />
            <Lecture />
            <Lecture />
            <Lecture />
            <Lecture />
            <Lecture />
            <Lecture />
        </div>
        </>
    )
}

export default TimeTable;