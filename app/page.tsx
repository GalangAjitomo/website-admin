import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <Button variant="destructive" size={"lg"}>
        Click Me
      </Button>
    </div>
  );
}
