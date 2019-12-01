import React from 'react'

const Grid = (props) => {
console.log(`Grid`,props.list)
return(
    <>
    <div>
    Technology:{props.list.tech}
    Project:{props.list.project}
    Github:{props.list.description}
    </div>
    </>
)

}
export default Grid