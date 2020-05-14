import * as fs from "fs";
import { sort } from "tstl/ranges/algorithm/sorting";

interface IBan
{
    words: string[];
}
interface IDetect
{
    file: string;
    words: string[];
}

function normalize(str: string): string
{
    return str.toLowerCase()
        .split("\n").join("")
        .split("\r").join("")
        .split("\t").join("")
        .split(" ").join("");
}

async function iterate(ban: IBan, detects: IDetect[], path: string): Promise<void>
{
    let fileList: string[] = await fs.promises.readdir(path);
    for (let file of fileList)
    {
        // SPECIALIZE FILE
        let currentPath: string = `${path}/${file}`;
        let stats: fs.Stats = await fs.promises.lstat(currentPath);

        // ITERATE FOLDER
        if (stats.isDirectory() === true)
        {
            
            await iterate(ban, detects, currentPath);
            continue;
        }
        else if (file.substr(-3) !== ".md")
            continue;

        // READ CONTENT
        let content: string = await fs.promises.readFile(currentPath, "utf8");
        content = normalize(content);

        // FIND VIOLATIONS
        let words: string[] = ban.words.filter(str => content.indexOf(str) !== -1);
        if (words.length !== 0)
            detects.push({
                file: currentPath.substr((__dirname + "/../").length),
                words: words
            });
    }
}

async function main(): Promise<void>
{
    // GET FORBIDDEN WORDS
    let ban: IBan = JSON.parse(await fs.promises.readFile(__dirname + "/../assets/config/ban.json", "utf8"));
    ban.words = ban.words.map(str => normalize(str));
    sort(ban.words);
    
    // DETECT BY ITERATIONS
    let detects: IDetect[] = [];
    await iterate(ban, detects, __dirname + "/../contents");

    // PRINT RESULT
    if (detects.length !== 0)
    {
        console.log("금지어가 발견되었습니다.");
        for (let elem of detects)
            console.log(elem.file, elem.words);
        
        process.exit(-1);
    }
    console.log("Success");
}
main().catch(e =>
{
    console.log(e);
    process.exit(-1);
});