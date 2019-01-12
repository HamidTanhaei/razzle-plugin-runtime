#Razzle Runtime Enviroment
Razzle Runtime Enviroment adds ability to access dotEnv variables in runtime simplicity by adding a PLUGIN in razzle config file.
- support .env
- support .env.development

##How to install
###1- Install package
```bash
$ npm install razzle-plugin-runtimeenv --save
```

###2- Config Razzle
in your Razzle project root add or edit **razzle.config.js** to add runtimeenv plugin.

sample razzle.config.js

    'use strict';
    
    module.exports = {
      plugins: [
          ...,
          'runtimeenv'
      ]
    };
    