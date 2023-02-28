const Done = ({item, clickDeleteHandler, clickTrueChanger}) => {
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
            <input onClick={()=>{clickTrueChanger(item.id)}} 
            type = 'button' value="취소"style={{borderColor :'green'}}>
            </input>
        </div>
        
        </div>
    )
  };

  export default Done;