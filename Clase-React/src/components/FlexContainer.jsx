function FlexContainer({children}) {
    const styleFlex = { 
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
    };
  return (
    <div style={styleFlex}>{children}</div>
  )
}

export default FlexContainer