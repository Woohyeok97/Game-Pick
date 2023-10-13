'use client'
import { CSSTransition } from 'react-transition-group';
import useCarousel from '@/hook/UI/useCarousel';


export default function Carousel({ children, currentIndex, itemList }) {
    const { carouselIndex } = useCarousel({ itemList : itemList, time :  3000 })

    return (
        <CSSTransition in={ carouselIndex == currentIndex } timeout={2000} classNames="slide" unmountOnExit>
            { children }
        </CSSTransition>
    )
}


// children으로 함수를 전달하는 버전..'use server'가 필요할듯..

// export default function Carousel({ children, itemList }) {
//     const { caroselIndex } = useCarousel({ itemList : itemList, time :  3000 })

//     return itemList.map((item, i) => (
//         <CSSTransition in={ caroselIndex == i } timeout={2000} classNames="slide" unmountOnExit>
//             { children(item) }
//         </CSSTransition>
//     ))
// }