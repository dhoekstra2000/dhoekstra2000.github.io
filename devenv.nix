{ pkgs, lib, config, inputs, ... }:

{
  packages = [ pkgs.hugo ];

  languages.go = {
    enable = true;
  };

  languages.javascript = {
    enable = true;
    npm.enable = true;
  };
}
