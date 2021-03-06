"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mermaid = void 0;
const shared_1 = require("@vuepress/shared");
const utils_1 = require("@vuepress/utils");
const mermaid = (md) => {
    const temp = md.renderer.rules.fence.bind(md.renderer.rules);
    md.renderer.rules.fence = (tokens, index, options, env, slf) => {
        const token = tokens[index];
        if (token.info.trim() === "mermaid") {
            try {
                const key = `mermaid_${(0, utils_1.hash)(index)}`;
                const content = (0, shared_1.htmlEscape)(token.content.trim());
                return `<Mermaid id="${key}" data-code="${content}"></Mermaid>`;
            }
            catch (err) {
                return `<pre>${err}</pre>`;
            }
        }
        return temp(tokens, index, options, env, slf);
    };
};
exports.mermaid = mermaid;
