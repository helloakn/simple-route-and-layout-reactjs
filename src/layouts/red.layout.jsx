const RedLayout=({...props})=>{
  return (
    <div>
      <div style={{backgroundColor:'red'}}>
        <ul>
          <li>hello</li>
        </ul>
        {props.page }
      </div>
    </div>
  )
}

export {
  RedLayout
}