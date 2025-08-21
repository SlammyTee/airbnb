import ConversationDetail from "@/app/components/inbox-c/ConversationDetail"


const ConversationPage = () => {

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">

            <h1 className="my-6 text-2xl">Conversations</h1>
            <ConversationDetail/>
            
        </main>
    )
}

export default ConversationPage