declare type Image = {
    src: string;
    alt: string;
    position?: Positions;
    objectFit?: ObjectFit
}

declare type Images = Array<Image>;