var HTML = "<div class=\"jb-searchbar-web-component\">\r\n    <div class=\"search-dynamic-wrapper\">\r\n        <section class=\"filter-list-section\"></section>\r\n        <section class=\"filter-input-section\">\r\n            <div class=\"column-select-wrapper\">\r\n                 <jb-select class=\"column-select\"></jb-select>\r\n            </div>\r\n            <div class=\"intent-wrapper --hide\">\r\n                <div class=\"intent-column\"></div>\r\n                <div class=\"intent-input-wrapper\"></div>\r\n                <div class=\"intent-submit-button\">\r\n                    <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 493.464 493.464\" space=\"preserve\">\r\n                        <g>\r\n                            <g>\r\n                                <path d=\"M246.736,0C110.692,0,0.004,110.68,0.004,246.732c0,136.06,110.688,246.732,246.732,246.732    c136.048,0,246.724-110.672,246.724-246.732C493.456,110.68,382.78,0,246.736,0z M360.524,208.716L230.98,338.268    c-2.82,2.824-7.816,2.824-10.64,0l-86.908-86.912c-1.412-1.416-2.192-3.3-2.192-5.324c0.004-2.016,0.784-3.912,2.192-5.336    l11.108-11.104c1.412-1.408,3.3-2.18,5.328-2.18c2.016,0,3.908,0.772,5.316,2.18l67.752,67.752c1.5,1.516,3.94,1.516,5.444,0    l110.392-110.392c2.824-2.824,7.828-2.824,10.644,0l11.108,11.124c1.412,1.4,2.208,3.304,2.208,5.308    C362.732,205.412,361.936,207.3,360.524,208.716z\"/>\r\n                            </g>\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"search-button-wrapper\">\r\n        s\r\n    </div>\r\n</div>";

var css_248z = ".jb-searchbar-web-component {\n  width: 100%;\n  height: auto;\n  min-height: 48px;\n  background-color: #fff;\n  direction: rtl;\n  display: flex;\n  border-bottom: 4px solid #000; }\n  .jb-searchbar-web-component .search-dynamic-wrapper {\n    width: calc(100% - 48px);\n    height: auto;\n    min-height: 48px; }\n    .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section {\n      display: inline-block; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item {\n        display: inline-block;\n        margin: 0 4px;\n        padding: 2px 8px;\n        background-color: red;\n        color: #fff;\n        border-radius: 36px; }\n    .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section {\n      --jb-select-margin: 0 0;\n      --jb-select-border-radius: 0px;\n      --jb-select-border-color: transparent;\n      --jb-select-border-color-selected: transparent;\n      --jb-select-bgcolor: #fff;\n      display: inline-block; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper {\n        width: 240px; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper.--hide {\n          display: none; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper {\n        display: flex;\n        align-items: center; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-input-wrapper {\n          --jb-input-margin: 0 0;\n          --jb-input-border-radius: 0px;\n          --jb-input-border-color: transparent;\n          --jb-input-border-color-focus: transparent;\n          --jb-input-bgcolor: #fff; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button {\n          width: 32px;\n          height: 32px;\n          float: right;\n          padding: 4px 0 4px 0;\n          cursor: not-allowed; }\n          .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active {\n            cursor: pointer; }\n            .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active svg {\n              fill: #28BD48; }\n          .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button svg {\n            fill: #929292; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper.--hide {\n          display: none; }\n  .jb-searchbar-web-component .search-button-wrapper {\n    width: 48px;\n    background-color: burlywood;\n    height: auto;\n    min-height: 48px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkpCU2VhcmNoYmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGFBQWE7RUFDYiw2QkFBNkIsRUFBRTtFQUMvQjtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZ0JBQWdCLEVBQUU7SUFDbEI7TUFDRSxxQkFBcUIsRUFBRTtNQUN2QjtRQUNFLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsbUJBQW1CLEVBQUU7SUFDekI7TUFDRSx1QkFBdUI7TUFDdkIsOEJBQThCO01BQzlCLHFDQUFxQztNQUNyQyw4Q0FBOEM7TUFDOUMseUJBQXlCO01BQ3pCLHFCQUFxQixFQUFFO01BQ3ZCO1FBQ0UsWUFBWSxFQUFFO1FBQ2Q7VUFDRSxhQUFhLEVBQUU7TUFDbkI7UUFDRSxhQUFhO1FBQ2IsbUJBQW1CLEVBQUU7UUFDckI7VUFDRSxzQkFBc0I7VUFDdEIsNkJBQTZCO1VBQzdCLG9DQUFvQztVQUNwQywwQ0FBMEM7VUFDMUMsd0JBQXdCLEVBQUU7UUFDNUI7VUFDRSxXQUFXO1VBQ1gsWUFBWTtVQUNaLFlBQVk7VUFDWixvQkFBb0I7VUFDcEIsbUJBQW1CLEVBQUU7VUFDckI7WUFDRSxlQUFlLEVBQUU7WUFDakI7Y0FDRSxhQUFhLEVBQUU7VUFDbkI7WUFDRSxhQUFhLEVBQUU7UUFDbkI7VUFDRSxhQUFhLEVBQUU7RUFDdkI7SUFDRSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixnQkFBZ0IsRUFBRSIsImZpbGUiOiJKQlNlYXJjaGJhci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDAwOyB9XG4gIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiA0OHB4OyB9XG4gICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItbGlzdC1zZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItbGlzdC1zZWN0aW9uIC5maWx0ZXItaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICAgICAgcGFkZGluZzogMnB4IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzZweDsgfVxuICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWlucHV0LXNlY3Rpb24ge1xuICAgICAgLS1qYi1zZWxlY3QtbWFyZ2luOiAwIDA7XG4gICAgICAtLWpiLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAtLWpiLXNlbGVjdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgLS1qYi1zZWxlY3QtYm9yZGVyLWNvbG9yLXNlbGVjdGVkOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tamItc2VsZWN0LWJnY29sb3I6ICNmZmY7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWlucHV0LXNlY3Rpb24gLmNvbHVtbi1zZWxlY3Qtd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAyNDBweDsgfVxuICAgICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1keW5hbWljLXdyYXBwZXIgLmZpbHRlci1pbnB1dC1zZWN0aW9uIC5jb2x1bW4tc2VsZWN0LXdyYXBwZXIuLS1oaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1keW5hbWljLXdyYXBwZXIgLmZpbHRlci1pbnB1dC1zZWN0aW9uIC5pbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiAuaW50ZW50LXdyYXBwZXIgLmludGVudC1pbnB1dC13cmFwcGVyIHtcbiAgICAgICAgICAtLWpiLWlucHV0LW1hcmdpbjogMCAwO1xuICAgICAgICAgIC0tamItaW5wdXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgIC0tamItaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtLWpiLWlucHV0LWJvcmRlci1jb2xvci1mb2N1czogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLS1qYi1pbnB1dC1iZ2NvbG9yOiAjZmZmOyB9XG4gICAgICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWlucHV0LXNlY3Rpb24gLmludGVudC13cmFwcGVyIC5pbnRlbnQtc3VibWl0LWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMCA0cHggMDtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4gICAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiAuaW50ZW50LXdyYXBwZXIgLmludGVudC1zdWJtaXQtYnV0dG9uLi0tYWN0aXZlIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiAuaW50ZW50LXdyYXBwZXIgLmludGVudC1zdWJtaXQtYnV0dG9uLi0tYWN0aXZlIHN2ZyB7XG4gICAgICAgICAgICAgIGZpbGw6ICMyOEJENDg7IH1cbiAgICAgICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1keW5hbWljLXdyYXBwZXIgLmZpbHRlci1pbnB1dC1zZWN0aW9uIC5pbnRlbnQtd3JhcHBlciAuaW50ZW50LXN1Ym1pdC1idXR0b24gc3ZnIHtcbiAgICAgICAgICAgIGZpbGw6ICM5MjkyOTI7IH1cbiAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiAuaW50ZW50LXdyYXBwZXIuLS1oaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWJ1dHRvbi13cmFwcGVyIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7IH1cbiJdfQ== */";

