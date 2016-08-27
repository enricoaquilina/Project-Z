export class HubMessage{
    constructor (
        public content: string, 
        public writer: string, 
        public creationDate?: string) {};
}
