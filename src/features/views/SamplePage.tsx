const SamplePage = () => {
    // UNCOMMENT isLoading function, etc IF THEY ARE NEEDED IN CONDITIONAL RENDERING/ TRIGGER WHEN THE DOCUMENT MOUNTED
    const handleTrigger = () => {
    }

    return ( 
        <>
            <h1 className="text-3xl text-red-700">Sample Page</h1>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
            <button className="border bg-red-500 text-white" onClick={handleTrigger}>Trigger Request</button>
        </>
    );
}
 
export default SamplePage;