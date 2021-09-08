export function GenerateId(): string {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id= '';
        const charactersLength = characters.length;
        for ( let i = 0; i < 8; i++ ) {
          id += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return id;
}