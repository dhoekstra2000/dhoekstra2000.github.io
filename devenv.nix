{ pkgs, lib, config, inputs, ... }:

{
  packages = [ pkgs.hugo ];

  languages.javascript = {
    enable = true;
    npm.enable = true;
  };
}
