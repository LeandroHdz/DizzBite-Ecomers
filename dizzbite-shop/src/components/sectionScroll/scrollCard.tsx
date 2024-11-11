import { Card, CardContent } from "../ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";


const ScrollCard = () => {
  return (
    <div className="m-10">
      <h2>Productos Populares</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex">
          <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest.png" alt="product" className="cover w-44 hover:w-52 cursor-pointer"/>
                  </CardContent>
              </Card>
          </div>
          <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest.png" alt="product" className="cover w-44 hover:w-52 cursor-pointer"/>
                  </CardContent>
              </Card>
          </div>
          <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest.png" alt="product" className="cover w-44 hover:w-52 cursor-pointer"/>
                  </CardContent>
              </Card>
          </div>
          <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest.png" alt="product" className="cover w-44 hover:w-52 cursor-pointer"/>
                  </CardContent>
              </Card>
          </div>   <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest.png" alt="product" className="cover w-44 hover:w-52 cursor-pointer"/>
                  </CardContent>
              </Card>
          </div>
          <div className="flex w-max space-x-4 p-4">
              <Card className="bg-transparent border-none shadow-none">
                  <CardContent>
                      <img src="/promos/imgTest.png" alt="product" className="cover w-44 hover:w-52 cursor-pointer"/>
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
