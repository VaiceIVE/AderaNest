import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AnalysisService {
    constructor(
        private readonly httpService: HttpService
    ){}

    public analyzeSingle(id: number): Observable<any>
    {
        Logger.log(process.env.ANALYSIS_URL)
        return this.httpService.get(process.env.ANALYSIS_URL + `/${id}`)
    }
    public analyzeMass(): Observable<any>
    {
        return this.httpService.get(process.env.ANALYSIS_URL + `/`)
    }
}
