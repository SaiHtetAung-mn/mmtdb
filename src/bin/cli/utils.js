const dotenv = require('dotenv');
dotenv.config();

const cliProgress = require('cli-progress');
const fs = require('fs');
const path = require('path');
const database = require('../../database');

/**
 * Register cli cmd here
 */
const CLI_ARGS = {
    db_seed: {
        arg_name: 'db:seed', 
        description: 'Seed initial data from src/database/seeds files'
    }
}


const seeder_dir = path.join(__dirname, '..', '..', 'database', 'seeds');

function showCmdList() {
    console.log('\nUsage: mmtdb <arg>\n');
    console.log('Arguments:');

    Object.keys(CLI_ARGS).forEach(key => {
        console.log(`\t${CLI_ARGS[key]['arg_name']}\t\t${CLI_ARGS[key]['description']}`);
    });
    console.log('\n');
}

async function runDBSeeder() {
    const seeders = [];
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

    try {
        await database.connect();
        const seederFiles = getSeederFiles();
        seederFiles.map(file => {
            seeders.push({
                "file": () => new Promise(async (resolve, reject) => {
                    const func = require(`${seeder_dir}/${file}`)?.run ?? null;
                    try {
                        if(typeof func !== 'function') throw new Error(`No 'run' function imported at ${file}`);
                        await func();
                        resolve();
                    }
                    catch(err) {
                        reject(err);
                    }
                }),
                "fileName": file,
                "success": false
            });
        });
        
        const length = seeders.length;
        console.log("\x1b[36m%s\x1b[0m", "Seeding database...");
        length > 0 && progressBar.start(length, 0);

        for(let i=0; i<length; i++) {
            const seederFunc = seeders[i]["file"];

            if(typeof seederFunc !== 'function') continue;
            await seederFunc();

            seeders[i]["success"] = true;
            progressBar.update(i+1);
            if(i == length-1) {
                progressBar.stop();
                console.log("\x1b[32m%s\x1b[0m", "\nDatabase seeding completed successfully");
            }
        }
    }
    catch(err) {
        progressBar.stop();
        console.log("\x1b[31m%s\x1b[0m", "\nDatabase seeding fails.");
        console.error("\x1b[31m%s\x1b[0m", `${err instanceof Error ? err.stack : err}`);
    }
    finally {
        if(seeders.length > 0) {
            console.log("\x1b[36m%s\x1b[0m", '\nDatabase seeding status...');
            seeders.map(seeder => {
                seeder.success ? 
                    console.log("%s\x1b[1m%s\x1b[32m%s\x1b[0m","... ", `${seeder.fileName}\t`, "✔") : 
                    console.log("%s\x1b[1m%s\x1b[31m%s\x1b[0m","... ", `${seeder.fileName}\t`, "✗");
            });
        }
        else {
            console.log("\x1b[33m%s\x1b[0m", 'There is no database seeder to run...\t⚠️');
        }
        database.disconnect();
        process.exit();
    }
}

function getSeederFiles() {
    const files = fs
        .readdirSync(seeder_dir)
        .filter(file => (file.slice(-3) === '.js'));
    return files;
}

module.exports = {
    showCmdList,
    runDBSeeder,
    CLI_ARGS
}