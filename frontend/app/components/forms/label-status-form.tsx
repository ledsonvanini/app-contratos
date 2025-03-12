
type TopFormProp = {
    status?: string
    currentYear?: string
}


function LabelStatusForm({ status, currentYear }: TopFormProp) {
    return (
        <div className="bg-gray-300 flex w-full items-center justify-between py-2 px-6 text-2xl font-semibold">
            <p>{status}</p>
            <p  className="px-10">
                {currentYear}
            </p>
        </div>
    )
}

export default LabelStatusForm