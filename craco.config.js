const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    
    webpack: {
        alias: {
            '@app': resolvePath('./src/app'),
            '@services': resolvePath('./src/app/common/services'),
            '@store': resolvePath('./src/app/common/store'),
            '@models': resolvePath('./src/app/common/models'),
            '@styles': resolvePath('./src/app/common/styles'),
            '@components': resolvePath('./src/app/components'),
            '@common': resolvePath('./src/app/common'),
        }
    },
  
}