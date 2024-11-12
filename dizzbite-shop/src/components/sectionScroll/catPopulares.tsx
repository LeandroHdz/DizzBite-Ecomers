import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tv, Shirt, Home, Beef, Banana  } from "lucide-react"; 

const CatPopulares = () => {
    const departments = [
        { name: "Electrónica", icon: <Tv /> },
        { name: "Ropa", icon: <Shirt /> },
        { name: "Hogar", icon: <Home /> },
        {name:"Carnes", icon: <Beef/>},
        {name:"Frutas", icon:<Banana/>},
        { name: "Electrónica", icon: <Tv /> },
        { name: "Ropa", icon: <Shirt /> },
        { name: "Hogar", icon: <Home /> },
        {name:"Carnes", icon: <Beef/>},
        {name:"Frutas", icon:<Banana/>}
    ];

    return (
        <div className="m-10">
            <h2 className="text-2xl font-semibold mb-4">Categorías Populares</h2>
            <ScrollArea className="w-full overflow-x-auto whitespace-nowrap justify-center">
                <div className="flex w-max space-x-4 p-4">
                    {departments.map((department, index) => (
                        <Card key={index} className="flex-shrink-0 w-42">
                            <CardHeader className="flex flex-col items-center">
                                {/* Icono circular */}
                                <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
                                    {department.icon}
                                </div>
                            </CardHeader>
                            <CardContent className="text-center mt-2">
                                <CardTitle className="text-sm font-medium">{department.name}</CardTitle>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};

export default CatPopulares;