var HTML$1 = "<div class=\"jb-select-web-component\">\r\n    <label class=\"--hide\"><span class=\"label-value\"></span><span>:</span></label>\r\n    <div class=\"select-box\">\r\n        <input class=\"input\">\r\n    </div>\r\n    <div class=\"select-list-wrapper\">\r\n        <div class=\"select-list\" tabindex=\"-1\">\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"message-box\"></div>\r\n</div>";

var css_248z$1 = ".jb-select-web-component {\n  width: 100%;\n  margin: var(--jb-select-margin, 12px 0);\n  position: relative;\n  box-sizing: border-box;\n  direction: rtl; }\n  @media (min-width: 320px) and (max-width: 767px) {\n    .jb-select-web-component.--focused {\n      position: absolute;\n      top: 0;\n      left: 0;\n      background-color: #0008;\n      width: 100vw;\n      height: 100vh;\n      margin: 0;\n      padding: 16px 8px;\n      z-index: 900; } }\n  @media (min-width: 320px) and (max-width: 767px) {\n    .jb-select-web-component.--focused .select-list-wrapper {\n      position: initial;\n      margin: 16px 0;\n      border-radius: var(--jb-select-border-radius, 16px); } }\n  @media (min-width: 320px) and (max-width: 767px) {\n    .jb-select-web-component.--focused label {\n      color: #fff;\n      font-size: 1.5em; } }\n  .jb-select-web-component.--has-value .select-box {\n    border-color: var(--jb-select-border-color-selected, #c3ff14); }\n  .jb-select-web-component label {\n    width: 100%;\n    margin: 4px 0px;\n    display: block;\n    font-size: 0.8em;\n    color: #1f1735; }\n    .jb-select-web-component label.--hide {\n      display: none; }\n  .jb-select-web-component .select-box {\n    width: 100%;\n    box-sizing: border-box;\n    height: 40px;\n    border: solid 1px var(--jb-select-border-color, #f7f6f6);\n    background-color: var(--jb-select-bgcolor, #f7f6f6);\n    border-bottom: solid 3px var(--jb-select-border-color, #f7f6f6);\n    border-radius: var(--jb-select-border-radius, 16px);\n    margin: 4px 0px;\n    display: block;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-between; }\n    .jb-select-web-component .select-box:focus-within {\n      border-color: #1e2832;\n      border-bottom-color: var(--jb-select-border-color, #f7f6f6);\n      border-radius: var(--jb-select-border-radius, 16px) var(--jb-select-border-radius, 16px) 0 0; }\n      @media (min-width: 320px) and (max-width: 767px) {\n        .jb-select-web-component .select-box:focus-within {\n          border-radius: var(--jb-select-border-radius, 16px);\n          border-bottom-color: #1e2832; } }\n    .jb-select-web-component .select-box input {\n      border: none;\n      width: 100%;\n      box-sizing: border-box;\n      height: 100%;\n      background-color: transparent;\n      padding: 2px 12px 0 12px;\n      display: block;\n      font-family: inherit;\n      font-size: 1.1em;\n      color: #1f1735;\n      margin: 0;\n      border-radius: 0; }\n      .jb-select-web-component .select-box input:focus {\n        outline: none; }\n  .jb-select-web-component .message-box {\n    font-size: 0.7em;\n    padding: 2px 8px;\n    color: #929292; }\n    .jb-select-web-component .message-box:empty {\n      padding: 0; }\n    .jb-select-web-component .message-box.--error {\n      color: red; }\n  .jb-select-web-component .select-list-wrapper {\n    display: none;\n    position: absolute;\n    margin: -6px 0;\n    height: auto;\n    overflow: hidden;\n    width: 100%;\n    background-color: var(--jb-select-bgcolor, #f7f6f6);\n    border-radius: 0 0 var(--jb-select-border-radius, 16px) var(--jb-select-border-radius, 16px);\n    border: solid 1px #1e2832;\n    border-top: none;\n    border-bottom: solid 3px #1e2832;\n    box-sizing: border-box;\n    z-index: 999; }\n    .jb-select-web-component .select-list-wrapper.--show {\n      display: block; }\n    .jb-select-web-component .select-list-wrapper .select-list {\n      width: 100%;\n      max-height: 400px;\n      overflow-y: auto;\n      padding: 16px 0; }\n      @media (min-width: 320px) and (max-width: 767px) {\n        .jb-select-web-component .select-list-wrapper .select-list {\n          max-height: calc(100vh - 240px); } }\n      .jb-select-web-component .select-list-wrapper .select-list .select-option {\n        min-height: 36px;\n        padding: 4px 16px;\n        display: flex;\n        align-items: center;\n        font-size: 0.9em; }\n        .jb-select-web-component .select-list-wrapper .select-list .select-option:hover {\n          background-color: #1073db;\n          color: #fff;\n          cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkpCU2VsZWN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYyxFQUFFO0VBQ2hCO0lBQ0U7TUFDRSxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLE9BQU87TUFDUCx1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLGFBQWE7TUFDYixTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLFlBQVksRUFBRSxFQUFFO0VBQ3BCO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsY0FBYztNQUNkLG1EQUFtRCxFQUFFLEVBQUU7RUFDM0Q7SUFDRTtNQUNFLFdBQVc7TUFDWCxnQkFBZ0IsRUFBRSxFQUFFO0VBQ3hCO0lBQ0UsNkRBQTZELEVBQUU7RUFDakU7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFFO0lBQ2hCO01BQ0UsYUFBYSxFQUFFO0VBQ25CO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osd0RBQXdEO0lBQ3hELG1EQUFtRDtJQUNuRCwrREFBK0Q7SUFDL0QsbURBQW1EO0lBQ25ELGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEIsRUFBRTtJQUNoQztNQUNFLHFCQUFxQjtNQUNyQiwyREFBMkQ7TUFDM0QsNEZBQTRGLEVBQUU7TUFDOUY7UUFDRTtVQUNFLG1EQUFtRDtVQUNuRCw0QkFBNEIsRUFBRSxFQUFFO0lBQ3RDO01BQ0UsWUFBWTtNQUNaLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLDZCQUE2QjtNQUM3Qix3QkFBd0I7TUFDeEIsY0FBYztNQUNkLG9CQUFvQjtNQUNwQixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLFNBQVM7TUFDVCxnQkFBZ0IsRUFBRTtNQUNsQjtRQUNFLGFBQWEsRUFBRTtFQUNyQjtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYyxFQUFFO0lBQ2hCO01BQ0UsVUFBVSxFQUFFO0lBQ2Q7TUFDRSxVQUFVLEVBQUU7RUFDaEI7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxtREFBbUQ7SUFDbkQsNEZBQTRGO0lBQzVGLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixZQUFZLEVBQUU7SUFDZDtNQUNFLGNBQWMsRUFBRTtJQUNsQjtNQUNFLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBRTtNQUNqQjtRQUNFO1VBQ0UsK0JBQStCLEVBQUUsRUFBRTtNQUN2QztRQUNFLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixnQkFBZ0IsRUFBRTtRQUNsQjtVQUNFLHlCQUF5QjtVQUN6QixXQUFXO1VBQ1gsZUFBZSxFQUFFIiwiZmlsZSI6IkpCU2VsZWN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuamItc2VsZWN0LXdlYi1jb21wb25lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiB2YXIoLS1qYi1zZWxlY3QtbWFyZ2luLCAxMnB4IDApO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpcmVjdGlvbjogcnRsOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmpiLXNlbGVjdC13ZWItY29tcG9uZW50Li0tZm9jdXNlZCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDg7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMTZweCA4cHg7XG4gICAgICB6LWluZGV4OiA5MDA7IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5qYi1zZWxlY3Qtd2ViLWNvbXBvbmVudC4tLWZvY3VzZWQgLnNlbGVjdC1saXN0LXdyYXBwZXIge1xuICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWpiLXNlbGVjdC1ib3JkZXItcmFkaXVzLCAxNnB4KTsgfSB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmpiLXNlbGVjdC13ZWItY29tcG9uZW50Li0tZm9jdXNlZCBsYWJlbCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07IH0gfVxuICAuamItc2VsZWN0LXdlYi1jb21wb25lbnQuLS1oYXMtdmFsdWUgLnNlbGVjdC1ib3gge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tamItc2VsZWN0LWJvcmRlci1jb2xvci1zZWxlY3RlZCwgI2MzZmYxNCk7IH1cbiAgLmpiLXNlbGVjdC13ZWItY29tcG9uZW50IGxhYmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDRweCAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogIzFmMTczNTsgfVxuICAgIC5qYi1zZWxlY3Qtd2ViLWNvbXBvbmVudCBsYWJlbC4tLWhpZGUge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAuamItc2VsZWN0LXdlYi1jb21wb25lbnQgLnNlbGVjdC1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWpiLXNlbGVjdC1ib3JkZXItY29sb3IsICNmN2Y2ZjYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWpiLXNlbGVjdC1iZ2NvbG9yLCAjZjdmNmY2KTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggdmFyKC0tamItc2VsZWN0LWJvcmRlci1jb2xvciwgI2Y3ZjZmNik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tamItc2VsZWN0LWJvcmRlci1yYWRpdXMsIDE2cHgpO1xuICAgIG1hcmdpbjogNHB4IDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG4gICAgLmpiLXNlbGVjdC13ZWItY29tcG9uZW50IC5zZWxlY3QtYm94OmZvY3VzLXdpdGhpbiB7XG4gICAgICBib3JkZXItY29sb3I6ICMxZTI4MzI7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1qYi1zZWxlY3QtYm9yZGVyLWNvbG9yLCAjZjdmNmY2KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWpiLXNlbGVjdC1ib3JkZXItcmFkaXVzLCAxNnB4KSB2YXIoLS1qYi1zZWxlY3QtYm9yZGVyLXJhZGl1cywgMTZweCkgMCAwOyB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAuamItc2VsZWN0LXdlYi1jb21wb25lbnQgLnNlbGVjdC1ib3g6Zm9jdXMtd2l0aGluIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1qYi1zZWxlY3QtYm9yZGVyLXJhZGl1cywgMTZweCk7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFlMjgzMjsgfSB9XG4gICAgLmpiLXNlbGVjdC13ZWItY29tcG9uZW50IC5zZWxlY3QtYm94IGlucHV0IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgcGFkZGluZzogMnB4IDEycHggMCAxMnB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICBjb2xvcjogIzFmMTczNTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cbiAgICAgIC5qYi1zZWxlY3Qtd2ViLWNvbXBvbmVudCAuc2VsZWN0LWJveCBpbnB1dDpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLmpiLXNlbGVjdC13ZWItY29tcG9uZW50IC5tZXNzYWdlLWJveCB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgIGNvbG9yOiAjOTI5MjkyOyB9XG4gICAgLmpiLXNlbGVjdC13ZWItY29tcG9uZW50IC5tZXNzYWdlLWJveDplbXB0eSB7XG4gICAgICBwYWRkaW5nOiAwOyB9XG4gICAgLmpiLXNlbGVjdC13ZWItY29tcG9uZW50IC5tZXNzYWdlLWJveC4tLWVycm9yIHtcbiAgICAgIGNvbG9yOiByZWQ7IH1cbiAgLmpiLXNlbGVjdC13ZWItY29tcG9uZW50IC5zZWxlY3QtbGlzdC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IC02cHggMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1qYi1zZWxlY3QtYmdjb2xvciwgI2Y3ZjZmNik7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLWpiLXNlbGVjdC1ib3JkZXItcmFkaXVzLCAxNnB4KSB2YXIoLS1qYi1zZWxlY3QtYm9yZGVyLXJhZGl1cywgMTZweCk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzFlMjgzMjtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjMWUyODMyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogOTk5OyB9XG4gICAgLmpiLXNlbGVjdC13ZWItY29tcG9uZW50IC5zZWxlY3QtbGlzdC13cmFwcGVyLi0tc2hvdyB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5qYi1zZWxlY3Qtd2ViLWNvbXBvbmVudCAuc2VsZWN0LWxpc3Qtd3JhcHBlciAuc2VsZWN0LWxpc3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBwYWRkaW5nOiAxNnB4IDA7IH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIC5qYi1zZWxlY3Qtd2ViLWNvbXBvbmVudCAuc2VsZWN0LWxpc3Qtd3JhcHBlciAuc2VsZWN0LWxpc3Qge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7IH0gfVxuICAgICAgLmpiLXNlbGVjdC13ZWItY29tcG9uZW50IC5zZWxlY3QtbGlzdC13cmFwcGVyIC5zZWxlY3QtbGlzdCAuc2VsZWN0LW9wdGlvbiB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDAuOWVtOyB9XG4gICAgICAgIC5qYi1zZWxlY3Qtd2ViLWNvbXBvbmVudCAuc2VsZWN0LWxpc3Qtd3JhcHBlciAuc2VsZWN0LWxpc3QgLnNlbGVjdC1vcHRpb246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDczZGI7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4iXX0= */";

