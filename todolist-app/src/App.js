import Alert from './components/Alert';
import 'bootstrap/scss/bootstrap.scss'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import ListComponent from './components/ListComponent';

function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState([]);
	const [alert, setAlert] = useState({
		show:false,
		className:'',
		msg:''
	});
	const [checkEditItem, setCheckEditItem] = useState(false);
	const [editId, setEditId] = useState(null);
	
	const submitData = (e)=>{
		e.preventDefault()
		if(!name){
			setAlert({
				show:true,
				className:'alert-danger',
				msg:'โปรดระบุข้อมูล'
			})
		}
		else if(checkEditItem && name){
			setList(list.map((item)=>{
				if(item.id === editId){
					return {...item, title:name}
				}
				return item
			}))
			setName('')
			setCheckEditItem(false)
			setEditId(null)
			setAlert({
				show:true,
				className:'alert-success',
				msg:'แก้ไขข้อมูลเรียบร้อย'
			})
		}
		else{
			const newItem = {
				id:uuidv4(),
				title:name
			}
			
			setList([...list,newItem])
			setName('')

			setAlert({
				show:true,
				className:'alert-success',
				msg:'บันทึกข้อมูลเรียบร้อย'
			})
		}
	}
	
	const removeItem = (id)=>{
		setList(list.filter((item)=>item.id !== id))
		setAlert({
			show:true,
			className:'alert-warning',
			msg:'ลบข้อมูลเรียบร้อย',
		})
	}
	const editItem = (id)=>{
		console.log(id);
		setCheckEditItem(true)
		setEditId(id)
		setName(list.find((item)=>item.id === id).title)
		
	}

	return (
		<div className="container hstack vh-100">
				<div className="card card-body">
					<h1 className='mb-3'>TodoList App</h1>
					{alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
					<form onSubmit={submitData}>
						<div className="input-group mb-3">
							<input type="text" 
								className="form-control" placeholder="กรอกข้อมูลที่จะทำ" 
								onChange={(e)=>setName(e.target.value)} value={name}/>
							<button className="btn btn-primary" type="submit" id="button-addon2">{checkEditItem ? 'แก้ไขข้อมูล':'เพิ่มข้อมูล'}</button>
						</div>
					</form>
					<div>
						{list.map((data,index)=>{
							return (
								<ListComponent key={index} {...data} removeItem={removeItem} editItem={editItem}/>
							)
						})}
					</div>
				</div>
		</div>
	);
}

export default App;
