import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'jb-select';
import 'jb-input';
import 'jb-date-input';

var HTML = "<div class=\"jb-searchbar-web-component\">\r\n    <div class=\"search-dynamic-wrapper\">\r\n        <section class=\"filter-list-section\"></section>\r\n        <section class=\"filter-input-section\">\r\n            <div class=\"column-select-wrapper\">\r\n                 <jb-select class=\"column-select\" placeholder=\"نوع فیلتر را انتخاب کنید\"></jb-select>\r\n            </div>\r\n            <div class=\"intent-wrapper --hide\">\r\n                <div class=\"intent-column\"></div>\r\n                <div class=\"intent-input-wrapper\"></div>\r\n                <div class=\"intent-submit-button\">\r\n                    <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 493.464 493.464\" space=\"preserve\">\r\n                        <g>\r\n                            <g>\r\n                                <path d=\"M246.736,0C110.692,0,0.004,110.68,0.004,246.732c0,136.06,110.688,246.732,246.732,246.732    c136.048,0,246.724-110.672,246.724-246.732C493.456,110.68,382.78,0,246.736,0z M360.524,208.716L230.98,338.268    c-2.82,2.824-7.816,2.824-10.64,0l-86.908-86.912c-1.412-1.416-2.192-3.3-2.192-5.324c0.004-2.016,0.784-3.912,2.192-5.336    l11.108-11.104c1.412-1.408,3.3-2.18,5.328-2.18c2.016,0,3.908,0.772,5.316,2.18l67.752,67.752c1.5,1.516,3.94,1.516,5.444,0    l110.392-110.392c2.824-2.824,7.828-2.824,10.644,0l11.108,11.124c1.412,1.4,2.208,3.304,2.208,5.308    C362.732,205.412,361.936,207.3,360.524,208.716z\"/>\r\n                            </g>\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"search-button-wrapper\">\r\n        <svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <circle cx=\"255\" cy=\"255\" r=\"170\"></circle>\r\n            <g class=\"spin-line-group\">\r\n                <rect x=\"0\" y=\"0\" width=\"512\" height=\"512\"/>\r\n                <path class=\"convertable-line\" d=\"M400 400 L 450 450\"></path>\r\n            </g>\r\n        </svg>\r\n    </div>\r\n</div>";

