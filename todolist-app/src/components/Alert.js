import { useEffect } from "react"
const Alert = ({className,msg,setAlert,list})=>{

    useEffect(()=>{

        const timeOut = setTimeout(()=>{
            setAlert({
                show:false,
                msg:'',
                className:''
            });
        },2000)
        return()=>clearTimeout(timeOut)
    
         // eslint-disable-next-line
    },[list])

    return (
        <>
            <div className={`alert py-2 ${className}`}>
                {msg}
            </div>
        </>
    )
}
export default Alert