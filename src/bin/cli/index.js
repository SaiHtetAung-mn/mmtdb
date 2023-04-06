#! /usr/bin/env node
const yargs = require('yargs');
const {showCmdList, CLI_ARGS, runDBSeeder} = require('./utils');
const CLI_PREFIX = 'mmtdb';

// Register executor function here
const ARG_FNS = {
    [CLI_ARGS.db_seed.arg_name]: runDBSeeder
};

(function() {
    const usage = `\nUsage: ${CLI_PREFIX} <cmd> to run cli`;
    yargs
        .usage(usage)
        .option("l", {alias: 'list' ,describe: 'List all command line', type: 'boolean', demandOption: false})
        .help(true)
        .argv;
        
    (yargs.argv.l || yargs.argv.list) && showCmdList();
    const arg_name = yargs.argv._[0];
    if(!arg_name) {
        return ;
    }
    
    if(ARG_FNS.hasOwnProperty(arg_name)) {
        ARG_FNS[arg_name]();
    }
    else {
        console.log(`${arg_name} is not recognized. Type '${CLI_PREFIX} -l' for command list or '${CLI_PREFIX} --help' for help`);
    }
})();