import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AnalysisService {
    constructor(
        private readonly httpService: HttpService
    ){}

    public analyzeSingle(id: number): Observable<any>
    {
        return this.httpService.get(process.env.ANALYZE_URL + `/${id}`)
    }
    public analyzeMass(): Observable<any>
    {
        return this.httpService.get(process.env.ANALYZE_URL + `/`)
    }
}