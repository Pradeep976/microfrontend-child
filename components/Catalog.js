import React from "react";
import Link from "next/link"

const cardStyle = { display: "flex", width: "220px", border: "1px solid gray", flexDirection: "column", alignItems: "center" }

export const Catalog = () => {
    const [list, setList] = React.useState([]);

    const fetchData = async () => {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/albums")
            const data = await response.json();
            console.log(data);
            setList(data);
        }catch (err) {
            console.error(err)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return <div>
        <Link href="/">Go Back</Link>
        <div style={{ display: "flex", width: "750px", gap: "20px", flexWrap: "wrap", marginTop: "25px" }}>
            {list.map(d => {
                return <div key={d.id} style={cardStyle}>
                    <p>{d.userId} {d.title}</p>
                </div>
            })}
        </div>
    </div>
}
export default Catalog;