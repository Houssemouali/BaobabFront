export class SignUpInfojournalist {
    username: string;
    email: string;
    role: string[];
    password: string;
    actualEntreprise:string;
    nationality:string;
    experience:number;
    nom:string;
    prenom:string;
    numtel:number;
    datenaiss:Date;
    motivationtext:string;
    cv:File;
    portefolio:File;

    constructor( username: string, email: string, password: string,actualentreprise: string,
        nationality: string,experience: number, nom:string,
        prenom:string,
        numtel:number,
        datenaiss:Date,
        motivationtxt:string,
        cv:File,
    portefolio:File)
        {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['journalist'];
        this.actualEntreprise=actualentreprise;
        this.nationality=nationality;
        this.experience=experience;
        this.nom=nom;
        this.prenom=prenom;
        this.numtel=numtel;
        this.datenaiss=datenaiss;
        this.motivationtext=motivationtxt;
        this.cv=cv;
        this.portefolio=portefolio;
    }
}