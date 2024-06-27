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

const PhotoCard: FC<IPhoto> = ({ id, title, url, thumbnailUrl }) => {
  const [src, setSrc] = useState(url);

  return (
    <Card className="shadow-md max-w-80 h-[22rem]">
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
          height={300}
          onError={() => setSrc("https://placehold.co/250")}
        />
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
