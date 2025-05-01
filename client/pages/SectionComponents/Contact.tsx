import Image from "next/image";
import headshot from "../assets/headshot.jpg";
import { Card, CardContent } from "@mui/material";

const Contact = () => {
  return (
    <div className="flex flex-row items-center justify-evenly">
      <Image
        src={headshot}
        alt="Headshot"
        className="rounded-full w-1/2 h-1/2"
      />
      <Card>
        <CardContent className="m-4 flex flex-col items-center">
          <div className="font-math text-xl justify-items-center">
            <p> Michael.L.Geismar@gmail.com </p>
            <a
              href="https://github.com/MichaelGeismar"
              className="block max-w-fit text-blue-900"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/michael-geismar"
              className="block max-w-fit text-blue-900"
              target="_blank"
            >
              LinkedIn
            </a>
            <p> 917-623-4478 </p>
            <p> Arvada, CO 80003 </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Contact;
