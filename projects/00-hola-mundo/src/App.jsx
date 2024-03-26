import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'
export function App () {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard initialIsFollowing formatUserName={formatUserName}  userName="soyaldobeltran">
                Aldo Beltrán
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} userName="midudev">
                Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} userName="charliesbot">
                Charlie L
            </TwitterFollowCard>
        </ section>
    )

}