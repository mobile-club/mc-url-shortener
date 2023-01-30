import { Controller, Get, Param, Response } from "@nestjs/common";
import { Response as Res } from 'express';
import { UrlShortenerService } from "./url-shortener.service";

@Controller('s/')
export class UrlShortenerController{
    constructor(private urlShortenerService: UrlShortenerService) {}
    @Get(':path')
    async redirect(@Param('path') path: string, @Response() res: Res) {
        res.redirect(await this.urlShortenerService.redirect(path))
    }
}