var css_248z = ".jb-searchbar-web-component {\n  width: 100%;\n  height: auto;\n  min-height: 48px;\n  direction: rtl;\n  display: flex; }\n  .jb-searchbar-web-component .search-dynamic-wrapper {\n    width: calc(100% - 48px);\n    height: auto;\n    min-height: 48px;\n    display: inline-flex;\n    flex-wrap: wrap; }\n    .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section {\n      display: inline-flex;\n      align-items: center;\n      flex-wrap: wrap;\n      row-gap: 8px;\n      column-gap: 8px; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item {\n        display: inline-block;\n        margin: 0px 0px;\n        padding: 4px 8px;\n        background-color: #408cff;\n        color: #fff;\n        border-radius: 36px; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .delete-btn {\n          cursor: pointer;\n          display: block;\n          padding: 4px 8px 0px 8px;\n          float: right;\n          box-sizing: border-box; }\n          .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .delete-btn svg {\n            fill: #fff;\n            width: 12px;\n            height: 12px; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .filter-label {\n          display: block;\n          float: right;\n          padding: 2px 0 0 0;\n          box-sizing: border-box; }\n    .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section {\n      --jb-select-margin: 0 0;\n      --jb-select-border-radius: 24px;\n      --jb-select-border-color: transparent;\n      --jb-select-border-color-selected: transparent;\n      --jb-select-bgcolor: #fff;\n      --jb-select-list-box-shadow: 0px 15px 20px -6px #d8d8d8;\n      display: inline-block; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper {\n        width: 240px; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper.--hide {\n          display: none; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper {\n        display: flex;\n        align-items: center; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-input-wrapper {\n          width: 180px;\n          --jb-input-margin: 0 0;\n          --jb-input-border-radius: 0px;\n          --jb-input-border-color: transparent;\n          --jb-input-border-color-focus: transparent;\n          --jb-input-bgcolor: #fff;\n          --jb-input-message-box-display:none;\n          --jb-select-margin: 0 0;\n          --jb-select-border-radius: 24px;\n          --jb-select-border-color: transparent;\n          --jb-select-border-color-selected: transparent;\n          --jb-select-bgcolor: #fff;\n          --jb-date-input-margin: 0 0;\n          --jb-date-input-border-radius: 0px;\n          --jb-date-input-border-color: transparent;\n          --jb-date-input-border-color-focus: transparent;\n          --jb-date-input-bgcolor: #fff;\n          --jb-date-input-message-box-display: none; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button {\n          width: 32px;\n          height: 32px;\n          float: right;\n          padding: 4px 0 4px 0;\n          cursor: not-allowed; }\n          .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active {\n            cursor: pointer; }\n            .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active svg {\n              fill: #28BD48; }\n          .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button svg {\n            fill: #929292; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper.--hide {\n          display: none; }\n  .jb-searchbar-web-component .search-button-wrapper {\n    width: 48px;\n    height: auto;\n    min-height: 48px;\n    cursor: pointer; }\n    .jb-searchbar-web-component .search-button-wrapper svg {\n      width: 36px;\n      height: 36px;\n      margin: 4px 8px;\n      box-sizing: border-box;\n      background-color: transparent; }\n      .jb-searchbar-web-component .search-button-wrapper svg circle {\n        stroke: #7b7b7b;\n        fill: white;\n        stroke-width: 25px; }\n      .jb-searchbar-web-component .search-button-wrapper svg .spin-line-group {\n        transform-origin: center;\n        fill: transparent; }\n        .jb-searchbar-web-component .search-button-wrapper svg .spin-line-group rect {\n          fill: transparent; }\n        .jb-searchbar-web-component .search-button-wrapper svg .spin-line-group path {\n          fill: none;\n          stroke: #9b9b9b;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          transition: 0.2s;\n          stroke-width: 35px;\n          transform-origin: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkpCU2VhcmNoYmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYSxFQUFFO0VBQ2Y7SUFDRSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZUFBZSxFQUFFO0lBQ2pCO01BQ0Usb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsWUFBWTtNQUNaLGVBQWUsRUFBRTtNQUNqQjtRQUNFLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsbUJBQW1CLEVBQUU7UUFDckI7VUFDRSxlQUFlO1VBQ2YsY0FBYztVQUNkLHdCQUF3QjtVQUN4QixZQUFZO1VBQ1osc0JBQXNCLEVBQUU7VUFDeEI7WUFDRSxVQUFVO1lBQ1YsV0FBVztZQUNYLFlBQVksRUFBRTtRQUNsQjtVQUNFLGNBQWM7VUFDZCxZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLHNCQUFzQixFQUFFO0lBQzlCO01BQ0UsdUJBQXVCO01BQ3ZCLCtCQUErQjtNQUMvQixxQ0FBcUM7TUFDckMsOENBQThDO01BQzlDLHlCQUF5QjtNQUN6Qix1REFBdUQ7TUFDdkQscUJBQXFCLEVBQUU7TUFDdkI7UUFDRSxZQUFZLEVBQUU7UUFDZDtVQUNFLGFBQWEsRUFBRTtNQUNuQjtRQUNFLGFBQWE7UUFDYixtQkFBbUIsRUFBRTtRQUNyQjtVQUNFLFlBQVk7VUFDWixzQkFBc0I7VUFDdEIsNkJBQTZCO1VBQzdCLG9DQUFvQztVQUNwQywwQ0FBMEM7VUFDMUMsd0JBQXdCO1VBQ3hCLG1DQUFtQztVQUNuQyx1QkFBdUI7VUFDdkIsK0JBQStCO1VBQy9CLHFDQUFxQztVQUNyQyw4Q0FBOEM7VUFDOUMseUJBQXlCO1VBQ3pCLDJCQUEyQjtVQUMzQixrQ0FBa0M7VUFDbEMseUNBQXlDO1VBQ3pDLCtDQUErQztVQUMvQyw2QkFBNkI7VUFDN0IseUNBQXlDLEVBQUU7UUFDN0M7VUFDRSxXQUFXO1VBQ1gsWUFBWTtVQUNaLFlBQVk7VUFDWixvQkFBb0I7VUFDcEIsbUJBQW1CLEVBQUU7VUFDckI7WUFDRSxlQUFlLEVBQUU7WUFDakI7Y0FDRSxhQUFhLEVBQUU7VUFDbkI7WUFDRSxhQUFhLEVBQUU7UUFDbkI7VUFDRSxhQUFhLEVBQUU7RUFDdkI7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlLEVBQUU7SUFDakI7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWU7TUFDZixzQkFBc0I7TUFDdEIsNkJBQTZCLEVBQUU7TUFDL0I7UUFDRSxlQUFlO1FBQ2YsV0FBVztRQUNYLGtCQUFrQixFQUFFO01BQ3RCO1FBQ0Usd0JBQXdCO1FBQ3hCLGlCQUFpQixFQUFFO1FBQ25CO1VBQ0UsaUJBQWlCLEVBQUU7UUFDckI7VUFDRSxVQUFVO1VBQ1YsZUFBZTtVQUNmLHFCQUFxQjtVQUNyQixzQkFBc0I7VUFDdEIsZ0JBQWdCO1VBQ2hCLGtCQUFrQjtVQUNsQix3QkFBd0IsRUFBRSIsImZpbGUiOiJKQlNlYXJjaGJhci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNDhweDtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIGRpc3BsYXk6IGZsZXg7IH1cbiAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwOyB9XG4gICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItbGlzdC1zZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIHJvdy1nYXA6IDhweDtcbiAgICAgIGNvbHVtbi1nYXA6IDhweDsgfVxuICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItbGlzdC1zZWN0aW9uIC5maWx0ZXItaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA4Y2ZmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzZweDsgfVxuICAgICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1keW5hbWljLXdyYXBwZXIgLmZpbHRlci1saXN0LXNlY3Rpb24gLmZpbHRlci1pdGVtIC5kZWxldGUtYnRuIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweCAwcHggOHB4O1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItbGlzdC1zZWN0aW9uIC5maWx0ZXItaXRlbSAuZGVsZXRlLWJ0biBzdmcge1xuICAgICAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4OyB9XG4gICAgICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWxpc3Qtc2VjdGlvbiAuZmlsdGVyLWl0ZW0gLmZpbHRlci1sYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIHBhZGRpbmc6IDJweCAwIDAgMDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiB7XG4gICAgICAtLWpiLXNlbGVjdC1tYXJnaW46IDAgMDtcbiAgICAgIC0tamItc2VsZWN0LWJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAtLWpiLXNlbGVjdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgLS1qYi1zZWxlY3QtYm9yZGVyLWNvbG9yLXNlbGVjdGVkOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tamItc2VsZWN0LWJnY29sb3I6ICNmZmY7XG4gICAgICAtLWpiLXNlbGVjdC1saXN0LWJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggLTZweCAjZDhkOGQ4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1keW5hbWljLXdyYXBwZXIgLmZpbHRlci1pbnB1dC1zZWN0aW9uIC5jb2x1bW4tc2VsZWN0LXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMjQwcHg7IH1cbiAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiAuY29sdW1uLXNlbGVjdC13cmFwcGVyLi0taGlkZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiAuaW50ZW50LXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWlucHV0LXNlY3Rpb24gLmludGVudC13cmFwcGVyIC5pbnRlbnQtaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgIC0tamItaW5wdXQtbWFyZ2luOiAwIDA7XG4gICAgICAgICAgLS1qYi1pbnB1dC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgLS1qYi1pbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC0tamItaW5wdXQtYm9yZGVyLWNvbG9yLWZvY3VzOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtLWpiLWlucHV0LWJnY29sb3I6ICNmZmY7XG4gICAgICAgICAgLS1qYi1pbnB1dC1tZXNzYWdlLWJveC1kaXNwbGF5Om5vbmU7XG4gICAgICAgICAgLS1qYi1zZWxlY3QtbWFyZ2luOiAwIDA7XG4gICAgICAgICAgLS1qYi1zZWxlY3QtYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICAtLWpiLXNlbGVjdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC0tamItc2VsZWN0LWJvcmRlci1jb2xvci1zZWxlY3RlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLS1qYi1zZWxlY3QtYmdjb2xvcjogI2ZmZjtcbiAgICAgICAgICAtLWpiLWRhdGUtaW5wdXQtbWFyZ2luOiAwIDA7XG4gICAgICAgICAgLS1qYi1kYXRlLWlucHV0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAtLWpiLWRhdGUtaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtLWpiLWRhdGUtaW5wdXQtYm9yZGVyLWNvbG9yLWZvY3VzOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtLWpiLWRhdGUtaW5wdXQtYmdjb2xvcjogI2ZmZjtcbiAgICAgICAgICAtLWpiLWRhdGUtaW5wdXQtbWVzc2FnZS1ib3gtZGlzcGxheTogbm9uZTsgfVxuICAgICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1keW5hbWljLXdyYXBwZXIgLmZpbHRlci1pbnB1dC1zZWN0aW9uIC5pbnRlbnQtd3JhcHBlciAuaW50ZW50LXN1Ym1pdC1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDAgNHB4IDA7XG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuICAgICAgICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWlucHV0LXNlY3Rpb24gLmludGVudC13cmFwcGVyIC5pbnRlbnQtc3VibWl0LWJ1dHRvbi4tLWFjdGl2ZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgICAgICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWlucHV0LXNlY3Rpb24gLmludGVudC13cmFwcGVyIC5pbnRlbnQtc3VibWl0LWJ1dHRvbi4tLWFjdGl2ZSBzdmcge1xuICAgICAgICAgICAgICBmaWxsOiAjMjhCRDQ4OyB9XG4gICAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiAuaW50ZW50LXdyYXBwZXIgLmludGVudC1zdWJtaXQtYnV0dG9uIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiAjOTI5MjkyOyB9XG4gICAgICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWlucHV0LXNlY3Rpb24gLmludGVudC13cmFwcGVyLi0taGlkZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1idXR0b24td3JhcHBlciB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtYnV0dG9uLXdyYXBwZXIgc3ZnIHtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgbWFyZ2luOiA0cHggOHB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1idXR0b24td3JhcHBlciBzdmcgY2lyY2xlIHtcbiAgICAgICAgc3Ryb2tlOiAjN2I3YjdiO1xuICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyNXB4OyB9XG4gICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1idXR0b24td3JhcHBlciBzdmcgLnNwaW4tbGluZS1ncm91cCB7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7IH1cbiAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtYnV0dG9uLXdyYXBwZXIgc3ZnIC5zcGluLWxpbmUtZ3JvdXAgcmVjdCB7XG4gICAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7IH1cbiAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtYnV0dG9uLXdyYXBwZXIgc3ZnIC5zcGluLWxpbmUtZ3JvdXAgcGF0aCB7XG4gICAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgICBzdHJva2U6ICM5YjliOWI7XG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICBzdHJva2Utd2lkdGg6IDM1cHg7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyOyB9XG4iXX0= */";

