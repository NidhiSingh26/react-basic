import React from 'react'

// function ForwardRefInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }

const ForwardRefInput = React.forwardRef((props,ref)=>{
  return(
    <div>
      {/* here ref is forwarding to ref of FRParentINput */}
      <input type="text" ref={ref}/>
    </div>
  )
})

export default ForwardRefInput

