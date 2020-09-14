import { observable }  from 'mobx'

class JBSearchBarData  {
     // we detemine the type that search bar support so developer know about it
     typesArray = [
         {
            name:"number",
         },
         {
             name:"text"
         },
         {
             name : "date"
         },
         {
             name:"list"
         }
        ]

    @observable columns=[
       /* {
            id:1,
            name:'UserId',
            caption:"شناسه کاربر",
            type:"number",
        },
        {
            id: 2,
            name:'UseName',
            caption:"نام کاربر",
            type:"text",
        },
        {
            id:3,
            name:'Age',
            caption:"سن",
            type:"number",
        },
        {
            id:4,
            name:'PhoneNumber',
            caption:"شماره تلفن",
            type:"number",
        },
        {
            id:5,
            name:'RegistrationDate',
            caption:"تاریخ ثبت نام",
            type:"date",
        },
        {
            id:6,
            name:'Gender',
            caption:"جنسیت",
            type:"list",
            config:{
                options:[
                    {
                        value:"male",
                        caption:"آقا"
                    },
                    {
                        value:"female",
                        caption:"خانم"
                    },
                ],
                placeHolder:"جنسیت را انتخاب کنید"
            }
        }*/
    ]
   checkColumnsValidation(col){
       //check if input Type is valid
   }
   triggers={
       focus : undefined,
       injectFilter:undefined
   }
   callBacks={
       onChange : undefined,
       oncolumnSelect:undefined,
       onHeightOverflow:undefined,
       onHeightChange:undefined
   }
   //determine if you want trigger search button on filter bar value changed if set to false user have to click on search button after change the filter list value
   searchOnChange = true;//true or false,
   captions={
    unknownSelectedOptionCaption:"ستون نامشخص",
    unknownSelectedOptionValue:"مقدار نا مشخص"
   }
   value=[];
   defaultValues = [
        // {
        //     columnId:1,
        //     value:'the real value we send to server',
        //     valueCaption:'string value we show to user'
        // }
   ]
}
export default JBSearchBarData;
