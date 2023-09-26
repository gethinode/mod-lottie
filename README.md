# Hinode Module - Lottie

<!-- Tagline -->
<p align="center">
    <b>A Hugo module to add animations powered by Lottie to your Hinode site </b>
    <br />
</p>

<!-- Badges -->
<p align="center">
    <a href="https://gohugo.io" alt="Hugo website">
        <img src="https://img.shields.io/badge/generator-hugo-brightgreen">
    </a>
    <a href="https://gethinode.com" alt="Hinode theme">
        <img src="https://img.shields.io/badge/theme-hinode-blue">
    </a>
    <a href="https://github.com/gethinode/mod-lottie/commits/main" alt="Last commit">
        <img src="https://img.shields.io/github/last-commit/gethinode/mod-lottie.svg">
    </a>
    <a href="https://github.com/gethinode/mod-lottie/issues" alt="Issues">
        <img src="https://img.shields.io/github/issues/gethinode/mod-lottie.svg">
    </a>
    <a href="https://github.com/gethinode/mod-lottie/pulls" alt="Pulls">
        <img src="https://img.shields.io/github/issues-pr-raw/gethinode/mod-lottie.svg">
    </a>
    <a href="https://github.com/gethinode/mod-lottie/blob/main/LICENSE" alt="License">
        <img src="https://img.shields.io/github/license/gethinode/mod-lottie">
    </a>
</p>

## About

![Logo](https://raw.githubusercontent.com/gethinode/hinode/main/static/img/logo.png)

Hinode is a clean blog theme for [Hugo][hugo], an open-source static site generator. Hinode is available as a [template][repository_template], and a [main theme][repository]. This repository maintains a Hugo module to add [Lottie][lottie] to a Hinode site. Visit the Hinode documentation site for [installation instructions][hinode_docs].

<!-- MARKDOWN PUBLIC LINKS -->
[hugo]: https://gohugo.io

<!-- MARKDOWN MAINTAINED LINKS -->
<!-- TODO: add blog link
[blog]: https://markdumay.com
-->

## Notes

This modules uses [Lottie Light][lottie_light] by default. The `lottie_light.js` player is a lighter version of lottie that supports only the svg renderer and does not support expressions or effects. Canvas and html renderers are not supported either.

You can adjust the mount point in `config.toml` to use the default library instead. Please note that you need to enable `unsafe-eval` in your [Content Security Policy][mozilla_csp_script] then (see Lottie issue [#2173][lottie_issue_2173]).

```toml
[[module.imports.mounts]]
source = "build/player/lottie.js"
target = "assets/js/modules/lottie/lottie.js"
```

[hinode_docs]: https://gethinode.com
[lottie]: http://airbnb.io/lottie/
[lottie_light]: https://github.com/airbnb/lottie-web/wiki/Lottie-Light
[lottie_issue_2173]: https://github.com/airbnb/lottie-web/issues/2173
[mozilla_csp_script]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src
[repository]: https://github.com/gethinode/hinode.git
[repository_template]: https://github.com/gethinode/template.git
