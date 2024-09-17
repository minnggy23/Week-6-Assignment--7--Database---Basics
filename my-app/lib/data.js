import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function getSortedList(){

    const filePath = path.join(dataDir,'persons.json');

    const jsonString = fs.readFileSync(filePath, "utf8");

    const jsonObj =  JSON.parse(jsonString);

    jsonObj.sort(
        function(a,b){
            return a.name.localeCompare(b.name);
        }
    );

    return jsonObj.map(
        function(item){
            return{
                id: item.id.toString(),
                name: item.name
            };
        }
    );
}