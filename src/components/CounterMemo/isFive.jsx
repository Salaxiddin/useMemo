import React from "react";

let render = 0

export default React.memo(
    function IsFive({ value }) {
        console.warn(`isFivve ${++render}`)
      const VeryVreyVeryHardFunction = React.useMemo(() => {
        let i = 0;
        while (i < 450000000) i++;
        console.log(i);
        return value ==5 ?"its five :D":"its not five :("
      }, [value]);
      return <h3>{VeryVreyVeryHardFunction}</h3>;
    }
,(prevProps,nextProps)=>{
    if(nextProps.value ==5){
        return false
    } else {
        return true
    }
})
