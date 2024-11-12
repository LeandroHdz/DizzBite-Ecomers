import { Card, CardContent } from "../ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


const ScrollCard = () => {
  return (
    <div className="m-10 bg-white rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 p-3">Productos Populares</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex">
          <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest.png" alt="product" className="cover w-44  cursor-pointer"/>
                  </CardContent>
              </Card>
          </div>
          <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest1.png" alt="product" className="cover w-44  cursor-pointer"/>
                  </CardContent>
              </Card>
          </div>
          <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest2.jpeg" alt="product" className="cover w-44  cursor-pointer"/>
                  </CardContent>
              </Card>
          </div>
          <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest3.jpg" alt="product" className="cover w-44  cursor-pointer"/>
                  </CardContent>
              </Card>
          </div>   <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest4.png" alt="product" className="cover w-44  cursor-pointer"/>
                  </CardContent>
              </Card>
          </div>
          <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest5.jpg" alt="product" className="cover w-44  cursor-pointer"/>
                  </CardContent>
              </Card>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ScrollCard;
