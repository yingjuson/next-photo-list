import React, { FC, useState } from "react";
import { IPhoto } from "../../types/photo.interface";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const PhotoCard: FC<IPhoto> = ({ id, title, url }) => {
  const [src, setSrc] = useState(url);

  return (
    <Card className="shadow-md max-h-96 max-w-80">
      <CardHeader>
        <CardTitle>{`#${id}`}</CardTitle>
        <CardDescription className="truncate">{title}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          className="rounded-lg"
          alt={title}
          src={src}
          width={250}
          height={250}
          onError={() => setSrc("https://placehold.co/250")}
        />
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
