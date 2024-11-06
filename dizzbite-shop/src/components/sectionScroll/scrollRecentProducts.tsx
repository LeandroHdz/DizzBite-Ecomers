import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import TestBorrar from "../Borrar/testBorrar";

const ScrollRecentProducts = () => {
    return (
        <div className="m-10">
           <h2>Productos Recientes</h2>
           <ScrollArea className="w-full whitespace-nowrap ">
           <div className="flex w-max space-x-4 p-4">
              <TestBorrar/>
              <TestBorrar/>
              <TestBorrar/>
              <TestBorrar/>
              <TestBorrar/>
              <TestBorrar/>

           </div>
           <ScrollBar orientation="horizontal" />
           </ScrollArea>
                 
                  
       </div>
    )
}

export default ScrollRecentProducts