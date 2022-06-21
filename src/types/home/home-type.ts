export interface Video {
  id: string,
  name: string,
  coverImage: string,
  watchCount: string,
  description: string
}

export enum ERankingType {
  ZHIBO_ROOM,
  VIDEO
}
