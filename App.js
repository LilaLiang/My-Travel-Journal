import React from "react"
import Journal from "./Journal"
import Header from "./Header"
import journalData from "./journalData"

export default function App() {
    const journalElements = journalData.map(journal => {
        return (
            <Journal
                key={journal.id}
                {...journal}
            />
        )
    })

    return (
        <div>
            <Header />
            {journalElements}
        </div>
    )

}