import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext){
    return rss({
        title: "Sinno Technologies Limited - RSS Feed",
        description: "Professional Software Development and Web Accessibility Auditing Services.",
        site: context.site?.toString() || "https://www.sinno.ca",
        items:[
            {
                title: "Sinno Technologies Limited",
                link: "https://www.sinno.ca",
                pubDate: new Date()
            }
        ]})
    }