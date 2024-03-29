import React from "react"
import { Link, useSearchParams, useLocation } from "react-router-dom"
import { getVans } from "../api"

export default function Vans () {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    const [loading, setLoading]= React.useState(false)
    const [error, setError]= React.useState(null)

    const location= useLocation()
    console.log(location)    

    const typeFilter= searchParams.get("type")
    React.useEffect(() => {
        // fetch("/api/vans")
        // .then(res => res.json())
        // .then(data => setVans(data.vans))
        async function loadVans() {
            setLoading(true)
            try {
                const data= await getVans()
                setVans(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }           
            
        }
        loadVans()
    }, [])

    const displayedVans= typeFilter 
    ? vans.filter(van => van.type === typeFilter)
    : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
                to={van.id}
                state={{ search: `?${searchParams.toString()}`,
                            type: typeFilter
                        }}
            >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`} >{van.type}</i>
            </Link>            
        </div>
    ))

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={()=> setSearchParams({type: "simple"})}
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >
                Simple
                </button>
                <button
                    onClick={()=> setSearchParams({type: "luxury"})}
                    className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >
                Luxury
                </button>
                <button
                    onClick={()=> setSearchParams({type: "rugged"})}
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >
                Rugged
                </button>
                {
                    typeFilter ? (
                        <button
                            onClick={()=> setSearchParams({})}          
                            className="van-type clear-filters"
                        >
                        Clear Filter
                        </button>
                    ) : null
                }
                
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}