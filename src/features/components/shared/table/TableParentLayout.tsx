type Props = {
    filter?: React.ReactNode;
    table: React.ReactNode;
    options?: React.ReactNode;
}

const TableParentLayout = ({ filter, table, options } : Props) => {
    return ( 
        <>
        <div className="w-full flex gap-4">
            <div className="flex flex-col w-full">
                { filter }
                { table }
            </div>
            { options }
        </div>
        </>
     );
}
 
export default TableParentLayout;