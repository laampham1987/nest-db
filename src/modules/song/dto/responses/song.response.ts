export interface SongResponse {
  name: string;
  point: number;
}

export interface SongListResponse {
  songs: SongResponse[];
}
