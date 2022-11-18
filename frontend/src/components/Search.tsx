
import {ChangeEvent} from "react";
type SearchProps = {
    // myCallBackFunction: (searchText: string) => void
    myCallBackFunction(searchText: string): void
}

export default function Search(props: SearchProps) {

    const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("Test search")
        props.myCallBackFunction(event.target.value)
    }

    return (

        <input onChange={onSearchTextChange}/>
    )
}