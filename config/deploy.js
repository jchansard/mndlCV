/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV =
    {
      build: {
        environment: 'development'
      },

      's3-index': {
        accessKeyId: 'AKIAJTH5XBJWXBLEJ4HA',
        secretAccessKey: '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',
        bucket: 'joshchansard.com',
        region: 'us-east-1',
        allowOverwrite: true        
      },

      s3: {
        accessKeyId: 'AKIAJTH5XBJWXBLEJ4HA',
        secretAccessKey: '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',
        bucket: 'joshchansard-assets',
        region: 'us-east-1',
        filePattern: '**/*.{js,json,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2}',
        outputPath: 'tmp/_deploy-dist'
       }
    };
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV =
    {
      build: {
        environment: 'production'
      },

      's3-index': {
        accessKeyId: 'AKIAJTH5XBJWXBLEJ4HA',
        secretAccessKey: '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',
        bucket: 'joshchansard.com',
        region: 'us-east-1',
        allowOverwrite: true        
      },

      s3: {
        accessKeyId: 'AKIAJTH5XBJWXBLEJ4HA',
        secretAccessKey: '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',
        bucket: 'joshchansard-assets',
        region: 'us-east-1',
        filePattern: '**/*.{js,json,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2}',
        outputPath: 'tmp/_deploy-dist',
        allowOverwrite: true
       }
    };
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};