import { Card, CardContent } from "../ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";




type data = {
  id: number;
  src: string;
};

interface ProductPopularesProps {
  title:string;
  data: data[];
};




const ProductPopulares: React.FC<ProductPopularesProps> = (
    {title,data}
) => {
  return (
    <div className="my-5 p-5 w-full bg-white rounded-xl">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex">
        {data.map((datos) => (
            <div className="flex w-max space-x-4 p-4" key={datos.id}>
                <Card className="bg-transparent border-none shadow-none">
                    <CardContent>
                        <img src={datos.src} alt="product" className="cover w-44  cursor-pointer"/>
                    </CardContent>
                </Card>
            </div>
        ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ProductPopulares;
