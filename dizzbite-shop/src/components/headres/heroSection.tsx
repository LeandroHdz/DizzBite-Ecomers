import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import McCard from "../mc/mc-card";

const HeroSection = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mx-20 mt-2">
            {/* Columna izquierda: Carousel */}
            <div className="">
                <Carousel className="bg-orange-500 h-full">
                    <CarouselContent>
                        <CarouselItem>
                            <img
                                src="https://via.placeholder.com/150"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/* Columna derecha: McCards */}
            <div className="flex flex-col gap-4">
                <McCard
                    title="Prueba Card 1"
                    description="Descripción de prueba"
                    src="https://via.placeholder.com/150"
                />
                <McCard
                    title="Prueba Card 2"
                    description="Descripción de prueba"
                    src="https://via.placeholder.com/150"
                />
            </div>
        </div>
    );
};

export default HeroSection;
