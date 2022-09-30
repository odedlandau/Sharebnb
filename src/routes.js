import { HomePage } from './views/home-page.jsx'
import { StayDetails } from './views/stay-details.jsx'
import { StayEdit } from './views/stay-edit.jsx'

const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home',
    },
    {
        path: 'stay/:stayId',
        component: <StayDetails />,
        label: 'Details',
    },
    {
        path: 'stay/edit',
        component: <StayEdit />,
        label: 'Add',
    },
    {
        path: 'stay/edit/:stayId',
        component: <StayEdit />,
        label: 'Edit',
    },

]

export default routes