class JBSelectWebComponent extends HTMLElement {
    get value() {
        if(this._value){
            return this.callbacks.getOptionValue(this._value);
        }else {
            return null;
        }
    }
    set value(value) {
        this._setValueFromOutside(value);
    }
    get textValue() {
        return this._textValue
    }
    set textValue(value) {
        this._textValue = value;
        this._inputElement.value = value;
    }
    get optionList() {
        return this._optionList || [];
    }
    set optionList(value) {
        //TODO: add validation and check if its array
        this._optionList = value;
        //every time optionList get updated we set our value base on current option list we use _notFindedValue in case of value provided to component before optionList
        this._displayOptionList = this.filterOptionList(this.textValue);
        this._setValueFromOutside(this.value || this._notFindedValue);
        this.updateOptionListDOM();
    }
    get displayOptionList() {
        return this._displayOptionList;
    }
    get isMobileDevice (){ return /Mobi/i.test(window.navigator.userAgent)}


    constructor() {
        super();
        this.initWebComponent();
        
    }
    connectedCallback() {
        // standard web component event that called when all of dom is binded
        this.callOnLoadEvent();
        this.initProp();
        this.callOnInitEvent();
    }
    callOnInitEvent() {
        var event = new CustomEvent('init', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
    callOnLoadEvent() {
        var event = new CustomEvent('load', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
    initWebComponent() {
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this._html = `<style>${css_248z$1}</style>` + '\n' + HTML$1;
        this._element = document.createElement('template');
        this._element.innerHTML = this._html;
        this._shadowRoot.appendChild(this._element.content.cloneNode(true));
        this._webComponentWrapper = this._shadowRoot.querySelector('.jb-select-web-component');
        this._inputElement = this._shadowRoot.querySelector('.select-box input');
        this._optionListElement = this._shadowRoot.querySelector('.select-list');
        this._optionListElementWrapper = this._shadowRoot.querySelector('.select-list-wrapper');
        this.registerEventListener();
       
    }
    registerEventListener() {
        this._inputElement.addEventListener('change', this.onInputChange.bind(this));
        this._inputElement.addEventListener('keypress', this.onInputKeyPress.bind(this));
        this._inputElement.addEventListener('keyup', this.onInputKeyup.bind(this));
        this._inputElement.addEventListener('focus', this.onInputFocus.bind(this));
        this._inputElement.addEventListener('blur', this.onInputBlur.bind(this));
    }
    initProp() {
        this.textValue = '';
        this.callbacks = {
            getOptionTitle: (option) => { return option },
            getOptionValue: (option) => { return option }
        };
        this.value = this.getAttribute('value') || null;
        // if user set value and current option list is not contain the option. 
        // we hold it in _notFindedValue and select value when option value get updated
        this._notFindedValue = null;
        this.required = false;
    }
    static get observedAttributes() {
        return ['label', 'message', 'value', 'required'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // do something when an attribute has changed
        this.onAttributeChange(name, newValue);
    }
    onAttributeChange(name, value) {
        switch (name) {
            case 'label':
                this._shadowRoot.querySelector('label .label-value').innerHTML = value;
                if(value == null || value == undefined || value == ""){
                    this._shadowRoot.querySelector('label').classList.add('--hide');
                }else {
                    this._shadowRoot.querySelector('label').classList.remove('--hide');
                }
                break;
            case 'message':
                this._shadowRoot.querySelector('.message-box').innerHTML = value;
                break;
            case 'value':
                this._setValueFromOutside(value);
                break;
            case 'required':
                if (value === "" || value == "true" || value == true) {
                    this.required = true;
                } else {
                    this.required = false;
                }
                break;
        }

    }
    _setValueFromOutside(value) {
        //when user set value by attribute or value prop directly we call this function
        const matchedOption = this.optionList.find((option) => { // if we have value mapper we set selected value by object that match mapper
            if (this.callbacks.getOptionValue(option) == value) {
                return option;
            }
        });
        if (matchedOption) {
            this._setValue(matchedOption);
        } else {
            this._notFindedValue = value;
        }

    }
    _setValue(value) {
        this._notFindedValue = null;
        this._value = value;
        if (value == null || value == undefined) {
            this.textValue = '';
            this._shadowRoot.querySelector('.jb-select-web-component').classList.remove('--has-value');
        } else {
            this.textValue = this.callbacks.getOptionTitle(value);
            this._shadowRoot.querySelector('.jb-select-web-component').classList.add('--has-value');
        }
        //if user select an option we rest filter so user see all option again when open a select
        this.updateOptionList('');
    }
    onInputKeyPress() {
        //TODO: raise keypress event
        //hint: keypres dont called on backspace key
        this.onUserTypeResetValue();
    }
    onInputKeyup(e) {
        const inputText = e.target.value;
        //here is the rare  time we update _value directly becuase we want trigger event that may read value directly from dom
        if (e.key === "Backspace") {
            //becuase on keyprees dont recieve backspace key press
            //we use keypress and dont do it all here becuase we dont want arrow key or any other function key to reset value 
            this.onUserTypeResetValue();
        }
        this._textValue = inputText;
        this.updateOptionList(inputText);
    }
    onUserTypeResetValue() {
        //when use type but dont select we want to reset value becuase typed value is not a valid value
        //TODO: check if typed value is the same as current selected value title dont null it
        this._value = null;
        this._shadowRoot.querySelector('.jb-select-web-component').classList.remove('--has-value');
    }
    onInputChange(e) {
        const inputText = e.target.value;
        //here is the rare  time we update _text_value directly becuase we want trigger event that may read value directly from dom
        this._textValue = inputText;
    }
    onInputFocus() {
        this.focus();
    }
    onInputBlur(e) {
        let focusedElement = e.relatedTarget;
        if (focusedElement === this._optionListElement) {
            //user click on a menu item
            setTimeout(this.blur.bind(this), 300);
        } else {
            this.blur();
        }
    }
    focus(){
        this._webComponentWrapper.classList.add('--focused');
        this._optionListElementWrapper.classList.add('--show');
    }
    blur(){
        this._webComponentWrapper.classList.remove('--focused');
        this.hideOptionList();
        this.triggerInputValidation();
    }
    hideOptionList() {
        this._optionListElementWrapper.classList.remove('--show');
    }
    updateOptionList(filterText) {
        this._displayOptionList = this.filterOptionList(filterText);
        this.updateOptionListDOM();
    }
    updateOptionListDOM() {
        const optionDomList = [];
        this.displayOptionList.forEach((item) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('select-option');
            //it has defualt function who return wxact same input
            optionElement.innerHTML = this.callbacks.getOptionTitle(item);
            optionElement.value = item;
            optionElement.addEventListener('click', this.onOptionClicked.bind(this));
            optionDomList.push(optionElement);
        });
        this._optionListElement.innerHTML = '';
        optionDomList.forEach(optionElement => { this._optionListElement.appendChild(optionElement); });


    }
    onOptionClicked(e) {
        const value = e.target.value;
        this.selectOption(value);
        this._triggerOnChangeEvent();
    }
    selectOption(value) {
        this._setValue(value);
        this.triggerInputValidation();
    }
    filterOptionList(filterString) {
        const displayOptionList = [];
        this.optionList.filter((option) => {
            if (typeof this.callbacks.getOptionTitle(option) == 'string' && this.callbacks.getOptionTitle(option).includes(filterString)) {
                displayOptionList.push(option);
            }
        });
        return displayOptionList;
    }
    triggerInputValidation(showError = true) {
        // this method is public and used outside of component to check if field validity param are met
        let errorType = '';
        let requiredValid = true;
        if (this.required) {

            requiredValid = this.value != null;
            if (!requiredValid) {
                errorType = 'REQUIRED';
            }
        }
        let isAllValid = requiredValid; //& other validation if they added
        if (isAllValid) {
            this.clearValidationError();
        } else if (showError) {
            this.showValidationError(errorType);
        }
        return {
            isAllValid
        };
    }
    showValidationError(errorType) {
        if (errorType == 'REQUIRED') {
            const label = this.getAttribute('label');
            this._shadowRoot.querySelector('.message-box').innerHTML = `${label} حتما باید انتخاب شود`;
            this._shadowRoot.querySelector('.message-box').classList.add('--error');
        }
    }
    clearValidationError() {
        this._shadowRoot.querySelector('.message-box').innerHTML = this.getAttribute('message') || '';
        this._shadowRoot.querySelector('.message-box').classList.remove('--error');

    }
    _triggerOnChangeEvent() {
        const event = new Event("change");
        this.dispatchEvent(event);
    }
}
const myElementNotExists = !customElements.get('jb-select');
if(myElementNotExists){
    //prevent duplicate registering
    window.customElements.define('jb-select', JBSelectWebComponent);
}

var HTML$2 = "<div class=\"jb-input-web-component\">\r\n    <label class=\"--hide\"><span class=\"label-value\"></span><span>:</span></label>\r\n    <div class=\"input-box\">\r\n        <input class=\"input-box\">\r\n        <div class=\"password-trigger\">\r\n            <svg viewBox=\"0 0 120 120\">\r\n                <path class=\"eye-line\" stroke-linecap=\"round\"></path>\r\n                <circle cx=\"60\" cy=\"60\" r=\"20\"></circle>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n    <div class=\"message-box\"></div>\r\n</div>";

var css_248z$2 = ".jb-input-web-component {\n  width: 100%;\n  margin: var(--jb-input-margin, 12px 0);\n  direction: rtl; }\n  .jb-input-web-component label {\n    width: 100%;\n    margin: 4px 0px;\n    display: block;\n    font-size: 0.8em;\n    color: #1f1735; }\n    .jb-input-web-component label.--hide {\n      display: none; }\n  .jb-input-web-component .input-box {\n    width: 100%;\n    box-sizing: border-box;\n    height: 40px;\n    border: solid 1px var(--jb-input-border-color, #f7f6f6);\n    background-color: var(--jb-input-bgcolor, #f7f6f6);\n    border-bottom: solid 3px var(--jb-input-border-color, #f7f6f6);\n    border-radius: var(--jb-input-border-radius, 16px);\n    margin: 4px 0px;\n    display: block;\n    transition: ease 0.3s all;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-between; }\n    .jb-input-web-component .input-box:focus-within {\n      border-color: var(--jb-input-border-color-focus, #1e2832); }\n    .jb-input-web-component .input-box.type-password input {\n      width: calc(100% - 36px); }\n    .jb-input-web-component .input-box.type-password .password-trigger {\n      display: block;\n      height: 28px;\n      width: 28px;\n      margin: 4px 0 4px 8px;\n      cursor: pointer; }\n      .jb-input-web-component .input-box.type-password .password-trigger svg {\n        width: 100%;\n        height: 100%;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        transition: 0.2s; }\n        .jb-input-web-component .input-box.type-password .password-trigger svg.password-visible .eye-line {\n          stroke: #00b600;\n          d: path(\"M 10 60 C 30 20 100 20 110 60\"); }\n        .jb-input-web-component .input-box.type-password .password-trigger svg.password-visible circle {\n          opacity: 1;\n          transition: 0.2s 0.2s;\n          transform: translateX(8px); }\n        .jb-input-web-component .input-box.type-password .password-trigger svg .eye-line {\n          stroke-width: 14px;\n          stroke: #bbb;\n          fill: none;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          transition: 0.3s;\n          d: path(\"M 0 60 C 40 100 80 100 120 60\"); }\n        .jb-input-web-component .input-box.type-password .password-trigger svg circle {\n          fill: #00b600;\n          opacity: 0;\n          transition: 0.3s 0s; }\n    .jb-input-web-component .input-box .password-trigger {\n      display: none; }\n    .jb-input-web-component .input-box input {\n      border: none;\n      width: 100%;\n      box-sizing: border-box;\n      height: 100%;\n      background-color: transparent;\n      padding: 2px 12px 0 12px;\n      display: block;\n      font-family: inherit;\n      font-size: 1.1em;\n      color: #1f1735;\n      margin: 0;\n      border-radius: 0; }\n      .jb-input-web-component .input-box input:focus {\n        outline: none; }\n  .jb-input-web-component .message-box {\n    font-size: 0.7em;\n    padding: 2px 8px;\n    color: #929292; }\n    .jb-input-web-component .message-box:empty {\n      padding: 0; }\n    .jb-input-web-component .message-box.error {\n      color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkpCSW5wdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsY0FBYyxFQUFFO0VBQ2hCO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBRTtJQUNoQjtNQUNFLGFBQWEsRUFBRTtFQUNuQjtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHVEQUF1RDtJQUN2RCxrREFBa0Q7SUFDbEQsOERBQThEO0lBQzlELGtEQUFrRDtJQUNsRCxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QixFQUFFO0lBQ2hDO01BQ0UseURBQXlELEVBQUU7SUFDN0Q7TUFDRSx3QkFBd0IsRUFBRTtJQUM1QjtNQUNFLGNBQWM7TUFDZCxZQUFZO01BQ1osV0FBVztNQUNYLHFCQUFxQjtNQUNyQixlQUFlLEVBQUU7TUFDakI7UUFDRSxXQUFXO1FBQ1gsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsZ0JBQWdCLEVBQUU7UUFDbEI7VUFDRSxlQUFlO1VBQ2Ysd0NBQXdDLEVBQUU7UUFDNUM7VUFDRSxVQUFVO1VBQ1YscUJBQXFCO1VBQ3JCLDBCQUEwQixFQUFFO1FBQzlCO1VBQ0Usa0JBQWtCO1VBQ2xCLFlBQVk7VUFDWixVQUFVO1VBQ1YscUJBQXFCO1VBQ3JCLHNCQUFzQjtVQUN0QixnQkFBZ0I7VUFDaEIsd0NBQXdDLEVBQUU7UUFDNUM7VUFDRSxhQUFhO1VBQ2IsVUFBVTtVQUNWLG1CQUFtQixFQUFFO0lBQzNCO01BQ0UsYUFBYSxFQUFFO0lBQ2pCO01BQ0UsWUFBWTtNQUNaLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLDZCQUE2QjtNQUM3Qix3QkFBd0I7TUFDeEIsY0FBYztNQUNkLG9CQUFvQjtNQUNwQixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLFNBQVM7TUFDVCxnQkFBZ0IsRUFBRTtNQUNsQjtRQUNFLGFBQWEsRUFBRTtFQUNyQjtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYyxFQUFFO0lBQ2hCO01BQ0UsVUFBVSxFQUFFO0lBQ2Q7TUFDRSxVQUFVLEVBQUUiLCJmaWxlIjoiSkJJbnB1dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpiLWlucHV0LXdlYi1jb21wb25lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiB2YXIoLS1qYi1pbnB1dC1tYXJnaW4sIDEycHggMCk7XG4gIGRpcmVjdGlvbjogcnRsOyB9XG4gIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IGxhYmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDRweCAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogIzFmMTczNTsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IGxhYmVsLi0taGlkZSB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWpiLWlucHV0LWJvcmRlci1jb2xvciwgI2Y3ZjZmNik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tamItaW5wdXQtYmdjb2xvciwgI2Y3ZjZmNik7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWpiLWlucHV0LWJvcmRlci1jb2xvciwgI2Y3ZjZmNik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tamItaW5wdXQtYm9yZGVyLXJhZGl1cywgMTZweCk7XG4gICAgbWFyZ2luOiA0cHggMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IGVhc2UgMC4zcyBhbGw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3g6Zm9jdXMtd2l0aGluIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tamItaW5wdXQtYm9yZGVyLWNvbG9yLWZvY3VzLCAjMWUyODMyKTsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gudHlwZS1wYXNzd29yZCBpbnB1dCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzZweCk7IH1cbiAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAuaW5wdXQtYm94LnR5cGUtcGFzc3dvcmQgLnBhc3N3b3JkLXRyaWdnZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIG1hcmdpbjogNHB4IDAgNHB4IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveC50eXBlLXBhc3N3b3JkIC5wYXNzd29yZC10cmlnZ2VyIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4yczsgfVxuICAgICAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAuaW5wdXQtYm94LnR5cGUtcGFzc3dvcmQgLnBhc3N3b3JkLXRyaWdnZXIgc3ZnLnBhc3N3b3JkLXZpc2libGUgLmV5ZS1saW5lIHtcbiAgICAgICAgICBzdHJva2U6ICMwMGI2MDA7XG4gICAgICAgICAgZDogcGF0aChcIk0gMTAgNjAgQyAzMCAyMCAxMDAgMjAgMTEwIDYwXCIpOyB9XG4gICAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gudHlwZS1wYXNzd29yZCAucGFzc3dvcmQtdHJpZ2dlciBzdmcucGFzc3dvcmQtdmlzaWJsZSBjaXJjbGUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyAwLjJzO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpOyB9XG4gICAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gudHlwZS1wYXNzd29yZCAucGFzc3dvcmQtdHJpZ2dlciBzdmcgLmV5ZS1saW5lIHtcbiAgICAgICAgICBzdHJva2Utd2lkdGg6IDE0cHg7XG4gICAgICAgICAgc3Ryb2tlOiAjYmJiO1xuICAgICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICBkOiBwYXRoKFwiTSAwIDYwIEMgNDAgMTAwIDgwIDEwMCAxMjAgNjBcIik7IH1cbiAgICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveC50eXBlLXBhc3N3b3JkIC5wYXNzd29yZC10cmlnZ2VyIHN2ZyBjaXJjbGUge1xuICAgICAgICAgIGZpbGw6ICMwMGI2MDA7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIDBzOyB9XG4gICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveCAucGFzc3dvcmQtdHJpZ2dlciB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveCBpbnB1dCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IDJweCAxMnB4IDAgMTJweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgY29sb3I6ICMxZjE3MzU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAwOyB9XG4gICAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAuaW5wdXQtYm94IGlucHV0OmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAubWVzc2FnZS1ib3gge1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgcGFkZGluZzogMnB4IDhweDtcbiAgICBjb2xvcjogIzkyOTI5MjsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5tZXNzYWdlLWJveDplbXB0eSB7XG4gICAgICBwYWRkaW5nOiAwOyB9XG4gICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLm1lc3NhZ2UtYm94LmVycm9yIHtcbiAgICAgIGNvbG9yOiByZWQ7IH1cbiJdfQ== */";

class JBInputWebComponent extends HTMLElement {
    static get formAssociated() { return true; }
    get value() {
        return this._value
    }
    set value(value) {
        this._value = value;
        if(this.internals_){
            this.internals_.setFormValue(value);
        }
        this._shadowRoot.querySelector('.input-box input').setAttribute('value', value);
    }
    constructor() {
        super();
        if(typeof this.attachInternals == "function"){
            //some browser dont support attachInternals
            this.internals_ = this.attachInternals();
        }
        this.initWebComponent();
        this.initProp();
        // js standard input element to more assosicate it with form element
    }
    initWebComponent() {
        this._shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this._html = `<style>${css_248z$2}</style>` + '\n' + HTML$2;
        this._element = document.createElement('template');
        this._element.innerHTML = this._html;
        this._shadowRoot.appendChild(this._element.content.cloneNode(true));
        this.inputElement = this._shadowRoot.querySelector('.input-box input');
        this.registerEventListener();
    }
    registerEventListener() {
        this.inputElement.addEventListener('change', this.onInputChange.bind(this));
        this.inputElement.addEventListener('keypress', this.onInputKeyPress.bind(this));
        this.inputElement.addEventListener('keyup', this.onInputKeyup.bind(this));
        this.inputElement.addEventListener('keydown',this.onInputKeyDown.bind(this));
    }
    initProp() {
        this.validationList = [];
        this.value = this.getAttribute('value') || '';
        this.validation = {
            isValid: null,
            message: null
        };
    }
    static get observedAttributes() {
        return ['label', 'type', 'message', 'value', 'name', 'autocomplete'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // do something when an attribute has changed
        this.onAttributeChange(name, newValue);
    }
    onAttributeChange(name, value) {
        switch (name) {
            case 'label':
                this._shadowRoot.querySelector('label .label-value').innerHTML = value;
                if(value == null || value == undefined || value == ""){
                    this._shadowRoot.querySelector('label').classList.add('--hide');
                }else {
                    this._shadowRoot.querySelector('label').classList.remove('--hide');
                }
                break;
            case 'type':
                this.inputElement.setAttribute('type', value);
                if (value == "password") {
                    this.initPassword();
                }
                break;
            case 'message':
                this._shadowRoot.querySelector('.message-box').innerHTML = value;
                break;
            case 'value':
                this.value = value;
                break;
            case 'name':
                this.inputElement.setAttribute('name',value);
                break;
            case 'autocomplete':
                this.inputElement.setAttribute('autocomplete', value);
                break;
        }

    }
    initPassword() {
        this._shadowRoot.querySelector('.input-box').classList.add('type-password');
        this.isPasswordvisible = false;
        this._shadowRoot.querySelector('.password-trigger').addEventListener('click', this.onPasswordTriggerClicked.bind(this));
    }
    onPasswordTriggerClicked() {
        this.isPasswordvisible = !this.isPasswordvisible;
        const textField = this._shadowRoot.querySelector('.input-box input');
        if (this.isPasswordvisible) {
            this._shadowRoot.querySelector('.password-trigger svg').classList.add('password-visible');
            textField.setAttribute('type', 'text');
        } else {
            this._shadowRoot.querySelector('.password-trigger svg').classList.remove('password-visible');
            textField.setAttribute('type', 'password');
        }
    }
    onInputKeyDown(e){
        const keyDownnInitObj = {
            key:e.key,
            keyCode:e.keyCode,
            code:e.code,
            ctrlKey:e.ctrlKey,
            shiftKey:e.shiftKey,
            altKey:e.altKey,
            charCode:e.charCode,
            which:e.which
        };
        const event = new KeyboardEvent("keydown",keyDownnInitObj);
        this.dispatchEvent(event);
    }
    onInputKeyPress() {
        //TODO: raise keypress event
        const event = new CustomEvent('keypress');
        this.dispatchEvent(event);
    }
    onInputKeyup(e) {
        const inputText = e.target.value;
        this.triggerInputValidation(false);
        //here is the rare  time we update _value directly becuase we want trigger event that may read value directly from dom
        this._value = inputText;
        const event = new CustomEvent('keyup');
        this.dispatchEvent(event);
    }
    onInputChange(e) {
        const inputText = e.target.value;
        this.triggerInputValidation(true);
        //here is the rare  time we update _value directly becuase we want trigger event that may read value directly from dom
        this._value = inputText;
        const validationObject = this.checkInputValidation(inputText);
        const event = new CustomEvent('change',{
            detail: {
                isValid: validationObject.isAllValid,
                validationObject:validationObject,
            },
        });
        this.dispatchEvent(event);
    }
    triggerInputValidation(showError = true) {
        // this method is for use out of component  for example if user click on submit button and developer want to check if all fields are valid
        //takeAction determine if we want to show user error in web component difualtManner or developer will handle it by himself
        const inputText = this._shadowRoot.querySelector('.input-box input').value;
        
        const validationResult = this.checkInputValidation(inputText);
        
        if (showError == true && !validationResult.isAllValid) {
            const firstFault = validationResult.validationList.find(x => !x.isValid);
            this.showValidationError(firstFault.message);
        } else if(validationResult.isAllValid) {
            this.clearValidationError();
        }
        return validationResult;
    }
    checkInputValidation(value){
        const validationResult = {
            validationList: [],
            isAllValid: true
        };
        this.validationList.forEach((validation) => {
            const res = this.checkValidation(value, validation);
            validationResult.validationList.push(res);
            if (!res.isValid) {
                validationResult.isAllValid = false;
            }
        });
        return validationResult;
    }
    checkValidation(text, validation) {
        var testRes;
        if(validation.validator instanceof RegExp){
            testRes = validation.validator.test(text);
            validation.validator.lastIndex = 0;
        }

        if(typeof validation.validator == "function"){
            testRes = validation.validator(text);
        }

        if (!testRes) {
            return {
                isValid: false,
                message: validation.message,
                validation: validation
            }
        }
        return {
            isValid: true,
            message: '',
            validation: validation
        };
    }
    showValidationError(error) {
        this.validation = {
            isValid: false,
            message: error
        };
        this._shadowRoot.querySelector('.message-box').innerHTML = error;
        this._shadowRoot.querySelector('.message-box').classList.add('error');
    }
    clearValidationError() {
        this.validation = {
            isValid: true,
            message: null
        };
        const text = this.getAttribute('message') || '';
        this._shadowRoot.querySelector('.message-box').innerHTML = text;
        this._shadowRoot.querySelector('.message-box').classList.remove('error');
    }
}
const myElementNotExists$1 = !customElements.get('jb-input');
if(myElementNotExists$1){
    window.customElements.define('jb-input', JBInputWebComponent);
}

class JBSearchbarWebComponent extends HTMLElement {
    get isLoading() {
        return this._isLoading
    }
    set isLoading(value) {
        this._isLoading = value;
        if (value == true) {
            this._element.searchButton.classList.add('--loading');
        } else {
            this._element.searchButton.classList.remove('--loading');
        }
    }
    get inputState(){
        return this._inputState;
    }
    set inputState(value){
        if(value == "SELECT_COLUMN"){
            this._elements.intent.wrapper.classList.add('--hide');
            this._elements.columnSelect.parentElement.classList.remove('--hide');
        }else if(value == "FILL_VALUE"){
            this._elements.intent.wrapper.classList.remove('--hide');
            this._elements.intent.input.wrapper.innerHTML = "";
            this._elements.columnSelect.parentElement.classList.add('--hide');
        }
        this._inputState = value;
    }
    get value(){
        return this.filterList
    }
    constructor() {
        super();
        this.initWebComponent();
    }
    registerEventListener() {
        this._elements.columnSelect.addEventListener('init',this.setColumnList.bind(this));
        this._elements.columnSelect.addEventListener('change',this.onColumnSelected.bind(this));
        this._elements.intent.submitButton.addEventListener('click',this.onIntentSubmited.bind(this));

    }
    initProp() {
        this.intentColumn = {
            column:null,
            value:null,
            active:false
        };
        this._inputState = "SELECT_COLUMN";
        this.filterList = this.createFilterList();

    }
    createFilterList(){
        const flProxy = new Proxy([],{
            get:(target, property)=>{
                return target[property];
            },
            set:(target, property, value, receiver)=>{
                target[property] = value;
                if(!(property == "length")){
                    const dom = this.createFilterDOM(value);
                    this._elements.filterListWrapper.appendChild(dom);
                }
                return true;

            }
        });
        return flProxy;
    }
    createFilterDOM({label}){
        const dom= document.createElement('div');
        dom.classList.add('filter-item');
        dom.innerHTML = label;
        return dom;
        
    }
    connectedCallback() {
        // standard web component event that called when all of dom is binded
        this.callOnLoadEvent();
        this.initProp();
    }
    callOnLoadEvent() {
        var event = new CustomEvent('load', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
    initWebComponent() {
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._html = `<style>${css_248z}</style>` + '\n' + HTML;
        this._element = document.createElement('template');
        this._element.innerHTML = this._html;
        this._shadowRoot.appendChild(this._element.content.cloneNode(true));
        this._elements = {
            filterListWrapper: this._shadowRoot.querySelector('.filter-list-section'),
            searchButton: this._shadowRoot.querySelector('.search-button-wrapper'),
            columnSelect: this._shadowRoot.querySelector('.column-select'),
            intent:{
                column:this._shadowRoot.querySelector('.intent-wrapper .intent-column'),
                input:{
                    wrapper:this._shadowRoot.querySelector('.intent-wrapper .intent-input-wrapper'),
                    input:null
                },
                submitButton:this._shadowRoot.querySelector('.intent-wrapper .intent-submit-button'),
                wrapper: this._shadowRoot.querySelector('.intent-wrapper')
            }
        };
        this.registerEventListener();
    }
    static get observedAttributes() {
        return [];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // do something when an attribute has changed
        this.onAttributeChange(name, newValue);
    }
    onAttributeChange(name, value) {
    }
    setColumnList(){
        this._elements.columnSelect.callbacks.getOptionTitle = (column)=>{return column.label};
        this._elements.columnSelect.optionList = [
            {
                key:'name',
                label:'نام',
                type:'TEXT'
            },
            {
                key:'age',
                label:'سن',
                type:'TEXT'
            },
            {
                key:'fromDate',
                label:'از تاریخ',
                type:'TEXT'
            },
        ];
    }
    onColumnSelected(e){
       const column = e.target.value;
        this.intentColumn.column = column;
        this.inputState = "FILL_VALUE";
        this._elements.intent.column.innerHTML = column.label;
        const inputDom =  this.createIntentInputDom(column);
        this._elements.intent.input.input = inputDom;
        this._elements.intent.input.wrapper.appendChild(inputDom);
    }
    createIntentInputDom(column){
        const setIntentActive = (value)=>{
            this.intentColumn.active = value;
            if(value){
                this._elements.intent.submitButton.classList.add('--active');
            }else {
                this._elements.intent.submitButton.classList.remove('--active');  
            }
        };
        const createTextInput = ()=>{
            const input = document.createElement('jb-input');
            input.addEventListener('keydown',(e)=>{
               if(e.keyCode == 13 && e.target.value.trim()!= ""){
                    this.onIntentSubmited();
               }
            });
            input.addEventListener('keyup',(e)=>{
                this.intentColumn.value = e.target.value;
                if(e.target.value.length>0){
                    setIntentActive(true);
                }else {
                    setIntentActive(false); 
                }
            });
            return input;
        };
        switch(column.type){
            case 'TEXT':
                return createTextInput();
        }
    }
    onIntentSubmited(){
        if(this.intentColumn.active){
            this.submitIntent(this.intentColumn.column,this.intentColumn.value);
            this.inputState = "SELECT_COLUMN";
            this.intentColumn = {
                column:null,
                value:null,
                active:false
            };

        }
    }
    submitIntent(column, value){
        let label = "";
        switch(column.type){
            case 'TEXT':
                label = value;
        }
        this.filterList.push({
            column: column,
            value: value,
            label: label
        });
    }

}
const myElementNotExists$2 = !customElements.get('jb-searchbar');
if(myElementNotExists$2){
    window.customElements.define('jb-searchbar', JBSearchbarWebComponent);
}
//# sourceMappingURL=JBSearchbar.js.map
