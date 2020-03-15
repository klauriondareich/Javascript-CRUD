import Home from '../components/Home'
import AddSpend from '../components/AddSpend'
import EditSmoothie from '../components/EditSmoothie'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/add',
        name: 'addSpend',
        component: AddSpend
    },
    {
        path: '/edit/:slug',
        name: 'editsmoothie',
        component: EditSmoothie
    }
]
export default routes