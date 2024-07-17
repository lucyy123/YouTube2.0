/// <reference types="vite/client" />

import { SvgIconComponent } from "@mui/icons-material";

export type CotegoriesType = {
  name: string;
  icon: SvgIconComponent;
};

export type PageInfoType = {
  resultsPerPage: number;
  totalResults: number;
};

type DefaultType = {
  height: number;
  url: string;
  width: number;
};
type ThumbnailsType = {
  high:DefaultType;
};

type SnippetType = {
  channelTitle: string;
  description: string;
  publishTime: string;
  publishedAt: string;
  title: string;
  thumbnails: ThumbnailsType;
};

type IdType={
kind: string, videoId:string
}

export type ItemsType = {
  snippet: SnippetType;
  id:IdType
};

export type FetchReponseType={
  pageInfo: PageInfoType;
  items: ItemsType[];
}


type InitialStateType = {
  loading:boolean;
  videos:ItemsType[] | null
}
