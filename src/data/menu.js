import { IoGitBranchOutline } from 'react-icons/io5'
import { FaGlobe, FaDatabase, FaEnvelope } from 'react-icons/fa'

export const menu = [
    {
        id: 1,
        route: '/',
        text: 'Main Chyron',
        icon: <FaGlobe />
    },
    {
        id: 2,
        route: '/lower',
        text: 'Lower Third',
        icon: <IoGitBranchOutline />
    },
    {
        id: 3,
        route: '/clima',
        text: 'Info. Clima',
        icon: <FaEnvelope />
    },
    {
        id: 4,
        route: '/peixe',
        text: 'Peixes Pegos',
        icon: <FaDatabase />
    }
]