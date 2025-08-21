import Conversation from "../components/inbox-c/Conversation"
const InBoxPage = () => {

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">

            <h1 className="my-6 text-2xl">Inbox</h1>

            <Conversation/>
            <Conversation/>
            <Conversation/>

            
        </main>
    )
}

export default InBoxPage