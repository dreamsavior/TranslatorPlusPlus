# Translator++ — Open-Source Game Translation & Localization Tool

**Translator++ is an open-source computer-assisted translation (CAT) tool for translating games, visual novels, and other structured content.** It extracts text from supported games, lets you translate with the machine translator or AI model of your choice, keeps every line editable, and exports or injects the finished translation back into the game.

[Website](https://dreamsavior.net/) · [Download](https://dreamsavior.net/download/) · [Documentation](https://dreamsavior.net/docs/translator/) · [Discord](https://discord.gg/6Dv97C87xt) · [Issues](../../issues) · [Discussions](../../discussions)

> This repository is the public home of Translator++. Public-edition development is released here as it matures, so users and developers can inspect, improve, and extend the project.

## Why Translator++?

Game localization is more than sending thousands of disconnected lines to a translator. Names must stay consistent, dialogue needs context, control codes must survive, images may contain text, and every result still needs a human decision.

Translator++ keeps the translator in control while machine translation, AI, and automation handle the repetitive work.

- **Human-led, AI-assisted.** Read the source, compare translation candidates, edit any result, and decide what is accepted.
- **Built for complete game-localization workflows.** Extract, organize, translate, review, export, inject, update, and test from one project.
- **Choice of translation provider.** Use classic machine translation, an OpenAI-compatible API, cloud AI, a local model, or translation memory.
- **Context-aware projects.** Preserve file paths, event locations, character names, parameters, comments, tags, and context-specific translations. Preview a raw source snippet to see exactly where a selected line sits in the surrounding script.
- **Safe handling of game syntax.** Escape algorithms protect variables, formatting codes, placeholders, and other inline control sequences during translation.
- **Proofreading tools.** Use an OpenAI-compatible proofreader to check grammar, formatting, line breaks, and damaged inline tags before accepting changes.
- **Image translation and editing.** OCR images into ordinary translation rows, edit text boxes visually, adjust typography, and remove original text with local LaMa inpainting.
- **Batch translation and automation.** Translate selected rows or whole files and automate repeatable jobs with JavaScript CodeRunner workspaces.
- **Translation memory and references.** Reuse approved translations and maintain common terms, actor names, and project-specific terminology.
- **Collaboration options.** Work asynchronously through Git-backed project snapshots or collaborate in real time through network sessions.
- **Open API and MCP server.** Control the running application from scripts, external apps, and your preferred MCP-capable AI agent.
- **Extensible by design.** Add a parser, translator engine, proofreader, panel, command, workflow, or API tool without waiting for the core application to add it.

## Open, human-led localization

Translator++ is designed as an open localization platform in which humans direct AI and automation—not as a black box that replaces the translator's judgment.

| Translator++ principle | What it means for you |
| --- | --- |
| **Open source and open development** | The public edition is GPLv3-licensed. Development made for the public line is intended to become publicly available as it matures. |
| **Human in control** | Machine translation and AI produce editable drafts. You can compare candidates, retain earlier versions, revise individual cells, and proofread before export. |
| **Open HTTP JSON API** | Discover tools and control projects, cells, translators, OCR, images, and automation from local scripts or external applications. An unrestricted local execution endpoint is also available for advanced workflows. |
| **MCP for AI agents** | Connect a selected MCP-capable agent to `http://127.0.0.1:22883/mcp` and let it work with the same registered tools while Translator++ is running. |
| **First-class proofreading** | Review grammar and fluency while also checking structural details that matter to games: line counts, formatting, and inline control codes. |
| **Free, local image tools** | OCR image text, move/resize/rotate text regions, control font, alignment, colors, opacity, boxes, and outlines, then clean the source with local inpainting and export the composed image. |
| **Automation you can own** | Write JavaScript for project-wide tasks, rows, selections, found cells, and object iteration. Scripts can define their own generated input forms. |
| **Bring your own translator** | Pick from dozens of included integrations, connect OpenAI-compatible or LiteLLM providers, use local/offline engines, or implement another engine. |
| **Make unsupported games supportable** | Create a custom parser with regular expressions and JavaScript, build a full parser add-on, or reuse the parser framework and export/injection hooks. |
| **Add-ons are full extensions** | Add-ons can access the application runtime, create UI, register translator engines, automate workflows, and expose new HTTP API and MCP tools. |

## Supported game engines

Translator++ includes end-to-end parsers or established localization workflows for the following engines. Exact coverage can vary between games, engine versions, custom encryption, and developer modifications; always work from a backup and test the exported build in-game.

| Game engine / platform | Translator++ workflow |
| --- | --- |
| **RPG Maker 2000 / 2003** | Extract and rebuild RPG Maker 2000 and 2003 game data. |
| **RPG Maker XP / VX / VX Ace** | Translate RGSS-based RPG Maker data and scripts. |
| **RPG Maker MV / MZ** | Translate database JSON, events, system text, and JavaScript/plugin content. |
| **RPG Developer Bakin** | Localization workflow for Bakin game data. |
| **Pixel Game Maker MV** | End-to-end support for Pixel Game Maker MV / Action Game Maker MV. |
| **Wolf RPG Editor** | Parse Wolf RPG data and map files and create translated output. |
| **Ren'Py** | Parse Ren'Py scripts and produce translated project content. |
| **KiriKiri / KAG** | Translate KiriKiri Adventure Game System scenarios and KAG/KS scripts. |
| **TyranoScript / TyranoBuilder** | Extract and rebuild Tyrano visual-novel scripts. |
| **NScripter / ONScripter** | Parse and export NScripter and ONScripter scripts. |
| **Unity** | Translate Unity assets directly or work with XUnity.AutoTranslator translation tables. |
| **Unreal Engine** | Extract localization resources and cooked-asset text where supported; produce a drop-in override package. |
| **Godot** | Extract Godot localization text and produce a drop-in override package. |
| **SRPG Studio** | Translate SRPG Studio data with standard and alternative parser workflows. |
| **Artemis Engine** | End-to-end support for Artemis-engine game resources and scripts. |
| **Action Editor 4** | Parse Action Editor 4 text for translation. |
| **YU-RIS** | Parse, edit, and rebuild YU-RIS visual-novel scripts. |
| **LiveMaker** | Translate LiveMaker games through `pylivemaker`. |
| **Light.vn** | Localization workflow for Light.vn visual novels. |
| **VNTextPatch engines** | ArcGameEngine, Ethornell, CatSystem2, Cyberworks C / C-System, Musica, KiriKiri, Propeller, RealLive, Ren'Py, ShSystem, Qlie, SystemNNN, WillPlus AdvHD, and YU-RIS. |

Translator++ also works with **JSON, XML, PO/MO, EPUB, Windows resources** (`.exe`, `.dll`, `.res`, `.rc`), and spreadsheets including **XLS, XLSX, ODS, CSV, SYLK, Gnumeric, XML, and HTML**. Its Custom Parser default library includes **SSA, ASS, SRT, WebVTT/VTT, and YouTube SBV subtitle parsers**, plus LRC lyric files; it preserves subtitle timing and format data while replacing the translatable text. For an unknown text format, the Custom Parser can extract and replace strings with regular expressions and JavaScript functions.

## Supported machine translators and AI

A full Translator++ installation can register **60+ translator-engine instances**. The running build inspected for this page reported 63. The table below groups the production-facing integrations found in the runtime and add-on code; helper, test, and sample engines are not advertised.

| Category | Available integrations |
| --- | --- |
| **Official and cloud APIs** | Alibaba Cloud MT, Azure Translator, Baidu Translate API, DeepL Pro, Google Translate API, Google Cloud Basic, Google Cloud Advanced, Huawei Cloud MT, Microsoft Translator, Tencent Cloud TMT, Volcengine Translate API, Yandex Cloud Translate, Youdao API, and IBM Watson. |
| **Web translation services** | Alibaba, Baidu Web, Babylon, Bing, Bing Alternative, Caiyun Xiaoyi, DeepL, Excite, Google, Google Free V2, Google RPA, Google Translate Webscrap, iFlytek, iTranslate, Kakao, LingvaNex, ModernMT, Niutrans, Papago, Pragma6, PROMPT/Online-Translator, QQ Transmart, Reverso, Sogou, Translate.com, Volcengine, and Yandex. |
| **Generative AI and compatible APIs** | OpenAI Chat, OpenAI Text Complete, Gemini AI Native, Gemini Nano / Chrome on-device translation, LiteLLM Unified AI Translation, GPT4All Text Complete, KoboldAI Translator, KoboldAI Llama 3, Bing AI, and DazedMTLTool integration. |
| **Local and offline workflows** | Sugoi Translator, Red Sugoi, Itsudemo Jisho, TransEZ / ezTrans XP, GPT4All, KoboldAI-compatible local servers, and supported on-device browser translation models. |
| **Asynchronous and large-project batch tools** | OpenAI Batch API, LLM Batch API for OpenAI and Gemini, Red Batch, and translator-independent batch processing. |
| **Aggregators and custom services** | PyTranslators exposes 30+ providers—including Apertium, Argos, DeepL, Google, Baidu, Bing, Papago, Reverso, and others—while Translation Proxy can connect a custom translation service. |

**Translation Memory** is also available as a non-machine source of previously approved translations. Translator availability, language pairs, quotas, and pricing are controlled by each provider; some integrations require an API key, account, local program, or additional download, and web endpoints can change without notice.

## The translation workspace

Translator++ uses a spreadsheet-like CAT grid built around game data rather than plain documents.

- Keep the original text and multiple translation candidates side by side.
- Preserve file and event context so identical source strings can have different translations where needed.
- Display character names and a raw snippet of the original script, making it easy to see where the selected text appears relative to surrounding lines.
- Attach speaker/actor information, parameters, notes, comments, bookmarks, and colored review tags.
- Search, filter, find/replace, select ranges, track progress, and batch-process large projects.
- Import existing work while retaining translations, tags, notes, context translations, and cell metadata.
- Protect RPG Maker control codes and other structured placeholders with configurable escape algorithms.
- Export translated files, inject them into another game directory, or build engine-specific patch output.
- Use Translation Memory, Common Reference, and Actor Reference data to keep names and terminology consistent.

## Image translation without a separate editor

Image Translator turns detected image text into normal Translator++ rows, so the same translators, review tools, and automation can be used for dialogue images, signs, menus, and UI artwork.

- Local OCR through Windows OneOCR (Snipping Tool model).
- Paragraph grouping and preserved OCR coordinates.
- Interactive move, resize, rotate, pan, and zoom controls.
- Font, automatic/manual sizing, word wrapping, horizontal/vertical alignment, foreground/background colors, outline, and per-layer opacity.
- Batch styling across OCR text boxes.
- Reversible local LaMa inpainting through an on-demand ComfyUI runtime.
- Layer visibility controls and final image composition during export.

## Automation, API, and MCP

Repetitive localization work should be scriptable.

Translator++ includes JavaScript automation workspaces for global tasks, object iteration, row iteration, grid selections, and found cells. Automations can edit text and row metadata, call the Translator++ runtime, and define a JSON-Schema form for user input.

While Translator++ is running, local integrations can use:

| Endpoint | Purpose |
| --- | --- |
| `GET http://127.0.0.1:22883/api/tools` | Discover the current tool catalog. |
| `POST http://127.0.0.1:22883/api/call` | Call a registered project, cell, translator, OCR, image, or automation tool. |
| `POST http://127.0.0.1:22883/api/exec` | Run advanced JavaScript inside the Translator++ application environment. |
| `POST http://127.0.0.1:22883/mcp` | Connect an MCP-capable client or AI agent through Streamable HTTP. |

The server is bound to localhost. Because `/api/exec` can execute arbitrary code in the application process, do not expose port `22883` to untrusted networks.

## Extend Translator++

If your game or workflow is not supported, you do not have to wait for a vendor roadmap.

- **Custom Parser:** describe text extraction and replacement with regular expressions and JavaScript, or start from the included SSA, ASS, SRT, WebVTT/VTT, SBV, and LRC templates.
- **Parser add-ons:** use the parser framework to detect a game, extract strings with context, and implement export or injection.
- **Translator engines:** connect another web service, official API, OpenAI-compatible endpoint, or local model.
- **General add-ons:** add UI, commands, project processing, proofreaders, exporters, and integrations.
- **Agent tools:** register a new API tool once and make it available through both the JSON API and MCP.

Developer guides are included with the Translator++ distribution, and community contributions, documentation fixes, parser requests, and bug reports are welcome here.

## Download, contribute, and follow development

- Download Translator++ from [dreamsavior.net/download](https://dreamsavior.net/download/).
- Read the [Translator++ documentation](https://dreamsavior.net/docs/translator/).
- Ask questions and meet other translators on [Discord](https://discord.gg/6Dv97C87xt).
- Use [Issues](../../issues) for reproducible bugs and feature requests.
- Use [Discussions](../../discussions) for ideas, workflows, parser research, and community help.

Translator++ is licensed under the [GNU General Public License v3.0](LICENSE). Game-engine and translation-provider names belong to their respective owners. Translator++ is an independent project and is not affiliated with those vendors. Please respect the license and distribution rights of every game you translate.
