import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
const Test = () => {
    return (
      <Card className="m-5 bg-amber-600">
        <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>
            <h2>Content</h2>
        </CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
};

export default Test;
