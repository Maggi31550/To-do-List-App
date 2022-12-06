const ListComponent = ({id,title,removeItem,editItem})=>{
    return (
        <>

            <div className="alert alert-info hstack" role="alert">
                {title}

                <div className="ms-auto">
                    <button className="btn" onClick={()=>editItem(id)} >แก้ไข</button>
                    <button className="btn" onClick={()=>removeItem(id)}>ลบ</button>
                </div>
            </div>
        </>
    )
}
export default ListComponent