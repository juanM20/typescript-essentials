interface TakePhoto {
    caneraMode: string;
    filter: string;
    burst: number;
}

interface Story {
    createStory(): void;
}

class Instagram implements TakePhoto {
    constructor(
        public caneraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Facebook implements TakePhoto, Story {
    constructor(
        public caneraMode: string,
        public filter: string,
        public burst: number
    ){}

    createStory(): void {
        console.log('Creating story')
    }
}       

const inst = new Instagram('test', 'test', 1)
console.log(inst)

const fb = new Facebook('test', 'test', 1)
fb.createStory()
console.log(fb)