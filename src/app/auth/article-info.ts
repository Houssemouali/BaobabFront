export class ArticleInfo {
    title:string;
    content:string;
    //author:number;
    language:number;
    category:string;
    tags:number;

constructor( 
    title:string,
    content:string,
    //author:number,
    language:number,
    category:string,
    tags:number
    ){
        this.title=title;
        this.content=content;
        //this.author=author;
        this.language=language;
        this.category=category;
        this.tags=tags;
    }

}