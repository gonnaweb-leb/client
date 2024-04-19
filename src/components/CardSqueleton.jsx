import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSqueleton = ({ col_md_size, count }) => {
    const loadCards = Array(count).fill(0);
    return (
        loadCards.map((item, i) => (
            <div className={col_md_size} key={i}>
                <div className="card mb-3 product-wap rounded-0 cart_item">
                    <div className="card rounded-0 card_img">
                        <Skeleton />
                    </div>
                    <div className="card-body">
                        <ul className="w-100 list-unstyled justify-content-between mb-0">
                            <li className="text-dark h5">
                                <Skeleton />
                            </li>
                            <li className="text-muted h6">
                                <Skeleton />
                            </li>
                            <li className="h6 text-muted">
                                <Skeleton />
                            </li>
                        </ul>
                        <div className="text-center price text-danger mt-2">
                            <Skeleton />
                        </div>
                    </div>
                </div>
            </div>
        )
        )
    )
}

export default CardSqueleton