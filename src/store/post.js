import { defineStore } from "pinia";
import { useRoute, useRouter } from "vue-router";

// Markdown Imports ----------------------------------*/
import markdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTocDoneRight from 'markdown-it-toc-done-right'
import matter from 'gray-matter';
import uslug from "uslug";
/*----------------------------------------------------*/

export const usePostStore = defineStore('post', {
    id: 'post',
    store: () => {
        return {
            frontmatter: {},
            toc: '',
            content: '',
            markdownFile: {},
            markdownFileList: undefined,
        }
    },

    getters: {
    },

    actions: {
        async fetchContent() {

            const route = useRoute();

            this.slug = route.params.slug;

            const md = markdownIt({ html: true })
                .use(markdownItAnchor, { slugify: (s) => { return uslug(s) }, })
                .use(markdownItTocDoneRight, {
                    containerClass: 'toc', // TOC 컨테이너 클래스 설정
                    slugify: (s) => { return uslug(s) },
                    callback: (html, ast) => {
                        let toc = generateToc(ast);
                        toc = `<nav>${toc}</nav>`;
                        this.toc = toc;
                    }
                });

                function generateToc(node) {
                    let html = "";
                    // 현재 노드의 이름이 있는 경우 li 요소로 감싸기
                    if (node.n) {
                        let padding = 'ps-3';
                        if(node.l === 1) {
                            padding = '';
                        }
                        html += `<li class="text-sm text-slate-500 ${padding}"><a href="#${uslug(node.n)}">${node.n}`;
                    }
                
                    // "c" 키가 배열이고, 배열에 요소가 있는 경우 ul로 감싸고 재귀 호출
                    if (Array.isArray(node.c) && node.c.length > 0) {
                        html += "<ul>";
                        node.c.forEach(childNode => {
                            html += generateToc(childNode); // 하위 노드를 재귀적으로 처리
                        });
                        html += "</ul>";
                    }
                
                    // 현재 노드가 li로 시작했다면 li를 닫기
                    if (node.n) {
                        html += "</a></li>";
                    }
                
                    return html;
                }



            

            this.markdownFile = await this.markdownFileLoad(this.slug);

            const matterObject = matter(this.markdownFile);

            this.frontmatter = matterObject.data;

            this.content = md.render(matterObject.content);

            const data = {
                frontmatter: this.frontmatter,
                toc: this.toc,
                content: this.content
            }

            return data;
        },

        async markdownFileLoad(filename) {
            try {
                const filePath = `/posts/${filename}.md`;
                await this.markdownListLoad();

                if (this.markdownFileList[filePath]) {
                    const module = await this.markdownFileList[filePath]();
                    return module.default;
                } else {
                    console.error(`File ${filename}.md not found`);
                    return '';
                }
            } catch (error) {
                console.error(`Failed to load ${filename}.md`, error);
                return '';
            }
        },
        async markdownListLoad() {
            if (this.markdownFileList === undefined) {
                this.markdownFileList = await import.meta.glob('/posts/*.md');
            }
        },
        replaceOccurrence(str, pattern, replacement) {
            // pattern을 모두 찾기 위해 global 플래그 사용
            const regex = new RegExp(pattern, 'g');
            let match;
            let count = 0;

            // pattern을 순차적으로 찾으면서 두 번째 occurrence를 체크
            while ((match = regex.exec(str)) !== null) {
                count++;
                if (count === 2) {
                    // 두 번째 occurrence가 시작되는 인덱스를 구함
                    const start = match.index;
                    // 치환 결과를 반환
                    return str.substring(0, start) + str.substring(start).replace(regex, replacement);
                }
            }

            // 만약 패턴이 2번 이상 등장하지 않으면 원본 문자열 반환
            return str;
        }
    }

});