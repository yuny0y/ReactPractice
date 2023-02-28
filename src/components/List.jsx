const List =({item, clickDeleteHandler, clickFalseChanger}) =>{
    return (
        <div key={item.id} className='component-sytle'>
        <div style={{fontWeight : 'bold'}}>{item.title}</div>
        <p />
        <div style={{fontSize:'13px'}}>{item.contents}</div>
        <p />
        <div className="btn">
            <input onClick={()=>{clickDeleteHandler(item.id)}} 
            type = 'button' value="삭제하기" style={{borderColor :'crimson'}}>
            </input>
            <input onClick={()=>{clickFalseChanger(item.id)}} 
            type = 'button' value="완료" style={{borderColor :'green'}}>
            </input>
        </div>
        </div>
    )
};

export default List;