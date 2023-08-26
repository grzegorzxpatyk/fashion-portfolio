declare type Image = {
    src: string;
    alt: string;
    position?: Positions;
    objectFit?: ObjectFit;
    background?: 'white' | 'black';
}

declare type Images = Array<Image>;