class InputFactory {
    constructor() {

    }
    createTextInput({ onIntentSubmited, setIntentColumnValue, setIntentActive }) {
        const input = document.createElement('jb-input');
        input.addEventListener('keydown', (e) => {
            if (e.keyCode == 13 && e.target.value.trim() != "") {
                onIntentSubmited();
            }
        });
        input.addEventListener('keyup', (e) => {
            setIntentColumnValue(e.target.value, e.target.value);
            if (e.target.validation.isValid) {
                setIntentActive(true);
            } else {
                setIntentActive(false,e.target.validation.message);
            }
        });
        input.addEventListener('init', () => {
            input.focus();
            input.validationList = [
                {
                    validator: /.{1}/g,
                    message: 'پر کردن فیلد اجباری است'
                },
            ];
        });
        input.addEventListener('init', () => {
            input.focus();
        });
        return input;
    }
    createNumberInput({ onIntentSubmited, setIntentColumnValue, setIntentActive }){
        const input = document.createElement('jb-input');
        
        input.addEventListener('keydown', (e) => {
            if (e.keyCode == 13 && e.target.value.trim() != "") {
                onIntentSubmited();
            }
        });
        input.addEventListener('keyup', (e) => {
            const value = parseInt(e.target.value);
            setIntentColumnValue(value,e.target.value);
            if (e.target.validation.isValid) {
                setIntentActive(true);
            } else {
                setIntentActive(false,e.target.validation.message);
            }
        });
        input.addEventListener('init', () => {
            input.focus();
            input.validationList = [
                {
                    validator: /.{1}/g,
                    message: 'پر کردن فیلد اجباری است'
                },
                {
                    validator: /^[0-9]*$/g,
                    message: 'تنها میتوانید عدد وارد نمایید'
                },
            ];
        });
        return input;
    }
    createSelectInput({ column, onIntentSubmited, setIntentColumnValue, setIntentActive }) {
        const select = document.createElement('jb-select');
        select.callbacks.getOptionTitle = column.config.getOptionTitle;
        select.callbacks.getOptionValue = column.config.getOptionValue;
        select.optionList = column.config.optionList;
        select.addEventListener('change', (e) => {
            let label = "";
            label = e.target.textValue;
            setIntentColumnValue(e.target.value, label);
            setIntentActive(true);
            onIntentSubmited();
        });
        select.addEventListener('init', () => {
            select.focus();
        });
        return select;
    }
    createDateInput({ column, onIntentSubmited, setIntentColumnValue, setIntentActive }) {
        const dateInput = document.createElement('jb-date-input');
        dateInput.required = true;
        dateInput.addEventListener('init', () => {
            dateInput.focus();
        });
        dateInput.addEventListener('keyup', (e) => {
            if (e.target.validation.isValid) {
                setIntentActive(true);
                const value = e.target.value;
                const label = e.target.inputValue;
                setIntentColumnValue(value, label);
            } else {
                setIntentActive(false,e.target.validation.message);
            }
        });
        dateInput.addEventListener('select', (e) => {
            setIntentActive(true);
            const value = e.target.value;
            const label = e.target.inputValue;
            setIntentColumnValue(value, label);
            onIntentSubmited();
        });
        return dateInput;
    }
}

