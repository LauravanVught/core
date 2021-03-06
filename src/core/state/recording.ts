import {IncomingHttpHeaders, OutgoingHttpHeaders} from 'http';

/** An actual http response recording.*/
export interface Recording {
    request: {
        url: string;
        method: string;
        headers: IncomingHttpHeaders;
        body: { [key: string]: any };
    };
    response: {
        data: string;
        status: number;
        headers: OutgoingHttpHeaders;
        contentType: string;
    };
    datetime: number;
}
