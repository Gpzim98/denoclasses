import { parse } from "https://deno.land/std/flags/mod.ts";

export class FlagsParser
{
    private port : number;
    importPath : string;
    handler : any;
    syncdb?: string;

    constructor(params : string[])
    {
        var parameters = parse(params);
        this.port = parameters.port; 
        this.handler = parameters.handler;
        this.importPath = Deno.cwd();
        this.syncdb = parameters.sync;
    }

    getPort() : number
    {
        if(!this.port)
            this.port = 8000;
        
        return this.port;
    }

    getImportPath()
    {
        var re = /\\/gi; 
        return "file:///" + this.importPath.replace(re, "/");
    }

    getSyncDb()
    {
        return this.syncdb?.toUpperCase() === 'YES';
    }
}