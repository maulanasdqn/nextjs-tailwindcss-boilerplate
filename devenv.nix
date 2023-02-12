{ pkgs, ... }:

{

  packages = with pkgs; [ 
    nodejs
    openssl
    nodePackages.prisma
    nodePackages.yarn
    nodePackages.prettier
  ];

    enterShell = with pkgs; ''
     export PRISMA_MIGRATION_ENGINE_BINARY="${prisma-engines}/bin/migration-engine"
     export PRISMA_QUERY_ENGINE_BINARY="${prisma-engines}/bin/query-engine"
     export PRISMA_QUERY_ENGINE_LIBRARY="${prisma-engines}/lib/libquery_engine.node"
     export PRISMA_INTROSPECTION_ENGINE_BINARY="${prisma-engines}/bin/introspection-engine"
     export PRISMA_FMT_BINARY="${prisma-engines}/bin/prisma-fmt"
     export PATH=~/.npm-packages/bin:$PATH
     export NODE_PATH=~/.npm-packages/lib/node_modules
   '';

}
