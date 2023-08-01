import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongListResponse, CreateSongRequest } from '../dto';
import { SongsService } from '../services';

@Controller({ path: 'song' })
export class SongController {
  constructor(private songsService: SongsService) {}

  @Get()
  async getSongs(): Promise<SongListResponse> {
    const songsEntities = await this.songsService.findAll();
    return {
      songs: songsEntities.map((s) => ({ name: s.name, point: s.point })),
    };
  }

  @Post()
  async addSong(@Body() createSongRequest: CreateSongRequest) {
    console.log({ createSongRequest });
    await this.songsService.add(
      createSongRequest.name,
      createSongRequest.point,
    );
    return true;
  }
}
