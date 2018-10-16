import * as React from 'react';
import './pagination.css';

interface IPagination {
    store: {
        plusToPageIndex(): void,
        minusToPageIndex(): void,
    },
    pageable: {
        pageIndex: number,
        isLoading: boolean,
        isPrev: boolean,
        isPageable: boolean,
        isNext: boolean,
    }
    onChange?(): void
}

class PaginationComponent extends React.Component<IPagination, any> {
    public render() {
        const {pageable} = this.props;

        return (
            pageable.isPageable ?
                <div className='pagination__container'>
                    {pageable.isPrev ?
                        <button disabled={pageable.isLoading} onClick={this.turnPagePrev} className='pagination__btn'>Prev</button> : null}
                    <div className='pagination__value'>{pageable.pageIndex}</div>
                    {pageable.isNext ?
                        <button disabled={pageable.isLoading} onClick={this.turnPageNext} className='pagination__btn'>Next</button> : null}
                </div> : null
        );
    }

    private turnPageNext = () => {
        this.props.store.plusToPageIndex();
        this.onChange();
    };

    private turnPagePrev = () => {
        this.props.store.minusToPageIndex();
        this.onChange();
    };

    private onChange() {
        if (this.props.onChange) {
            this.props.onChange();
        }
    }
}

export default PaginationComponent;