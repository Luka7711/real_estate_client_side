import { current } from "@reduxjs/toolkit";
import classnames from "classnames";
import { usePagination, DOTS } from "../../hooks/usePagination"
import uuid from "react-uuid";
import './Pagination.scss'

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1)
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1)
    }

    let lastPage = paginationRange[paginationRange.length - 1];
    
    let paginationRangeList = paginationRange.map(pageNumber => {
    
        if (pageNumber === DOTS) return <li>&#8230;</li>

        return (
            <li 
                key={uuid()}
                className={ classnames('pagination-item dots', {
                    selected: pageNumber === currentPage
                })} 
                onClick={() => onPageChange(pageNumber)}>
                { pageNumber }
            </li>
        )
    });

    return (
        <ul className={classnames("pagination-container", { [className]: className})}>
            <li 
                key={uuid()}
                className={classnames('pagination-item', { disabled: currentPage === 1 }) }  
                onClick={onPrevious}
            >
                <div className="arrow left"/>
            </li>

            { paginationRangeList }

            <li 
                className={classnames('pagination-item', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
                key={uuid()}
                >
                <div className="arrow right"/>
            </li>
        </ul>
    )
}

export default Pagination;