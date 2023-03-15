import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from "ngx-highlightjs";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HighlightModule
  ],
  exports: [
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumber: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        // lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        themePath: 'node_modules/highlight.js/styles/github.css',
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    }
  ]
})
export class SharedModule { }
