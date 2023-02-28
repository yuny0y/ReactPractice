import React from 'react'

function Layout(props) {
  return (
    <div style={{
        maxWidth: "1200px",
        minWidth: "800px",
        
        margin: "0 auto",
    }}>
        {props.children}
    </div>
  );
}

export default Layout;