import{r as l,R as T}from"./index-0yr9KlQE.js";import"./jb-searchbar-CQIN6-Bd.js";import{r as o}from"./index-Dsu68ezD.js";import"./index-DPYNcTbK.js";import"./jb-validation-BFHHOeHY.js";import"./index-BHpGtycm.js";import"./index-Cce6c48H.js";import"./index-C1o-zhIV.js";import"./index-B9NHg_Qw.js";import"./jb-date-input-CxH_PYg7.js";import"./jb-calendar-CrWRUajT.js";import"./jb-popover-BOcn8-_3.js";function h(e){let t=l.useRef(null);return l.useEffect(()=>{t.current.columnList=e.columnList},[t.current,e.columnList]),l.useEffect(()=>{t.current&&(t.current.searchOnChange=!!e.searchOnChange)},[t.current,e.searchOnChange]),o(t,"load",e.onLoad,!0),o(t,"init",e.onInit,!0),o(t,"search",e.onSearch),T.createElement("jb-searchbar",{placeholder:e.placeholder,ref:t})}const R={title:"Components/JBSearchbar",component:h},a={args:{placeholder:"select filter",columnList:[{key:"title",label:"title",type:"TEXT"},{key:"name",label:"name",type:"TEXT",maxUsageCount:3},{key:"age",label:"age",type:"TEXT"},{key:"fromDate",label:"from date",type:"DATE"},{key:"GENDER",label:"gender",type:"SELECT",config:{optionList:[{title:"male",value:"MALE"},{title:"female",value:"FEMALE"}],getOptionTitle:e=>(e==null?void 0:e.title)||"",getOptionValue:e=>(e==null?void 0:e.value)||""}},{key:"fromDate",label:"to date",type:"DATE"}],onSearch:()=>{console.log("search happened")}}},r={args:{placeholder:"نوع فیلتر را انتخاب کنید",columnList:[{key:"title",label:"تیتر",type:"TEXT"},{key:"name",label:"نام",type:"TEXT",maxUsageCount:3},{key:"age",label:"سن",type:"TEXT"},{key:"fromDate",label:"از تاریخ",type:"DATE"},{key:"GENDER",label:"جنسیت",type:"SELECT",config:{optionList:[{title:"آقا",value:"MALE"},{title:"خانم",value:"FEMALE"}],getOptionTitle:e=>e.title,getOptionValue:e=>e.value}},{key:"fromDate",label:"تا تاریخ",type:"DATE"}]},parameters:{themes:{themeOverride:"rtl"}}},n={args:{...a.args,searchOnChange:!0}};var s,p,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placeholder: 'select filter',
    columnList: [{
      key: 'title',
      label: 'title',
      type: 'TEXT'
    }, {
      key: 'name',
      label: 'name',
      type: 'TEXT',
      maxUsageCount: 3
    }, {
      key: 'age',
      label: 'age',
      type: 'TEXT'
    }, {
      key: 'fromDate',
      label: 'from date',
      type: 'DATE'
    }, {
      key: 'GENDER',
      label: 'gender',
      type: 'SELECT',
      config: {
        optionList: [{
          title: 'male',
          value: 'MALE'
        }, {
          title: 'female',
          value: 'FEMALE'
        }],
        getOptionTitle: option => {
          return option?.title || "";
        },
        getOptionValue: option => {
          return option?.value || "";
        }
      }
    }, {
      key: 'fromDate',
      label: 'to date',
      type: 'DATE'
    }],
    onSearch: () => {
      console.log('search happened');
    }
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,c,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'نوع فیلتر را انتخاب کنید',
    columnList: [{
      key: 'title',
      label: 'تیتر',
      type: 'TEXT'
    }, {
      key: 'name',
      label: 'نام',
      type: 'TEXT',
      maxUsageCount: 3
    }, {
      key: 'age',
      label: 'سن',
      type: 'TEXT'
    }, {
      key: 'fromDate',
      label: 'از تاریخ',
      type: 'DATE'
    }, {
      key: 'GENDER',
      label: 'جنسیت',
      type: 'SELECT',
      config: {
        optionList: [{
          title: 'آقا',
          value: 'MALE'
        }, {
          title: 'خانم',
          value: 'FEMALE'
        }],
        getOptionTitle: option => {
          return option.title;
        },
        getOptionValue: option => {
          return option.value;
        }
      }
    }, {
      key: 'fromDate',
      label: 'تا تاریخ',
      type: 'DATE'
    }]
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var E,y,g;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    searchOnChange: true
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const M=["Normal","RTLSample","SearchOnChange"];export{a as Normal,r as RTLSample,n as SearchOnChange,M as __namedExportsOrder,R as default};
