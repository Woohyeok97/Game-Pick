
export default function useSortData() {

    const sortByDate = (setState) => {
        setState(prev => {
            const sorted = [...prev].sort((a, b) =>  new Date(a.commentDate) - new Date(b.commentDate) )
            return sorted
        })
    }

    const sortByFeedback = (setState) => {
        setState(prev => {
            const sorted = [...prev].sort((a, b) =>  b.like - a.like )
            return sorted
        })
    }

    return { sortByDate, sortByFeedback }
}