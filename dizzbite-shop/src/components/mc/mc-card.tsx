import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export interface McCardProps {
    title: string;
    description: string;
    src: string;
}

const McCard = React.forwardRef<HTMLDivElement, McCardProps>(({ title, description, src }, ref) => {
    return (
        <Card ref={ref}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={src} alt={title} />
            </CardContent>
        </Card>
    );
});

McCard.displayName = "McCard"; // Esto es necesario para evitar advertencias de React

export default McCard;
