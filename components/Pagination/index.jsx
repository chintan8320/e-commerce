import React from 'react';
import { PaginationLeftArrow, PaginationRightArrow } from "@utilis/paginations";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const activePageClass = (page) => {
        return currentPage === page
            ? 'w-[40px] h-[40px] rounded bg-[#facc15]'
            : 'w-[40px] h-[40px] rounded bg-[#F0F0F0]';
    };

    const renderPageNumbers = () => {
        if (totalPages <= 2) {
            return Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button key={page} className={`${activePageClass(page)} m-[10px]`} onClick={() => onPageChange(page)}>
                    {page}
                </button>
            ));
        } else {
            return (
                <>
                    {currentPage > 2 && (
                        <button onClick={() => onPageChange(currentPage - 1)} className='w-[40px] h-[40px] m-[10px] rounded bg-[#F0F0F0] flex items-center justify-center'>
                            <PaginationLeftArrow />
                        </button>
                    )}
                    {currentPage <= 2 && (
                        <>
                            <button className={`${activePageClass(1)} m-[10px]`} onClick={() => onPageChange(1)}>1</button>
                            <button className={`${activePageClass(2)} m-[10px]`} onClick={() => onPageChange(2)}>2</button>
                            {totalPages > 2 && (
                                <button onClick={() => onPageChange(currentPage + 1)} className='w-[40px] h-[40px] m-[10px] rounded bg-[#F0F0F0] flex items-center justify-center'>
                                    <PaginationRightArrow />
                                </button>
                            )}
                        </>
                    )}
                    {currentPage > 2 && currentPage < totalPages && (
                        <>
                            <button className={`${activePageClass(currentPage)} m-[10px]`} onClick={() => onPageChange(currentPage)}>
                                {currentPage}
                            </button>
                            <button onClick={() => onPageChange(currentPage + 1)} className='w-[40px] h-[40px] m-[10px] rounded bg-[#F0F0F0] flex items-center justify-center'>
                                <PaginationRightArrow />
                            </button>
                        </>
                    )}
                    {currentPage === totalPages && (
                        <>
                            <button className='w-[40px] h-[40px] m-[10px] rounded bg-[#F0F0F0] flex items-center justify-center' onClick={() => onPageChange(currentPage)}>
                                {currentPage - 1}
                            </button>
                            <button onClick={() => onPageChange(1)} className={`${activePageClass(currentPage)} m-[10px] `}>
                                {currentPage}
                            </button>
                        </>
                    )}
                </>
            );
        }
    };

    return (
        <div className="flex justify-center items-center mt-4">
            {currentPage > 1 && (
                <button onClick={() => onPageChange(currentPage - 1)} />
            )}
            {renderPageNumbers()}
            {currentPage < totalPages && (
                <button onClick={() => onPageChange(currentPage + 1)} />
            )}
        </div>
    );
}

export default Pagination;
