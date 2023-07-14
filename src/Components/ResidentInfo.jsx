import { useState } from "react";

const ResidentInfo =({source, selectd})=>{
    const [page, setPage]=useState(1)
    const residentPerPage = 20
    const lastIndex = residentPerPage*page
    const firstIndex = lastIndex-residentPerPage
    const residentPaginated = source?.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(source?.length / residentPerPage);
    const pages = [];
    
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    if(selectd){
        

        return(
            <>
                <div className="total__container">
                    {residentPaginated?.map(print=>(
                        <div key={print.id} className="resident__container">
                            <div className="status">
                                <div className={print.status}></div>
                                <p>{print.status}</p>
                            </div>
                            <img src={print.image}/> 
                            <h3>{print.name}</h3>
                            <hr />
                            <div className="detailes__container">
                                <div>
                                    <p>Species:</p>
                                    <p>Origin:</p>
                                    <p>Times appear:</p>
                                </div>
                                <div>
                                    <p>{print.species}</p>
                                    <p>{print.origin?.name}</p>
                                    <p>{print.episode?.length} Times</p>
                                </div>
                            </div>
                            
                        </div>
                        

                    ))
                    }
                    
                </div>
                <div className="container__button">
                    <button onClick={()=>setPage(page-1)} disabled={page==1}>prev</button>
                    {pages?.map(print=>(
                        <button key={print} onClick={()=>setPage(print)}>{print}</button>
                    ))}
                    <button onClick={()=>setPage(page+1)} disabled={page==totalPages}>next</button>
                </div>
                
            </>
                
            )
    }else{
        return (<div className="no__residents"><h2>Nadie vive aqui</h2></div>)
    }
    

}
export default ResidentInfo;