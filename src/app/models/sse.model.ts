export interface IMessage {
  data: string;
}

export interface IService {
  getMessage(message: string): string;
}

export class Sse implements IService{
  getMessage(message: string): string {
    return '';
  }
}
