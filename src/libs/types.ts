interface IImage {
  url: string;
}

interface IWorkCard {
  thumbnail: IImage;
}

interface ISliderCard {}

export interface ILink {
  label: string;
  href: string;
}

export interface ISection {
  title?: string;
  slug?: string;
  bgColor: string;
  textColor: string;
  type: "intro" | "work";
  images: string[];
  links: ILink[];
}
