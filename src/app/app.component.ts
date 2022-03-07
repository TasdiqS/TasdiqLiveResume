import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Live Resume - Tasdiq Shaikh";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Web Developer, Java Developer, Full-stack Java Developer, DevOps Engineer, Tasdiq Shaikh Live Resume, Tasdiq Shaikh Resume, Tasdiq Shaikh CV, Curriculum Tasdiq, Tasdiq Resumo, tasdiq live resume" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Tasdiq Shaikh" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2022-03-01", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I'm a Angular and Java Developer. Find out more in my live-resume below!" }
    );
  }
}
