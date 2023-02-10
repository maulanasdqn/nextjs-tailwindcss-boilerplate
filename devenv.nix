{ pkgs, ... }:

{

  packages = with pkgs; [ 
    nodejs
    nodePackages.yarn
    nodePackages.prettier
  ];

}
