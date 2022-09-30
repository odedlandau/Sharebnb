import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StayFilter } from '../cmps/stay/filter'
import { StayList } from '../cmps/stay/stay-list'
import { loadStays, removeStay, setFilterBy, sortByStays } from '../store/stay.action'

export const HomePage = () => {
    const stays = useSelector((state) => state.stayModule.stays)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadStays())
    }, [])

    const onRemoveStay = (stayId) => {
        dispatch(removeStay(stayId))
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadStays())
    }

    const onChangeSort = (sortBy) => {
        dispatch(sortByStays(sortBy))
    }

    if (!stays) return <h1>Loading...</h1>
    return (
        <section className="home-page">
            <div className="viewport"></div>
            {/* <StayFilter onChangeFilter={onChangeFilter} /> */}
            <StayList stays={stays} />
        </section>
    )
}