class JBSearchbarWebComponent extends HTMLElement {
    get isLoading() {
        return this._isLoading;
    }
    set isLoading(value) {
        if((!this._isLoading) && value){
            this.playSearchIconAnimation();
        }
        this._isLoading = value;
        
    }
    get inputState(){
        return this._inputState;
    }
    set inputState(value){
        if(value == "SELECT_COLUMN"){
            this._elements.columnSelect.value = null;
            this._elements.intent.wrapper.classList.add('--hide');
            this._elements.columnSelect.parentElement.classList.remove('--hide');
            this._elements.columnSelect.focus();
        }else if(value == "FILL_VALUE"){
            this._elements.intent.wrapper.classList.remove('--hide');
            this._elements.intent.input.wrapper.innerHTML = "";
            this._elements.columnSelect.parentElement.classList.add('--hide');
        }
        this._inputState = value;
    }
    get value(){
        return this.filterList.map(x=>({column:x.column,value:x.value}));
    }
    get columnList(){
        return this._columnList;
    }
    set columnList(value){
        //TODO: check validation of column to be array ind has neccessary prop
        this.setColumnList(value);
    }
    constructor() {
        super();
        this.initWebComponent();
        this._inputFactory = new InputFactory();
    }
    registerEventListener() {
        this._elements.columnSelect.addEventListener('change',this.onColumnSelected.bind(this));
        this._elements.intent.submitButton.addEventListener('click',this.onIntentSubmited.bind(this));
        this._elements.columnSelect.addEventListener('init',()=>{
            this.setColumnList();
            this._elements.columnSelect.focus();
        });
        this._elements.searchButton.wrapper.addEventListener('click',this.search.bind(this));

    }
    initProp() {
        this.intentColumn = {
            column:null,
            value:null,
            label:null,
            active:false
        };
        this._columnList = [];
        this._inputState = "SELECT_COLUMN";
        this.filterList = this.createFilterList();

    }
    createFilterList(){
        const flProxy = new Proxy([],{
            get:(target, property,receiver)=>{
                if(property == "splice"){
                    const origMethod = target[property];
                    const customSplice = (...args)=>{
                        this._elements.filterListWrapper.children[args[0]].remove();
                        //becuase we apply function like this the get wont call again in proxy
                        //we apply into proxy not orginal obj so setter hooks for splice in setter do their job
                        return origMethod.apply(receiver,args);
                    };
                    return customSplice;
                }
                return target[property];
            },
            set:(target, property, value, receiver)=>{
                if(!(property == "length")){
                    if( parseInt(property) == target.length){
                        //when push
                        const dom = this.createFilterDOM(value);
                        value.dom = dom;
                        this._elements.filterListWrapper.appendChild(dom);
                    }
                    if(!isNaN(property) && parseInt(property) < target.length){
                        //when splice
                        //we do dom delete in proxy getter
                        value.dom.filterIndex = parseInt(property);
                    }
                }
                target[property] = value;
                return true;

            }
        });
        return flProxy;
    }
    createFilterDOM({label,column}){
        const dom= document.createElement('div');
        dom.classList.add('filter-item');
        const deleteButtonDom = document.createElement('div');
        deleteButtonDom.classList.add('delete-btn');
        deleteButtonDom.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 298.667 298.667" style="enable-background:new 0 0 298.667 298.667;" xml:space="preserve"><g><polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   "/></g></svg>`;
        const labelDom = document.createElement('div');
        labelDom.classList.add('filter-label');
        labelDom.innerHTML = `${column.label}: ${label}`;
        const filterIndex = this.filterList.length;
        dom.filterIndex = filterIndex;
        deleteButtonDom.addEventListener('click',(e)=>{
            this.deleteFilter(e.currentTarget.parentElement.filterIndex);
        });
        dom.appendChild(deleteButtonDom);
        dom.appendChild(labelDom);
        return dom;
        
    }
    deleteFilter(filterIndex){
        this.filterList.splice(filterIndex,1);
        this.setColumnListSelectOptionList();
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
            searchButton:{
                wrapper: this._shadowRoot.querySelector('.search-button-wrapper'),
                svg:{
                    spinnerLine:this._shadowRoot.querySelector('.search-button-wrapper .convertable-line'),
                    spinnerBox:this._shadowRoot.querySelector('.search-button-wrapper .spin-line-group')
                }
            },

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
        return ['placeholder'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // do something when an attribute has changed
        this.onAttributeChange(name, newValue);
    }
    onAttributeChange(name, value) {
        switch (name) {
            case 'placeholder':
                this._elements.columnSelect.setAttribute('placeholder',value);
                break;
        }
    }
    setColumnList(columnList){
        this._columnList = columnList;
        this.setColumnListSelectOptionList();

    }
    setColumnListSelectOptionList(){
        const currentFilterKeys = this.filterList.map((filter)=>{
            return filter.column.key;
        });
        const columnList = this.columnList.filter((column)=>{
            const maxUsageCount = column.maxUsageCount || 1;
            const usedCount = currentFilterKeys.filter(key=>key==column.key).length;
            if(usedCount >= maxUsageCount){
                return false;
            }
            return true;
        });
        this._elements.columnSelect.callbacks.getOptionTitle = (column)=>{return column.label};
        this._elements.columnSelect.optionList = columnList;
    }
    onColumnSelected(e){
        const column = e.target.value;
        this.intentColumn.column = column;
        this.inputState = "FILL_VALUE";
        this._elements.intent.column.innerHTML = column.label;
        const inputDom = this.createIntentInputDom(column);
        this._elements.intent.input.input = inputDom;
        this._elements.intent.input.wrapper.appendChild(inputDom);
    }
    createIntentInputDom(column){
        const setIntentActive = (value,err="")=>{
            this.intentColumn.active = value;
            if(value){
                this._elements.intent.submitButton.classList.add('--active');
                this._elements.intent.submitButton.setAttribute('title','ثبت فیلتر');
            }else {
                this._elements.intent.submitButton.classList.remove('--active');  
                this._elements.intent.submitButton.setAttribute('title',err);
            }
        };
        const setIntentColumnValue = (value, label)=>{
            this.intentColumn.value = value;
            this.intentColumn.label = label;
        };
        switch(column.type){
            case 'TEXT':
                return this._inputFactory.createTextInput({onIntentSubmited:this.onIntentSubmited.bind(this), setIntentActive:setIntentActive, setIntentColumnValue});
            case 'NUMBER':
                return this._inputFactory.createNumberInput({onIntentSubmited:this.onIntentSubmited.bind(this), setIntentActive:setIntentActive, setIntentColumnValue});
            case 'SELECT':
                return this._inputFactory.createSelectInput({column,onIntentSubmited:this.onIntentSubmited.bind(this), setIntentActive:setIntentActive, setIntentColumnValue});
            case 'DATE':
                return this._inputFactory.createDateInput({column,onIntentSubmited:this.onIntentSubmited.bind(this), setIntentActive:setIntentActive, setIntentColumnValue});
        }
    }
    onIntentSubmited(){
        if(this.intentColumn.active){
            this.submitIntent(this.intentColumn.column,this.intentColumn.value, this.intentColumn.label);
            this.inputState = "SELECT_COLUMN";
            this.intentColumn = {
                column:null,
                value:null,
                label:null,
                active:false
            };
            this._elements.intent.submitButton.classList.remove('--active');

        }
    }
    submitIntent(column, value, label){
        this.filterList.push({
            column: column,
            value: value,
            label: label
        });
        this.setColumnListSelectOptionList();
    }
    playSearchIconAnimation(){
        const spinnerLine = this._elements.searchButton.svg.spinnerLine;
        const spinnerBox = this._elements.searchButton.svg.spinnerBox;
        var context = this;
        var ShrinkLineAnimation = spinnerLine.animate([{ d: 'path("M400 400 L 450 450")' }, { d: 'path("M410 410 L 415 415")' }], {id:'ShrinkLine',duration:400});
        ShrinkLineAnimation.cancel();
        var shrinkLineFunction = function(animation){
            spinnerLine.setAttribute("d","M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794");
            curveLineAnimation.play();
        };
        ShrinkLineAnimation.onfinish = shrinkLineFunction;
        var curveLineAnimation = spinnerLine.animate([{ d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")' }, { d: 'path("M 255 475 A 220 220 0 0 0 475 255")' }], {id:'CurveLine',duration:400});
        curveLineAnimation.cancel();
        var curveLineFunction = function(animation){
            spinnerLine.setAttribute("d","M 255 475 A 220 220 0 0 0 475 255");
            spinAnimation.play();
        };
        curveLineAnimation.onfinish = curveLineFunction;
        var spinAnimation = spinnerBox.animate([{transform:'rotate(0deg)'},{transform:'rotate(180deg)'},{transform:'rotate(360deg)'}], {id:'Spin',duration:1000,iterations: 1});
        spinAnimation.cancel();
        var spinFunction= function(animation){
            if(context.isLoading == true){
                spinAnimation.play();
            }else {
                ReversecurveLineAnimation.play();
            }
        };
        spinAnimation.onfinish = spinFunction;
        var growLineAnimation = spinnerLine.animate([{ d:'path("M410 410 L 415 415")' }, { d: 'path("M400 400 L 450 450")' }], {id:'GrowLine',uration:400});
        growLineAnimation.cancel();
        var growLineFunction = function(animation){
            spinnerLine.setAttribute("d","M400 400 L 450 450");
        };
        growLineAnimation.onfinish = growLineFunction;

        var ReversecurveLineAnimation = spinnerLine.animate([{ d: 'path("M 255 475 A 220 220 0 0 0 475 255")' }, { d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")' }], {id:'ReverseCurveLine',duration:400});
        ReversecurveLineAnimation.cancel();
        let ReversecurveLineFunction = function(animation){
            spinnerLine.setAttribute("d","M410 410 L 415 415");
            growLineAnimation.play();
        };
        ReversecurveLineAnimation.onfinish = ReversecurveLineFunction;
        ShrinkLineAnimation.play();
    }
    search(){
        const event = new CustomEvent('search');
        this.dispatchEvent(event);
    }
}
const myElementNotExists = !customElements.get('jb-searchbar');
if(myElementNotExists){
    window.customElements.define('jb-searchbar', JBSearchbarWebComponent);
}

function JBSearchbar(props) {
  var element = useRef();
  useEffect(function () {
    element.current.columnList = props.columnList;
  }, [props.columnList]);
  return /*#__PURE__*/React.createElement("jb-searchbar", {
    placeholder: props.placeholder,
    ref: element
  });
}

JBSearchbar.propTypes = {
  placeholder: PropTypes.string
};

export default JBSearchbar;
//# sourceMappingURL=JBSearchbar.js.map
