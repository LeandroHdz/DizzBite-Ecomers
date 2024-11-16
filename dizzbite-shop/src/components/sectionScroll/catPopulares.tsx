import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tv, Shirt, Home, Beef, Banana } from "lucide-react"; 

// Definir los nombres de iconos válidos como un tipo de unión
type IconName = 'Tv' | 'Shirt' | 'Home' | 'Beef' | 'Banana';

// Mapea los nombres de los iconos a los componentes de Lucide
const iconMap: Record<IconName, JSX.Element> = {
    Tv: <Tv />,
    Shirt: <Shirt />,
    Home: <Home />,
    Beef: <Beef />,
    Banana: <Banana />
};

// Actualiza el tipo de `icon` para que solo acepte los valores definidos en IconName
type Category = {
    id: number;
    name: string;
    icon: IconName;
};

interface CatPopularesProps {
    categories: Category[];
}

const CatPopulares: React.FC<CatPopularesProps> = ({ categories }) => {
    return (
        <div className="m-10">
            <h2 className="text-2xl font-semibold mb-4">Categorías Populares</h2>
            <ScrollArea className="w-full overflow-x-auto whitespace-nowrap justify-center">
                <div className="flex w-max space-x-4 p-4">
                    {categories.map((category, index) => (
                        <Card key={index} className="flex-shrink-0 w-42">
                            <CardHeader className="flex flex-col items-center">
                                <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
                                    {iconMap[category.icon] || <Home />} {/* Ícono por defecto si el nombre no coincide */}
                                </div>
                            </CardHeader>
                            <CardContent className="text-center mt-2">
                                <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
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
