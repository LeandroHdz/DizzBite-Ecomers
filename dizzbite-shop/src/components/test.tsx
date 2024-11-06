import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import McCard from "./mc/mc-card";
const Test = () => {
    return (
       <div className="m-10">
           <h2>Nuestros Departamentos</h2>
           <ScrollArea className="w-full whitespace-nowrap ">
           <div className="flex w-max space-x-4 p-4">
           <McCard
                    title="Prueba Card 1"
                    description="Descripción de prueba"
                    src="https://via.placeholder.com/150"
                />
                <McCard
                    title="Prueba Card 1"
                    description="Descripción de prueba"
                    src="https://via.placeholder.com/150"
                />
                <McCard
                    title="Prueba Card 1"
                    description="Descripción de prueba"
                    src="https://via.placeholder.com/150"
                />
                <McCard
                    title="Prueba Card 1"
                    description="Descripción de prueba"
                    src="https://via.placeholder.com/150"
                />
                <McCard
                    title="Prueba Card 1"
                    description="Descripción de prueba"
                    src="https://via.placeholder.com/150"
                />
                <McCard
                    title="Prueba Card 1"
                    description="Descripción de prueba"
                    src="https://via.placeholder.com/150"
                />
                <McCard
                    title="Prueba Card 1"
                    description="Descripción de prueba"
                    src="https://via.placeholder.com/150"
                /><McCard
                title="Prueba Card 1"
                description="Descripción de prueba"
                src="https://via.placeholder.com/150"
            />
           </div>
           <ScrollBar orientation="horizontal" />
           </ScrollArea>
                 
                  
       </div>
    );
};

export default Test;
