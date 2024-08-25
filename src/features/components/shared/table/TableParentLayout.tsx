import React, { useState } from "react";
import { Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type Props = {
    filter?: React.ReactNode;
    table: React.ReactNode;
    options?: React.ReactNode;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
    onItemsPerPageChange: (itemsPerPage: number) => void;
};

const TableParentLayout = ({ filter, table, options, totalItems, itemsPerPage, onPageChange, onItemsPerPageChange }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            onPageChange(newPage);
        }
    };

    const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
        const newItemsPerPage = Number(event.target.value);
        onItemsPerPageChange(newItemsPerPage);
        setCurrentPage(1);
    };

    return (
        <>
            <div className="w-full flex gap-4">
                <div className="flex flex-col w-full">
                    {filter}
                    {table}
                    <div className="flex justify-between items-center mt-4">
                        <Select
                            value={itemsPerPage}
                            sx={{
                                color: "#3AA0AC"
                            }}
                            onChange={handleItemsPerPageChange}
                            size="small"
                            variant="outlined"
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                        </Select>
                        <Button 
                            variant="contained" 
                            sx={{
                                backgroundColor: "#3AA0AC",
                                "&:hover": {
                                    bgcolor: "#fff",
                                    border: "2px solid #3AA0AC",
                                    color: "#3AA0AC"
                                }
                            }}
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Previous
                        </Button>
                        <span className="text-[#3AA0AC]">{`Page ${currentPage} of ${totalPages}`}</span>
                        <Button 
                            variant="contained" 
                            sx={{
                                backgroundColor: "#3AA0AC",
                                "&:hover": {
                                    bgcolor: "#fff",
                                    border: "2px solid #3AA0AC",
                                    color: "#3AA0AC"
                                }
                            }}
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </Button>
                    </div>
                </div>
                {options}
            </div>
        </>
    );
};

export default TableParentLayout;
